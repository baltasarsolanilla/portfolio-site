'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useResumeDownload } from '@/hooks/useResumeDownload';

export default function DownloadResumeBtn() {
  const { downloadResume, loading, error } = useResumeDownload();

  return (
    <>
      <Button
        size="lg"
        variant="outline"
        className="border-white/30 text-white hover:bg-white/10 bg-purple-900"
        onClick={downloadResume}
      >
        {loading ? 'Preparing...' : 'Download Resume'}
      </Button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </>
  );
}
