import { render, screen } from '@testing-library/react';
import React from 'react';
import RootLayout from './layout';

it('renders layout with Navbar and Footer and children', () => {
  render(
    <RootLayout>
      <div>child</div>
    </RootLayout>
  );
  expect(screen.getByText('Baltasar Solanilla')).toBeInTheDocument();
  expect(screen.getByText('child')).toBeInTheDocument();
  // Footer has copyright
  expect(screen.getByText(/All rights reserved/i)).toBeInTheDocument();
});