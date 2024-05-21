import type { CountEntity } from "../../domain/entities/CountEntity";
import { LatestCountsRepository } from "../../domain/repositories/LatestCounts.repository";

export class LatestCountsModel extends LatestCountsRepository {
  private key = "latest_counts";

  getCounts(): CountEntity[] {
    return JSON.parse(localStorage.getItem(this.key) || "[]");
  }

  saveCounts(newCount: CountEntity): void {
    const counts = this.getCounts();

    counts.push(newCount);

    localStorage.setItem(this.key, JSON.stringify(counts));
  }

  clear(): void {
    localStorage.removeItem(this.key);
  }
}
