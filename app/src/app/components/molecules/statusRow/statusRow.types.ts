import type { NumberInputFieldProps, SwitchProps } from '@chakra-ui/react';

export type StatusRowInputProps = {
  isInvalid: boolean;
} & NumberInputFieldProps;

export type StatusRowProps = {
  statusLabel?: string | null;
  switchProps?: SwitchProps;
} & StatusRowInputProps;
