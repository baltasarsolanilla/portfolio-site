import { getResumeDownloadUrl } from './resume';

describe('getResumeDownloadUrl', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch as any;
    jest.restoreAllMocks();
  });

  it('returns the URL when the request succeeds', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => ({ url: 'https://example.com/resume.pdf' }),
    } as any);

    const url = await getResumeDownloadUrl();
    expect(url).toBe('https://example.com/resume.pdf');
    expect(global.fetch).toHaveBeenCalled();
  });

  it('throws when the request fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 500 } as any);

    await expect(getResumeDownloadUrl()).rejects.toThrow('Failed to get resume: 500');
  });
});