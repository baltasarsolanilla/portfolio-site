import { render, screen, fireEvent } from '@testing-library/react';
import { Input } from './input';

describe('Input', () => {
  it('renders and accepts input', () => {
    render(<Input placeholder="Your name" />);
    const input = screen.getByPlaceholderText('Your name') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Alice' } });
    expect(input.value).toBe('Alice');
  });
});