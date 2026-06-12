"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { RGBELoader } from "three/addons/loaders/RGBELoader.js";
import { MeshoptDecoder } from "three/addons/libs/meshopt_decoder.module.js";
import type { LinxoExpression } from "@/components/mascot/LinxoMascot";

const ROBOT_GLB =
  "https://chaingpt-web.s3.us-east-2.amazonaws.com/assets/3d/chainGPT_robo_COMP_2024.glb";
const ENV_HDR = "https://web-assets.chaingpt.org/assets/3d/Cannon_Exterior.hdr";
const EYE_VIDEO =
  "https://cdn.jsdelivr.net/gh/PazyukAleksey/test-script@main/eyes_video-transcode.mp4";

const FRUSTUM = 534;
const HERO_CAMERA = new THREE.Vector3(462, 740, 612);
const HERO_TARGET = new THREE.Vector3(-70, 420, 0);

const EXPRESSION_TIME: Record<LinxoExpression, number> = {
  neutral: 0.05,
  happy: 0.28,
  focused: 0.48,
  thinking: 0.68,
  excited: 0.88,
};

const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const fragmentShader = `
  #ifdef GL_ES
  precision highp float;
  #endif
  uniform sampler2D videoTexture;
  varying vec2 vUv;
  void main() {
    vec4 textColor = texture(videoTexture, vUv);
    gl_FragColor = vec4(textColor.rgb, textColor.r + textColor.g + textColor.b);
  }
`;

interface HeroWebGLProps {
  expression?: LinxoExpression;
}

export function HeroWebGL({ expression = "neutral" }: HeroWebGLProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const expressionRef = useRef(expression);
  expressionRef.current = expression;

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    let bakedMesh: THREE.Object3D | null = null;
    let targetEyeTime = EXPRESSION_TIME.neutral;

    const scene = new THREE.Scene();
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      -FRUSTUM * aspect,
      FRUSTUM * aspect,
      FRUSTUM,
      -FRUSTUM,
      1,
      5000,
    );
    camera.position.copy(HERO_CAMERA);
    camera.lookAt(HERO_TARGET);
    camera.updateProjectionMatrix();

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5) * 0.95);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    // Main neutral/cool light from top-right front to bring out metallic grey body
    const dirLight1 = new THREE.DirectionalLight(0xffffff, 2.5);
    dirLight1.position.set(300, 400, 200);
    scene.add(dirLight1);

    // Secondary warm orange light replaced with subtle white fill light
    const dirLight2 = new THREE.DirectionalLight(0xffffff, 0.8);
    dirLight2.position.set(-200, 150, 150);
    scene.add(dirLight2);

    // Ambient light to fill shadows and make metallic textures visible
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);

    const eyeVideo = document.createElement("video");
    eyeVideo.crossOrigin = "anonymous";
    eyeVideo.muted = true;
    eyeVideo.playsInline = true;
    eyeVideo.loop = true;
    eyeVideo.autoplay = true;
    eyeVideo.src = EYE_VIDEO;
    eyeVideo.play().catch(() => {});

    const eyeTexture = new THREE.VideoTexture(eyeVideo);
    eyeTexture.minFilter = THREE.LinearFilter;
    eyeTexture.magFilter = THREE.LinearFilter;
    const uvsArray = new Float32Array([1, 1, 0, 1, 0, 0, 1, 0]);

    const gltfLoader = new GLTFLoader();
    gltfLoader.setMeshoptDecoder(MeshoptDecoder);

    let mixer: THREE.AnimationMixer | undefined;
    let animationAction: THREE.AnimationAction | undefined;
    let raf = 0;
    const clock = new THREE.Clock();

    new RGBELoader().load(ENV_HDR, (tex) => {
      tex.mapping = THREE.EquirectangularReflectionMapping;
      scene.environment = tex;
    });

    gltfLoader.load(ROBOT_GLB, (gltf) => {
      bakedMesh = gltf.scene;
      bakedMesh.scale.setScalar(1.18);
      bakedMesh.position.y = 20;

      // Traverses meshes to override loaded orange body parts with gunmetal metallic grey
      bakedMesh.traverse((child) => {
        if (child instanceof THREE.Mesh) {
          // Hide the hologram/screen plane/tablet plate mesh in front of the robot
          if (
            /plane|plate|tablet|card|hologram|board|touch|scheme/i.test(
              child.name,
            )
          ) {
            child.visible = false;
            return;
          }
          const mat = child.material;
          if (mat) {
            const materials = Array.isArray(mat) ? mat : [mat];
            materials.forEach((m) => {
              if (m && "color" in m) {
                const c = (m as any).color;
                if (c && c.r > 0.4 && c.b < 0.35) {
                  c.setHex(0x353535); // gunmetal grey
                  if ("metalness" in m) (m as any).metalness = 0.92;
                  if ("roughness" in m) (m as any).roughness = 0.22;
                }
              }
            });
          }
        }
      });

      const face = bakedMesh.getObjectByName("FACE") as THREE.Mesh | undefined;
      if (face?.geometry) {
        face.geometry.setAttribute(
          "uv",
          new THREE.BufferAttribute(uvsArray, 2),
        );
        face.material = new THREE.ShaderMaterial({
          vertexShader,
          fragmentShader,
          transparent: true,
          uniforms: { videoTexture: { value: eyeTexture } },
        });
      }

      if (gltf.animations.length) {
        mixer = new THREE.AnimationMixer(gltf.scene);
        animationAction = mixer.clipAction(gltf.animations[0]);
        animationAction.play();
      }

      scene.add(bakedMesh);
    });

    const tick = () => {
      const delta = clock.getDelta();
      mixer?.update(delta);

      if (eyeVideo.duration && Number.isFinite(eyeVideo.duration)) {
        targetEyeTime = EXPRESSION_TIME[expressionRef.current] ?? 0.05;
        const diff = targetEyeTime * eyeVideo.duration - eyeVideo.currentTime;
        eyeVideo.currentTime += diff * 0.08;
      }

      renderer.render(scene, camera);
      raf = requestAnimationFrame(tick);
    };
    tick();

    const onScroll = () => {
      const hero = document.getElementById("intro");
      if (!hero) return;
      const rect = hero.getBoundingClientRect();
      const progress = Math.min(
        1,
        Math.max(0, -rect.top / (hero.offsetHeight * 0.85)),
      );
      const eased = 1 - Math.pow(1 - progress, 2);

      container.style.opacity = String(Math.max(0, 1 - eased * 1.1));
      container.style.visibility = eased > 0.95 ? "hidden" : "visible";

      if (bakedMesh) {
        bakedMesh.position.y = 20 + eased * -120;
        bakedMesh.rotation.y = eased * 0.2;
      }
      if (animationAction) {
        animationAction.timeScale = 1 - eased * 0.4;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const onResize = () => {
      const a = window.innerWidth / window.innerHeight;
      camera.left = -FRUSTUM * a;
      camera.right = FRUSTUM * a;
      camera.top = FRUSTUM;
      camera.bottom = -FRUSTUM;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      eyeVideo.pause();
      renderer.dispose();
      container.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="cgpt-webgl" aria-hidden />;
}
