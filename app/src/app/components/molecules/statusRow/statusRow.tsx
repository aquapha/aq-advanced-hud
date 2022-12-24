import type { StatusRowProps } from './statusRow.types';

import { Field } from 'formik';
import { Switch } from '@chakra-ui/react';
import { ValidateStatusInput } from '@/utils/validators';

import {
  StatusRowStatusHeading,
  StatusRowWrapper,
  StatusRowInput,
} from './components';

export const StatusRow = ({
  statusLabel,
  switchProps,
  ...props
}: StatusRowProps) => (
  <StatusRowWrapper>
    <Field
      as={Switch}
      {...switchProps}
    />
    <StatusRowStatusHeading>
      {statusLabel}
    </StatusRowStatusHeading>
    <Field
      validate={ValidateStatusInput}
      as={StatusRowInput}
      {...props}
    />
  </StatusRowWrapper>
);
