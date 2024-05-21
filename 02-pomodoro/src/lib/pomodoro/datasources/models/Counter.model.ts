import { CounterRepository } from "../../domain/repositories/Counter.repository";

export class CounterModel extends CounterRepository {
  constructor() {
    super();
  }

  initCount(currentValue: number): number {
    return currentValue - 1;
  }

  stopCount(intervalId: number): boolean {
    clearInterval(intervalId);
    return true;
  }
}
