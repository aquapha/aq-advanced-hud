import { CONST_WAVE_DEFAULT_TOP, CONST_WAVE_EFFECT_DIVIDER } from './constants';

export function CalculateGaugeDifference(value?: number | null) {
  if (!value) return CONST_WAVE_DEFAULT_TOP;

  const gaugeData = Math.floor(value / CONST_WAVE_EFFECT_DIVIDER);
  const gaugeDifference = CONST_WAVE_DEFAULT_TOP - gaugeData;

  return gaugeDifference;
}
