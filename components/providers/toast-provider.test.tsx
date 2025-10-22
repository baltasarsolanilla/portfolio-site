import { render } from '@testing-library/react';
import { ToastProvider, successToast, errorToast } from './toast-provider';

jest.mock('sonner', () => ({
  toast: {
    success: jest.fn(),
    error: jest.fn(),
  },
  Toaster: () => null,
}));

describe('ToastProvider', () => {
  it('renders without crashing', () => {
    render(<ToastProvider />);
  });

  it('successToast calls toast.success', () => {
    const { toast } = require('sonner');
    successToast('ok');
    expect(toast.success).toHaveBeenCalledWith('ok');
  });

  it('errorToast calls toast.error', () => {
    const { toast } = require('sonner');
    errorToast('bad');
    expect(toast.error).toHaveBeenCalledWith('bad');
  });
});