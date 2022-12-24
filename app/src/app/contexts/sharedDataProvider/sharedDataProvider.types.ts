import type { StatusGaugeProps } from '@/molecules/statusGauge/statusGauge.types';

type StatusProps = {
  showHUDModal: boolean;
  loading: boolean;
  showHUD: boolean;
};

export interface SharedDataState {
  status: StatusProps;
  characterStatuses: Omit<
  StatusGaugeProps, 'index'
  >[];
  config: {
    LANGUAGE: {
      HUD_EDITOR_DISCLAIMER?: string;
      NUMBER_IN_PERCENTAGES?: string;
      HUD_CONTROL?: string;
      CLOSE?: string;
      SAVE?: string;
    }

    MULTIPLIERS: {
      WAVE_SPEED?: any;
    }
  },
}

export type SharedDataActions<T extends keyof SharedDataState = keyof SharedDataState> = {
  type: 'MUTATE';
  payload: {
    data: Partial<SharedDataState[T]>;
    id: T;
  };
} | {
  type: 'OVERWRITE';
  payload: {
    data: SharedDataState[T];
    id: T;
  };
} | {
  type: 'RESET';
  payload: {
    id: T;
  }
};
