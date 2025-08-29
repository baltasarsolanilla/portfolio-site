import { MapPin, Mail, LucideIcon, Linkedin, Github } from 'lucide-react';
import IconBadge from '../../../../components/icon-badge/icon-badge';
import IconAnchor from '../../../../components/icon-anchor/icon-anchor';

const contactInfo: {
  icon: LucideIcon;
  name: string;
  description: string;
}[] = [
  {
    icon: Mail,
    name: 'Email',
    description: 'baltasar.solanilla@gmail.com',
  },
  {
    icon: MapPin,
    name: 'Location',
    description: 'Sunshine Coast, Australia',
  },
];

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-16">Contact</h2>
      <p className="text-lg text-gray-300 mb-8">
        Would you like to work together or do you have any questions? I’d love
        to hear from you!
      </p>
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        {contactInfo.map((item) => (
          <div className="text-center" key={item.name}>
            <IconBadge icon={item.icon} />
            <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
      <div className="flex justify-center space-x-6">
        <IconAnchor
          icon={Linkedin}
          url="https://www.linkedin.com/in/baltasarsolanilla"
        />
        <IconAnchor icon={Github} url="https://github.com/baltasarsolanilla" />
      </div>
    </div>
  );
}
