import { useHandleUpdateHUDStatuses } from '@/hooks/useHandleUpdateHUDStatuses';
import { useAppStatus } from '@/contexts/sharedDataProvider/hooks/useAppStatus';
import { useCharacterStatuses } from '@/contexts/sharedDataProvider/hooks/useCharacterStatues';

export function useControlModal() {
  const { showHUDModal } = useAppStatus();
  const characterStatuses = useCharacterStatuses();

  const handleUpdateHUDStatuses = useHandleUpdateHUDStatuses();

  const handleDisable = () => {
    handleUpdateHUDStatuses(characterStatuses);
  };

  return {
    handleDisable,
    showHUDModal,
  };
}
