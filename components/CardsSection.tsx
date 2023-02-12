import React, { FunctionComponent } from 'react';
import Card from 'components/Card';

const cards = [
  {
    title: 'Documentation',
    description: 'Find in-depth information about Next.js features and API.',
    href: 'https://nextjs.org/docs',
  },
  {
    title: 'Learn',
    description: 'Learn about Next.js in an interactive course with quizzes!',
    href: 'https://nextjs.org/learn',
  },
  {
    title: 'Examples',
    description: 'Discover and deploy boilerplate example Next.js projects.',
    href: 'https://github.com/vercel/next.js/tree/canary/examples',
  },
  {
    title: 'Deploy',
    description:
      'Instantly deploy your Next.js site to a public URL with Vercel.',
    href: 'https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app',
  },
];

const CardsSection: FunctionComponent = () => {
  return (
    <section className="max-w-2xl mx-auto py-10">
      <div className="grid md:grid-cols-2 gap-5">
        {cards.map((card, id) => (
          <Card
            key={`card-${id}`}
            order={id}
            title={card.title}
            description={card.description}
            href={card.href}
          />
        ))}
      </div>
    </section>
  );
};

export default CardsSection;
