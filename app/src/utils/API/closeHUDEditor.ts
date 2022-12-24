import { API } from '@/config/API';
import { CONST_CLOSE_HUD_EDITOR } from '../constants';

export const CloseHUDEditor = async () => {
  const response = await API.post<APIResponse>(CONST_CLOSE_HUD_EDITOR);

  return response;
};
