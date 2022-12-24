import type { SharedDataState } from '@/contexts/sharedDataProvider/sharedDataProvider.types';

import { NUI } from './NUIHandler';
import { SortStatuses } from '@/utils/sortStatuses';
import { ActionMutateStatus } from '@/contexts/sharedDataProvider/actions';
import { useAppStatus } from '@/contexts/sharedDataProvider/hooks/useAppStatus';
import { useSharedDataDispatch } from '@/contexts/sharedDataProvider/sharedDataProvider';

export const RegisterNUICalls = () => {
  const { showHUDModal } = useAppStatus();
  const dispatch = useSharedDataDispatch();

  NUI.registerEmit('init', ({ data }: NUIResponse<SharedDataState['config']>) => {
    dispatch(ActionMutateStatus({
      showHUD: true,
    }));

    dispatch({
      type: 'MUTATE',
      payload: {
        id: 'config',
        data,
      },
    });
  });

  NUI.registerEmit('open-hud-editor', () => {
    dispatch(ActionMutateStatus({
      showHUDModal: true,
    }));
  });

  NUI.registerEmit('update-statuses', (
    data: NUIResponse<SharedDataState['characterStatuses']>,
  ) => {
    if (showHUDModal) return;

    const sortedStatuses = SortStatuses(data.data);

    dispatch({
      type: 'OVERWRITE',
      payload: {
        id: 'characterStatuses',
        data: sortedStatuses,
      },
    });
  });
};
