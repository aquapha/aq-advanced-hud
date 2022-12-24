import aqTheme from '@/utils/theme';

import { Routes } from './routing';
import { EventListener } from '@/config/NUI';
import { ChakraProvider } from '@chakra-ui/react';
import { LoaderBoundary } from '@/atoms/loaderBoundary';
import { SharedDataProvider } from './contexts/sharedDataProvider';

export const App = () => (
  <ChakraProvider resetCSS theme={aqTheme}>
    <SharedDataProvider>
      <LoaderBoundary>
        <Routes isTopLevel />
        <EventListener />
      </LoaderBoundary>
    </SharedDataProvider>
  </ChakraProvider>
);
