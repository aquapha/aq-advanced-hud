import type { SharedDataState } from '@/contexts/sharedDataProvider/sharedDataProvider.types';
import { useMemo } from 'react';

export type InitialValuesTemplate = {
  [key: string]: SharedDataState['characterStatuses'][number];
};

export function useGenerateInitialValues(
  statuses: SharedDataState['characterStatuses'],
) {
  return useMemo(() => {
    const initialValues: InitialValuesTemplate = {};

    statuses.forEach((status) => {
      initialValues[status.status] = {
        ...status,
      };
    });

    return initialValues;
  }, [statuses]);
}
