import { GetStaticProps } from 'next';

export const getStaticProps: GetStaticProps = async () => {
  return {
    props: {
      metadata: {
        title: 'Next.js Prisma Starter',
        description: 'A starting point for Next.js apps with Prisma',
      },
    },
  };
};

export { default } from 'views/Home';
