'use client';

import avatarImg from '@/assets/avatarImg.png';
import { SectionContainer } from '@/components/common/section-container';
import { Card } from '@/components/ui/card';
import { TECH_STACK } from '@/constants/tech-stack-constants';
import type { TechSkill } from '@/types';
import { motion } from 'framer-motion';
import { Code2, Wrench, Zap } from 'lucide-react';
import Image from 'next/image';
import DownloadResumeBtn from './download-resume-btn';

const {
  REACT,
  TYPESCRIPT,
  NEXTJS,
  TAILWIND,
  NODEJS,
  FIGMA,
  GIT,
  POSTGRESQL,
  AWS,
} = TECH_STACK;

const techSkills: TechSkill[] = [
  { name: REACT, category: 'frontend' },
  { name: TYPESCRIPT, category: 'frontend' },
  { name: NEXTJS, category: 'frontend' },
  { name: TAILWIND, category: 'frontend' },
  { name: NODEJS, category: 'backend' },
  { name: POSTGRESQL, category: 'backend' },
  { name: FIGMA, category: 'design' },
  { name: GIT, category: 'tools' },
  { name: AWS, category: 'tools' },
];

export const AboutMe = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <SectionContainer id="about" className="bg-surface/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-16"
      >
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="space-y-4">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Frontend Software Engineer with 5+ years of experience building
                scalable web applications using React, JavaScript, and modern
                web tooling. Passionate about translating complex problems into
                intuitive user experiences. Thrive in agile teams where code
                quality, maintainability, and user value are core priorities.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <div className="flex items-center gap-2 text-accent">
                <Code2 size={20} />
                <span className="font-medium">Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Wrench size={20} />
                <span className="font-medium">Maintainable</span>
              </div>
              <div className="flex items-center gap-2 text-accent">
                <Zap size={20} />
                <span className="font-medium">Performance</span>
              </div>
            </div>
            <DownloadResumeBtn />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-center lg:text-left">
                Technologies I Work With
              </h3>

              <div className="flex flex-row flex-wrap gap-4">
                {techSkills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Card className="tech-badge group cursor-pointer text-center p-4 h-full">
                      <div className="text-sm font-medium">{skill.name}</div>
                    </Card>
                  </motion.div>
                ))}
              </div>
              <div className="w-32 h-32 mx-auto mt-12">
                <Image
                  src={avatarImg}
                  alt="Avatar of myself"
                  width={256}
                  height={256}
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};
