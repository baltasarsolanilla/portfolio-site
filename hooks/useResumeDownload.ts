import { useState } from 'react';
import { getResumeDownloadUrl } from '@/lib/api/resume';

export function useResumeDownload() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const downloadResume = async () => {
    setLoading(true);
    setError(null);

    try {
      const url = await getResumeDownloadUrl();
      window.open(url, '_blank');
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to get resume';
      setError(errorMessage);
      console.error('Resume download error:', err);
    } finally {
      setLoading(false);
    }
  };

  return { downloadResume, loading, error };
}
