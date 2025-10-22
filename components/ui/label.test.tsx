import { render, screen } from '@testing-library/react';
import { Label } from './label';

describe('Label', () => {
  it('renders with text', () => {
    render(<Label htmlFor="x">Email</Label>);
    expect(screen.getByText('Email')).toBeInTheDocument();
  });
});