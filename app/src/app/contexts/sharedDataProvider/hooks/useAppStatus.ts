import { useSharedData } from '../sharedDataProvider';

export function useAppStatus() {
  const { status } = useSharedData();

  return status;
}
