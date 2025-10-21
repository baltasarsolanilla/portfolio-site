import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { Contact } from './contact';

jest.mock('@/lib/api/sendEmail', () => ({
  sendEmail: jest.fn(),
}));
jest.mock('@/components/providers/toast-provider', () => ({
  successToast: jest.fn(),
  errorToast: jest.fn(),
}));

import { sendEmail } from '@/lib/api/sendEmail';
import { successToast, errorToast } from '@/components/providers/toast-provider';

describe('Contact', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('submits form successfully and shows success toast', async () => {
    (sendEmail as jest.Mock).mockResolvedValue('ok');

    render(<Contact />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hi' } });

    fireEvent.submit(screen.getByRole('button', { name: /Send Message|Sending.../i }).closest('form')!);

    await waitFor(() => expect(successToast).toHaveBeenCalled());
  });

  it('handles API error and shows error toast', async () => {
    (sendEmail as jest.Mock).mockRejectedValue(new Error('bad'));

    render(<Contact />);

    fireEvent.change(screen.getByLabelText('Name'), { target: { value: 'John' } });
    fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'john@example.com' } });
    fireEvent.change(screen.getByLabelText('Message'), { target: { value: 'Hi' } });

    fireEvent.submit(screen.getByRole('button', { name: /Send Message|Sending.../i }).closest('form')!);

    await waitFor(() => expect(errorToast).toHaveBeenCalled());
  });
});