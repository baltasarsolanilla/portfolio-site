'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function DownloadResumeBtn() {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/getResume');
      const data: { url: string } = await res.json();
      window.open(data.url, '_blank');
    } catch (err) {
      console.error(err);
      alert('Failed to get resume.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      size="lg"
      variant="outline"
      className="border-white/30 text-white hover:bg-white/10 bg-purple-900"
      onClick={handleDownload}
    >
      {loading ? 'Preparing...' : 'Download Resume'}
    </Button>
  );
}
