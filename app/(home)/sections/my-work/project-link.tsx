import { Github } from 'lucide-react';

type ProjectLinkProps = React.ComponentPropsWithoutRef<'a'> & {
  githubUrl: string;
};

export function ProjectLink({
  githubUrl,
  className,
  ...props
}: ProjectLinkProps) {
  return (
    <a
      href={githubUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      <Github size={16} className="mr-1" />
      Code
    </a>
  );
}
