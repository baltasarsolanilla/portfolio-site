import { Github, Linkedin } from 'lucide-react';
import { SOCIAL_LINKS } from '@/lib/constants/common';

export const Footer = () => {
  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={20} />;
      case 'Linkedin':
        return <Linkedin size={20} />;
      default:
        return null;
    }
  };

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center py-8 space-y-4 md:space-y-0">
          <div className="text-muted-foreground text-sm">
            &copy; 2025 Baltasar Solanilla. All rights reserved.
          </div>

          <div className="flex items-center space-x-6">
            {SOCIAL_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.name}
              >
                {getSocialIcon(link.icon)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
