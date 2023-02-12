import React, { FunctionComponent } from 'react';
import { motion } from 'framer-motion';

const HeroSection: FunctionComponent = () => {
  return (
    <motion.section
      className="w-full flex flex-col items-center justify-center py-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <h1 className="font-semibold text-4xl pb-10 md:text-center leading-normal md:leading-none text-blue-600">
        Welcome to Next.js Prisma Starter!
      </h1>
      <p className="text-2xl leading-normal md:leading-none md:text-center">
        Get started by editing{' '}
        <code className="text-[1.35rem]">views/Home.tsx</code>
      </p>
    </motion.section>
  );
};

export default HeroSection;
