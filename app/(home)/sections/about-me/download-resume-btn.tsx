'use client';
import { Button } from '@/components/ui/button';
import { useResumeDownload } from '@/hooks/useResumeDownload';
import { Download } from 'lucide-react';

export default function DownloadResumeBtn() {
  const { downloadResume, loading, error } = useResumeDownload();

  return (
    <>
      <Button
        variant="outline"
        className="border-border hover:border-primary/50 hover:bg-surface group"
        onClick={downloadResume}
      >
        <Download className="mr-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
        {loading ? 'Preparing...' : 'Download CV'}
      </Button>
      {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
    </>
  );
}
