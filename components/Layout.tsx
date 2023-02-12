import React, { FunctionComponent, ReactNode } from 'react';
import Footer from 'components/Footer';

type PropTypes = {
  children?: ReactNode;
};

const Layout: FunctionComponent<PropTypes> = ({ children }) => {
  return (
    <>
      <main role="main" className="flex-1 px-5 py-10">
        {children}
      </main>
      <Footer />
    </>
  );
};

export default Layout;
