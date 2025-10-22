import { render, screen, fireEvent } from '@testing-library/react';
import { Textarea } from './textarea';

describe('Textarea', () => {
  it('renders and accepts text', () => {
    render(<Textarea placeholder="Message" />);
    const ta = screen.getByPlaceholderText('Message') as HTMLTextAreaElement;
    fireEvent.change(ta, { target: { value: 'Hello' } });
    expect(ta.value).toBe('Hello');
  });
});