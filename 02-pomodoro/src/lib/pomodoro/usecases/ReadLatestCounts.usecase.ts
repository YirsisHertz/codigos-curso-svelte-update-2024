import type { LatestCountsRepository } from "../domain/repositories/LatestCounts.repository";

export class ReadLatestCountsUseCase {
  constructor(
    private readonly latestCountsRepository: LatestCountsRepository
  ) {}

  execute() {
    return this.latestCountsRepository
      .getCounts()
      .sort((value) => value.time)
      .reverse()
      .slice(0, 5);
  }
}
