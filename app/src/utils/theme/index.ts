import { fonts } from './fonts';
import { colors } from './colors';
import { config } from './config';
import { components } from './components';
import { globalStyles } from './globalStyles';

import { extendTheme } from '@chakra-ui/react';

const aqTheme = extendTheme({
  ...globalStyles,
  components,
  colors,
  config,
  fonts,
});

export default aqTheme;
