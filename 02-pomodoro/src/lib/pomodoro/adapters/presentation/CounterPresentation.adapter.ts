export class CounterPresentationAdapter {
  static minutesToSeconds(minutes: number) {
    return minutes * 60;
  }

  static millisToMinutes(millis: number) {
    return Math.floor(millis / 60)
      .toString()
      .padStart(2, "0");
  }

  static millisToSeconds(millis: number) {
    return Math.floor(millis % 60)
      .toString()
      .padStart(2, "0");
  }
}
