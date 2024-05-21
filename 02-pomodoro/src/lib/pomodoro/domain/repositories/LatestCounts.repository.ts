import type { CountEntity } from "../entities/CountEntity";

export abstract class LatestCountsRepository {
  abstract getCounts(): CountEntity[];
  abstract saveCounts(newCount: CountEntity): void;
  abstract clear(): void;
}
