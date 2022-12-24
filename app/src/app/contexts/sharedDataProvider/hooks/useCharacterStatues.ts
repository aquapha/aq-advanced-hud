import { useSharedData } from '../sharedDataProvider';

export function useCharacterStatuses() {
  const { characterStatuses } = useSharedData();

  return characterStatuses;
}
