import type { PropsWithChildren } from 'react';
import type { AnimatedRouteProps } from './animatedRoute.types';

import { AnimatePresence, motion } from 'framer-motion';
import { ChakraProps, chakra } from '@chakra-ui/react';

const ChakraMotionDiv = chakra(motion.div);

export const AnimatedRoute = ({
  children,
  routeKey,
  ...props
}: PropsWithChildren<ChakraProps & AnimatedRouteProps>) => (
  <AnimatePresence exitBeforeEnter>
    <ChakraMotionDiv
      initial={{ scale: 0.6, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.6, opacity: 0 }}
      key={routeKey}
      {...props}
    >
      {children}
    </ChakraMotionDiv>
  </AnimatePresence>
);
