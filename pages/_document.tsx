import { Head, Html, Main, NextScript } from 'next/document';
import React, { FunctionComponent } from 'react';

const Document: FunctionComponent = () => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
