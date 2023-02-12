import React, { FunctionComponent } from 'react';
import { CookiesProvider } from 'react-cookie';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import Metadata from 'components/Metadata';
import 'styles/globals.css';

const App: FunctionComponent<AppProps> = ({
  Component,
  pageProps: { session, metadata, ...props },
}) => {
  return (
    <SessionProvider session={session}>
      <CookiesProvider>
        <Metadata data={metadata} />
        <Component {...props} />
      </CookiesProvider>
    </SessionProvider>
  );
};

export default App;
