import type { SharedDataState } from '@/contexts/sharedDataProvider/sharedDataProvider.types';

import { API } from '@/config/API';
import { CONST_UPDATE_HUD_STATUSES } from '../constants';

export const UpdateHUDStatuses = async (
  statuses: SharedDataState['characterStatuses'],
) => {
  const response = await API.post<APIResponse>(CONST_UPDATE_HUD_STATUSES, statuses);

  return response;
};
