import React, { FunctionComponent } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

type PropTypes = {
  order?: number;
  title: string;
  description: string;
  href: string;
};

const Card: FunctionComponent<PropTypes> = ({
  order = 0,
  title,
  description,
  href,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: order * 0.25 }}
    >
      <Link href={href} legacyBehavior>
        <a className="block bg-white w-full p-8 border rounded-xl transition-all duration-150 ease-linear hover:shadow-md hover:text-blue-600">
          <h2 className="text-2xl mb-5 leading-none">{title} &rarr;</h2>
          <p className="text-lg leading-normal">{description}</p>
        </a>
      </Link>
    </motion.div>
  );
};

export default Card;
