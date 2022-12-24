import { useSharedDataDispatch } from '@/contexts/sharedDataProvider/sharedDataProvider';
import { useCharacterStatuses } from '@/contexts/sharedDataProvider/hooks/useCharacterStatues';
import { useGenerateInitialValues, InitialValuesTemplate } from '../utils/generateInitialValues';

export function useHUDEditerForm() {
  const dispatch = useSharedDataDispatch();
  const characterStatuses = useCharacterStatuses();
  const initialValues = useGenerateInitialValues(characterStatuses);

  const initalsLoadedIn = !!Object.keys(initialValues).length;

  const handleUpdateStatuses = (
    values: InitialValuesTemplate,
  ) => {
    const saveableStatuses = Object.values(values);

    dispatch({
      type: 'OVERWRITE',
      payload: {
        id: 'characterStatuses',
        data: saveableStatuses,
      },
    });
  };

  return {
    handleUpdateStatuses,
    characterStatuses,
    initalsLoadedIn,
    initialValues,
  };
}
