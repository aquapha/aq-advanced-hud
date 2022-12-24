import type { SharedDataState } from '@/contexts/sharedDataProvider/sharedDataProvider.types';

import { useCallback } from 'react';
import { CloseHUDEditor, UpdateHUDStatuses } from '@/utils/API';
import { ActionMutateStatus } from '@/contexts/sharedDataProvider/actions';
import { useAppStatus } from '@/contexts/sharedDataProvider/hooks/useAppStatus';
import { useSharedDataDispatch } from '@/contexts/sharedDataProvider/sharedDataProvider';

export function useHandleUpdateHUDStatuses() {
  const { showHUDModal } = useAppStatus();
  const dispatch = useSharedDataDispatch();

  return useCallback(async (statuses: SharedDataState['characterStatuses']) => {
    dispatch(ActionMutateStatus({
      loading: true,
    }));

    try {
      await UpdateHUDStatuses(statuses);

      CloseHUDEditor();
    } catch (e) {
      console.error('[AQ-HUD]: Encountered error on `useHandleUpdateHUDStatuses`, notify developers \n', JSON.stringify(e));
    } finally {
      dispatch(ActionMutateStatus({
        showHUDModal: false,
      }));

      dispatch(ActionMutateStatus({
        loading: false,
      }));
    }
  }, [showHUDModal, dispatch]);
}
