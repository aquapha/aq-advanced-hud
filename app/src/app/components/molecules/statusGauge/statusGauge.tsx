import type { StatusGaugeProps } from './statusGauge.types';

import { GaugeValueToBlinkSpeed } from '@/utils/gaugeValueToBlinkSpeed';
import { CONST_STATUS_DISPLAYMENT_DEFAULT_VALUE } from '@/utils/constants';
import { CalculateGaugeDifference } from '@/utils/calculateGaugeDifference';

import {
  StatusGaugeOutter,
  StatusGaugeInner,
  StatusGaugeIcon,
} from './components';

export const StatusGauge = ({
  statusValue,
  iconIsValue,
  status,
  quota,
  index,
  show,
}: StatusGaugeProps) => {
  const computedStatusValue = (typeof statusValue === 'boolean' || iconIsValue)
    ? CONST_STATUS_DISPLAYMENT_DEFAULT_VALUE
    : statusValue ?? CONST_STATUS_DISPLAYMENT_DEFAULT_VALUE;

  const gaugeBlinkSpeed = GaugeValueToBlinkSpeed(computedStatusValue);
  const waveAlignmentValue = CalculateGaugeDifference(computedStatusValue);

  const useableQuota = parseInt((quota ?? '100'), 10);

  const shouldntShow = !show
    || (typeof statusValue !== 'boolean' && (computedStatusValue < useableQuota));

  if (shouldntShow) return null;

  return (
    <StatusGaugeOutter gaugeBlinkSpeed={gaugeBlinkSpeed}>
      <StatusGaugeInner
        waveAlignmentValue={waveAlignmentValue}
        index={index}
      />
      <StatusGaugeIcon
        statusValue={statusValue}
        iconIsValue={iconIsValue}
        statusName={status}
      />
    </StatusGaugeOutter>
  );
};
