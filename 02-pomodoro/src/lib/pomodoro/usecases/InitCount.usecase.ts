import { CounterRepository } from "../domain/repositories/Counter.repository";

export class InitCountUseCase {
  constructor(private readonly counterRepository: CounterRepository) {}

  execute(currentValue: number) {
    return this.counterRepository.initCount(currentValue);
  }
}
