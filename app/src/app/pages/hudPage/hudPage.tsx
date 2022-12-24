import { HudStatusesWrapper } from './components';
import { HUDEditer } from '@/organisms/hudEditer';
import { StatusGauge } from '@/molecules/statusGauge/statusGauge';
import { useAppStatus } from '@/contexts/sharedDataProvider/hooks/useAppStatus';
import { useCharacterStatuses } from '@/contexts/sharedDataProvider/hooks/useCharacterStatues';

export const HudPage = () => {
  const { showHUD } = useAppStatus();
  const characterStatuses = useCharacterStatuses();

  return (
    <>
      {showHUD && (
        <HudStatusesWrapper>
          {characterStatuses.map((status, idx) => (
            <StatusGauge
              {...status}
              index={idx}
              key={idx}
            />
          ))}
        </HudStatusesWrapper>
      )}
      <HUDEditer />
    </>
  );
};
