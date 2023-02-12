import React, { FunctionComponent } from 'react';
import Link from 'next/link';

const Footer: FunctionComponent = () => {
  return (
    <footer
      role="contentinfo"
      className="w-full px-5 flex items-center justify-center select-none"
    >
      <div className="w-full max-w-5xl py-8 flex items-center justify-center border-t border-slate-300">
        <span className="text-sm leading-none">
          Made with ❤️ by{' '}
          <Link
            href="https://github.com/rorazliev"
            className="font-medium text-blue-600 hover:underline"
          >
            Ruslan Orazliev
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
