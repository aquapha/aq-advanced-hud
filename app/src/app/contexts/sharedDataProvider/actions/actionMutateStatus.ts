import type { SharedDataActions, SharedDataState } from '../sharedDataProvider.types';

export const ActionMutateStatus = (
  values: Partial<SharedDataState['status']>,
) => ({
  type: 'MUTATE',
  payload: {
    id: 'status',
    data: {
      ...values,
    },
  },
} as SharedDataActions<'status'>);
