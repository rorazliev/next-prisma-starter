import React, { FunctionComponent } from 'react';
import { CookiesProvider } from 'react-cookie';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import 'styles/globals.css';

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps: { session, ...props },
}) => {
  return (
    <SessionProvider session={session}>
      <CookiesProvider>
        <Component {...props} />
      </CookiesProvider>
    </SessionProvider>
  );
};

export default App;
