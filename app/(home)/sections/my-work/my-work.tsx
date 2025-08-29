import { Badge } from '@/components/ui/badge';
import WorkCard from '@/app/(home)/sections/my-work/work-card';
import eyeonitImg from '@/app/assets/jobs/eyeonit.png';
import telstraImg from '@/app/assets/jobs/telstra.png';
import technisysImg from '@/app/assets/jobs/technisys.jpg';
import { type WorkCardProps } from '@/app/(home)/sections/my-work/work-card';

const WORKS_DATA: WorkCardProps[] = [
  {
    title: 'Telstra - Adaptive Collaboration',
    description: 'Web application for task and project management with Next.js',
    skills: ['React', 'TypeScript', 'AWS'],
    src: telstraImg,
  },
  {
    title: 'Optus MsTeams',
    description: 'Full e-commerce platform with React, Node.js, and MongoDB',
    skills: ['React', 'Next.js', 'tailwind'],
    src: eyeonitImg,
  },
  {
    title: 'Banking solutions',
    description: 'Dashboard with data visualizations and real-time metrics',
    skills: ['React', 'jQuery', 'Java'],
    src: technisysImg,
  },
];

export default function MyWork() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">My work</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {WORKS_DATA.map((work) => (
          <WorkCard {...work} key={work.title} />
        ))}
      </div>
    </div>
  );
}
