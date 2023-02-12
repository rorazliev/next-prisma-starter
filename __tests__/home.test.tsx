import { render, screen } from '@testing-library/react';
import HomePage from 'views/Home';

describe('Home', () => {
  it('renders a heading', () => {
    render(<HomePage />);

    const heading = screen.getByRole('heading', {
      name: /welcome to Next\.js Prisma Starter!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
