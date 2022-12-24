import type { StatusRowInputProps } from '../statusRow.types';

import {
  NumberInputField,
  NumberInput,
  FormControl,
} from '@chakra-ui/react';

export const StatusRowInput = ({
  isInvalid,
  ...props
}: StatusRowInputProps) => (
  <FormControl
    isInvalid={isInvalid}
    isRequired
    w="200px"
  >
    <NumberInput
      value={props.value?.toString()}
    >
      <NumberInputField
        placeholder={`${Math.floor(Math.random() * 100)}`}
        _placeholder={{
          color: 'gray.200',
        }}
        {...props}
      />
    </NumberInput>
  </FormControl>
);
