export abstract class CounterRepository {
  abstract initCount(currentValue: number): number;
  abstract stopCount(intervalId: number): boolean;
}
