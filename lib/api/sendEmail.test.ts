import { sendEmail } from './sendEmail';

describe('sendEmail', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch as any;
    jest.restoreAllMocks();
  });

  it('returns response when request succeeds', async () => {
    global.fetch = jest.fn().mockResolvedValue({
      ok: true,
      json: async () => 'ok',
    } as any);

    const res = await sendEmail();
    expect(res).toBe('ok');
    expect(global.fetch).toHaveBeenCalled();
  });

  it('throws when request fails', async () => {
    global.fetch = jest.fn().mockResolvedValue({ ok: false, status: 400 } as any);

    await expect(sendEmail()).rejects.toThrow('Failed to send email: 400');
  });
});