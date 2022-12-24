import type {
  SharedDataActions,
  SharedDataState,
} from './sharedDataProvider.types';

import { initialStateDev, initialStateProd } from './utils';

import {
  PropsWithChildren,
  createContext,
  useReducer,
  useContext,
  Dispatch,
  FC,
} from 'react';

const SharedDataContext = createContext<SharedDataState>(null!);

const SharedDataDispatch = createContext<Dispatch<SharedDataActions<keyof SharedDataState>>>(null!);

function AppDataReducer(
  state: SharedDataState,
  action: SharedDataActions,
): SharedDataState {
  switch (action.type) {
    case 'MUTATE':
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id] ?? {},
          ...action.payload.data,
        },
      };
    case 'OVERWRITE':
      return {
        ...state,
        [action.payload.id]: action.payload.data,
      };
    case 'RESET':
      return {
        ...state,
        [action.payload.id]: import.meta.env.DEV
          ? initialStateDev[action.payload.id]
          : initialStateProd[action.payload.id],
      };
    default:
      return state;
  }
}

export function useSharedData() {
  const ctx = useContext(SharedDataContext);

  if (!ctx) {
    throw new Error('Using context outside provider.');
  }

  return ctx;
}

export function useSharedDataDispatch() {
  const ctx = useContext(SharedDataDispatch);

  if (!ctx) {
    throw new Error('Using dispatch context outside provider');
  }

  return ctx;
}

export const SharedDataProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(
    AppDataReducer,
    import.meta.env.DEV
      ? initialStateDev
      : initialStateProd,
  );

  return (
    <SharedDataDispatch.Provider value={dispatch}>
      <SharedDataContext.Provider value={state}>
        {children}
      </SharedDataContext.Provider>
    </SharedDataDispatch.Provider>
  );
};
