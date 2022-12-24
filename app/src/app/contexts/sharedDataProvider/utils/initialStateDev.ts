import type { SharedDataState } from '../sharedDataProvider.types';

export const initialStateDev: SharedDataState = {
  config: {
    MULTIPLIERS: {},
    LANGUAGE: {},
  },
  characterStatuses: [
    {
      statusLabel: 'ID',
      iconIsValue: true,
      statusValue: 50,
      status: 'id',
      quota: '0',
      show: true,
    },
    {
      statusLabel: 'Health',
      status: 'health',
      statusValue: 50,
      quota: '0',
      show: true,
    },
    {
      statusLabel: 'Armor',
      status: 'armor',
      statusValue: 50,
      quota: '0',
      show: true,
    },
    {
      statusLabel: 'Hunger',
      status: 'hunger',
      statusValue: 50,
      quota: '0',
      show: true,
    },
    {
      statusLabel: 'Thirst',
      status: 'addiction',
      statusValue: 50,
      quota: '0',
      show: true,
    },
    {
      statusLabel: 'Admin',
      statusValue: true,
      status: 'staff',
      quota: '100',
      show: true,
    },
  ],
  status: {
    showHUDModal: true,
    loading: false,
    showHUD: true,
  },
};
