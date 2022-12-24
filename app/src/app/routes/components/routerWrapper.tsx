import type { PropsWithChildren } from 'react';

import { BrowserRouter, HashRouter } from 'react-router-dom';

export const RouterWrapper = ({
  children,
}: PropsWithChildren) => (
  <>
    {import.meta.env.DEV ? (
      <BrowserRouter>
        {children}
      </BrowserRouter>
    ) : (
      <HashRouter>
        {children}
      </HashRouter>
    )}
  </>
);
