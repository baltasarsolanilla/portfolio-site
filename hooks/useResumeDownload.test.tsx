import { render, screen, act } from '@testing-library/react';
import React from 'react';
import { useResumeDownload } from './useResumeDownload';

jest.mock('@/lib/api/resume', () => ({
  getResumeDownloadUrl: jest.fn(),
}));
import { getResumeDownloadUrl } from '@/lib/api/resume';

function TestComponent() {
  const { downloadResume, loading, error } = useResumeDownload();
  return (
    <div>
      <button onClick={downloadResume}>download</button>
      <div data-testid="loading">{loading ? 'loading' : 'idle'}</div>
      <div data-testid="error">{error ?? ''}</div>
    </div>
  );
}

describe('useResumeDownload', () => {
  beforeEach(() => {
    (window.open as jest.Mock).mockClear();
  });

  it('opens a new tab with the resume URL on success', async () => {
    (getResumeDownloadUrl as jest.Mock).mockResolvedValue('https://example.com/resume.pdf');

    render(<TestComponent />);

    await act(async () => {
      screen.getByText('download').click();
    });

    expect(screen.getByTestId('loading').textContent).toBe('idle');
    expect(window.open).toHaveBeenCalledWith('https://example.com/resume.pdf', '_blank');
    expect(screen.getByTestId('error').textContent).toBe('');
  });

  it('sets error when API fails', async () => {
    (getResumeDownloadUrl as jest.Mock).mockRejectedValue(new Error('boom'));

    render(<TestComponent />);

    await act(async () => {
      screen.getByText('download').click();
    });

    expect(screen.getByTestId('loading').textContent).toBe('idle');
    expect(window.open).not.toHaveBeenCalled();
    expect(screen.getByTestId('error').textContent).toBe('boom');
  });
});