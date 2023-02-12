import React, { FunctionComponent } from 'react';
import Head from 'next/head';

type PropTypes = {
  data?: {
    title?: string;
    description?: string;
  };
};

const Metadata: FunctionComponent<PropTypes> = ({ data }) => {
  return (
    <Head>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=2, viewport-fit=cover"
      />

      <title>
        {data && data.title ? data.title : 'Next.js Prisma Starter'}
      </title>
      {data && data.description && (
        <meta name="description" content={data.description} />
      )}
    </Head>
  );
};

export default Metadata;
