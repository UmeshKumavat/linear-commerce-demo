import type { LinxoExpression, LinxoPose } from "@/components/mascot/LinxoMascot";

export type LinxoActionId =
  | "builds"
  | "integrates"
  | "optimises"
  | "streamlines"
  | "supports"
  | "partners";

export interface LinxoAction {
  id: LinxoActionId;
  title: string;
  expression: LinxoExpression;
  pose: LinxoPose;
}

export const LINXO_ACTIONS: LinxoAction[] = [
  {
    id: "builds",
    title: "Builds Commerce",
    expression: "focused",
    pose: "point",
  },
  {
    id: "integrates",
    title: "Integrates Systems",
    expression: "happy",
    pose: "open",
  },
  {
    id: "optimises",
    title: "Optimises Performance",
    expression: "focused",
    pose: "inspect",
  },
  {
    id: "streamlines",
    title: "Streamlines Operations",
    expression: "thinking",
    pose: "tablet",
  },
  {
    id: "supports",
    title: "Supports Growth",
    expression: "neutral",
    pose: "default",
  },
  {
    id: "partners",
    title: "Your Long-Term Partner",
    expression: "excited",
    pose: "wave",
  },
];

export function getLinxoAction(id: LinxoActionId): LinxoAction {
  return LINXO_ACTIONS.find((a) => a.id === id) ?? LINXO_ACTIONS[0];
}
