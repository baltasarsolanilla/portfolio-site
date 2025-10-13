'use client';
import { SectionContainer } from '@/components/common/section-container';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import type { Project } from '@/types';
import { motion } from 'framer-motion';

import portfolioImg from '@/assets/projects/project-portfolio.png';
import whatsappImg from '@/assets/projects/project-whatsapp.jpg';
import { TECH_STACK } from '@/constants/tech-stack-constants';
import { ExternalLink, Github } from 'lucide-react';
import Image from 'next/image';
import { MyWorkLink } from './my-work-link';

const {
  NEXTJS,
  TYPESCRIPT,
  TAILWIND,
  NODEJS,
  PRISMA,
  POSTGRESQL,
  AWS_LAMBDA,
  API_GATEWAY,
  S3,
  CLOUDFRONT,
  AWS_LIGHTSAIL_DOCKER,
  EVOLUTION_API,
  GITHUB_ACTIONS,
} = TECH_STACK;

const projects: Project[] = [
  {
    id: '1',
    title: 'My Portfolio',
    description:
      'Modern, TypeScript-powered personal portfolio website designed to highlight my development skills, projects, and experience.',
    image: portfolioImg.src,
    techStack: [
      NEXTJS,
      TYPESCRIPT,
      TAILWIND,
      AWS_LAMBDA,
      API_GATEWAY,
      S3,
      CLOUDFRONT,
      GITHUB_ACTIONS,
    ],
    liveUrl: 'https://d2uxrwionurg14.cloudfront.net/',
    githubUrl: 'https://github.com/baltasarsolanilla/portfolio-site',
    featured: true,
  },
  {
    id: '2',
    title: 'WhatsApp Group Manager Bot',
    description:
      'Automated WhatsApp group management system with real-time blacklist enforcement, membership tracking, and webhook-based event processing.',
    image: whatsappImg.src,
    techStack: [
      NODEJS,
      TYPESCRIPT,
      PRISMA,
      POSTGRESQL,
      EVOLUTION_API,
      AWS_LIGHTSAIL_DOCKER,
      GITHUB_ACTIONS,
    ],
    liveUrl: '',
    githubUrl:
      'https://github.com/baltasarsolanilla/whatsapp-group-manager-bot',
    featured: true,
  },
];

export const MyWork = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <SectionContainer id="projects">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="space-y-16"
      >
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A selection of projects that showcase my skills in software
            development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group"
            >
              <Card className="glass-card hover:border-primary/50 transition-all duration-300 overflow-hidden h-full">
                <div className="aspect-video bg-surface rounded-t-lg relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill={true}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="absolute bottom-4 left-4 right-4 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex gap-2">
                      {project.liveUrl && (
                        <Button size="sm" className="hero-button" asChild>
                          <MyWorkLink
                            url={project.liveUrl}
                            label="Live Demo"
                            icon={ExternalLink}
                          />
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-border hover:border-accent/50 hover:text-accent  text-muted-foreground"
                          asChild
                        >
                          <MyWorkLink
                            url={project.githubUrl}
                            label="Code"
                            icon={Github}
                          />
                        </Button>
                      )}
                    </div>
                  </div>
                </div>

                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-200">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.techStack.map((tech) => (
                        <Badge
                          key={tech}
                          variant="secondary"
                          className="bg-surface text-foreground hover:bg-surface-elevated cursor-default"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-2">
                      <div className="flex gap-2">
                        {project.liveUrl && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground p-1 h-auto"
                            asChild
                          >
                            <MyWorkLink
                              url={project.liveUrl}
                              label="Live Demo"
                              icon={ExternalLink}
                            />
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground p-1 h-auto"
                            asChild
                          >
                            <MyWorkLink
                              url={project.githubUrl}
                              label="Code"
                              icon={Github}
                            />
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </SectionContainer>
  );
};
