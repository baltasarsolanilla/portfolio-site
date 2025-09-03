import { Button } from '@/components/ui/button';
import DownloadResumeBtn from './download-resume-btn';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto text-center">
      <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
        Baltasar Solanilla
      </h1>
      <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
        Front-end Engineer - Known for improving technical efficiencies
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
          TODO: Ver mi trabajo
        </Button>
        <DownloadResumeBtn />
      </div>
    </div>
  );
}
