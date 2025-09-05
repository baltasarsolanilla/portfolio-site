'use client';
import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { SectionContainer } from '@/components/common/section-container';
import type { Project } from '@/types';

import ecommerceImg from '@/assets/project-ecommerce.jpg';
import taskManagerImg from '@/assets/project-taskmanager.jpg';
import Image from 'next/image';

const projects: Project[] = [
  {
    id: '1',
    title: 'Project title',
    description:
      'Irure tempor occaecat adipisicing labore id labore. Amet culpa fugiat nulla ex est incididunt nostrud ut. Do ullamco aliqua ullamco amet. Commodo cupidatat irure incididunt exercitation dolor qui nulla voluptate elit.',
    image: ecommerceImg.src,
    techStack: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Node.js'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: true,
  },
  {
    id: '2',
    title: 'Project title',
    description:
      'Laborum laborum duis cupidatat aliqua anim sunt fugiat. Pariatur exercitation commodo minim consequat duis ut qui elit voluptate do sit ad exercitation. Occaecat culpa mollit ad est deserunt in fugiat elit ad adipisicing voluptate. Sunt exercitation ea culpa nisi id laborum veniam in in. Nostrud esse aliquip deserunt quis laborum occaecat. Ut occaecat minim ea veniam esse eiusmod pariatur id.',
    image: taskManagerImg.src,
    techStack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Socket.io'],
    liveUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    featured: false,
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
            A selection of projects that showcase my skills in frontend
            development and UI/UX design
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
                        <Button size="sm" className="hero-button">
                          <ExternalLink size={16} className="mr-1" />
                          Live Demo
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-border hover:border-primary/50"
                        >
                          <Github size={16} className="mr-1" />
                          Code
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
                          className="bg-surface text-foreground hover:bg-surface-elevated"
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
                            className="text-primary hover:text-primary-hover p-0 h-auto"
                            asChild
                          >
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink size={16} className="mr-1" />
                              Live Demo
                            </a>
                          </Button>
                        )}
                        {project.githubUrl && (
                          <Button
                            size="sm"
                            variant="ghost"
                            className="text-muted-foreground hover:text-foreground p-0 h-auto"
                            asChild
                          >
                            <a
                              href={project.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github size={16} className="mr-1" />
                              View Code
                            </a>
                          </Button>
                        )}
                      </div>

                      <ArrowRight
                        size={20}
                        className="text-primary transform group-hover:translate-x-1 transition-transform duration-200"
                      />
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
