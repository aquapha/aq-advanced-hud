export function GaugeValueToBlinkSpeed(value?: number | null) {
  if (!value) return 0.3;

  switch (true) {
    case value <= 10:
      return 1;
    case value <= 30:
      return 2;
    default:
      return 0;
  }
}
