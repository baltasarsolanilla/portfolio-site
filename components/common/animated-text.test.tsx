import { render, screen } from '@testing-library/react';
import { AnimatedText } from './animated-text';

describe('AnimatedText', () => {
  it('renders children', () => {
    render(<AnimatedText>Hello</AnimatedText>);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});