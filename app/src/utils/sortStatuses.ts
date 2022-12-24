import type { SharedDataState } from '@/contexts/sharedDataProvider/sharedDataProvider.types';

import { CONST_STATUSES_ORDER } from './constants';

export function SortStatuses(
  statuses: SharedDataState['characterStatuses'] = [],
) {
  const order = CONST_STATUSES_ORDER;

  return statuses.sort((a, b) => order.indexOf(a.status) - order.indexOf(b.status));
}
