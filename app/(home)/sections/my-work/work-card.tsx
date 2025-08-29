import { Badge } from '@/components/ui/badge';
import Image, { StaticImageData } from 'next/image';

export type WorkCardProps = {
  src: StaticImageData;
  title: string;
  description: string;
  skills: string[];
};

export default function WorkCard({
  src,
  title,
  description,
  skills,
}: WorkCardProps) {
  return (
    <div className="bg-black/20 rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
      <div className="w-full h-48 bg-gradient-to-br rounded-lg mb-4">
        <Image
          src={src}
          alt="company logo"
          width={256}
          height={256}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            className="px-2 py-1 bg-purple-600/20 text-white border-purple-500/30"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}
