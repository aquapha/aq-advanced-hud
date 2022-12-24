import type { StatusIconProps } from '../statusGauge.types';

import {
  AddictionStatusIcon,
  HealthStatusIcon,
  HungerStatusIcon,
  ThirstStatusIcon,
  ArmorStatusIcon,
  StaffStatusIcon,
} from '@/atoms/icons';

export const StatusNameToIcon = ({
  iconIsValue,
  statusName,
}: Pick<StatusIconProps, 'statusName' | 'iconIsValue'>) => {
  if (iconIsValue) return null;

  switch (statusName) {
    case 'health':
      return <HealthStatusIcon w="28px" h="28px" />;
    case 'armor':
      return <ArmorStatusIcon w="28px" h="28px" />;
    case 'hunger':
      return <HungerStatusIcon w="28px" h="28px" />;
    case 'thirst':
      return <ThirstStatusIcon w="28px" h="28px" />;
    case 'staff':
      return <StaffStatusIcon w="28px" h="28px" />;
    case 'addiction':
      return <AddictionStatusIcon w="28px" h="28px" />;
    default:
      return null;
  }
};
