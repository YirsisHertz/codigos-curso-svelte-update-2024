import { CounterRepository } from "../domain/repositories/Counter.repository";

export class StopCountUseCase {
  constructor(private readonly counterRepository: CounterRepository) {}

  execute(intervalId: number) {
    return this.counterRepository.stopCount(intervalId);
  }
}
