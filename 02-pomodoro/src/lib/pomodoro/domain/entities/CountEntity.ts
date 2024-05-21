import type { TabTypeEntity } from "./TabType.entity";

export interface CountEntity {
  mode: TabTypeEntity;
  time: number;
  createdAt: Date;
}
