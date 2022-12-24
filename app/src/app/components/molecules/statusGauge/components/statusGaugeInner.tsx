import type { StatusGaugeInnerProps, WaveAnimationDuration } from '../statusGauge.types';

import { keyframes } from '@emotion/react';
import { WaveBackground } from '@/atoms/waveBackground';
import { useSharedData } from '@/contexts/sharedDataProvider/sharedDataProvider';

const waveAnimation = keyframes`
  from {transform: scaleX(1);}
  to {transform: scaleX(1.8)}
`;

export const StatusGaugeInner = ({
  waveAlignmentValue,
  index,
}: StatusGaugeInnerProps & WaveAnimationDuration) => {
  const { config } = useSharedData();

  return (
    <WaveBackground
      transition={`all ${parseInt(config.MULTIPLIERS.WAVE_SPEED) ?? 0.6}s ease-in-out`}
      animation={`${waveAnimation} 4s ease-in-out ${-index}s infinite alternate`}
      top={`${waveAlignmentValue}px`}
      color="purple.300"
      pos="relative"
      left="125px"
      w="960px"
      h="540px"
    />
  );
};
