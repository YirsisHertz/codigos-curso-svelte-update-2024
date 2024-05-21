import type { CountEntity } from "../domain/entities/CountEntity";
import type { LatestCountsRepository } from "../domain/repositories/LatestCounts.repository";

export class SaveLatestCountsUseCase {
  constructor(
    private readonly latestCountsRepository: LatestCountsRepository
  ) {}

  execute(newCount: CountEntity) {
    return this.latestCountsRepository.saveCounts(newCount);
  }
}
