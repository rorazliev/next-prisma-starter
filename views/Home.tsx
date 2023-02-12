import React from 'react';
import type { NextPage } from 'next';
import CardsSection from 'components/CardsSection';
import HeroSection from 'components/HeroSection';
import Layout from 'components/Layout';

const HomePage: NextPage = () => {
  return (
    <Layout>
      <HeroSection />
      <CardsSection />
    </Layout>
  );
};

export default HomePage;
