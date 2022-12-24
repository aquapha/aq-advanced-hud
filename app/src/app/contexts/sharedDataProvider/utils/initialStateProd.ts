import type { SharedDataState } from '../sharedDataProvider.types';

export const initialStateProd: SharedDataState = {
  characterStatuses: [],
  config: {
    LANGUAGE: {},
    MULTIPLIERS: {},
  },
  status: {
    showHUDModal: false,
    loading: false,
    showHUD: true,
  },
};
