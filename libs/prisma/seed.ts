import prisma from './prisma';
// import faker from '@faker-js/faker';

const main = async () => {
  // Seed script goes here
};

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
