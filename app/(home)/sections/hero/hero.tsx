'use client';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionContainer } from '@/components/common/section-container';
import { AnimatedText } from '@/components/common/animated-text';
import heroImage from '@/assets/hero-bg.jpg';
import Image from 'next/image';

export const Hero = () => {
  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <SectionContainer className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage.src}
          alt="Developer workspace"
          className="w-full h-full object-cover opacity-20"
          fill={true}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background"></div>
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center space-y-8">
        <AnimatedText delay={0.2}>
          <p className="text-lg text-muted-foreground font-medium">
            👋 Hi, I&apos;m Baltasar Solanilla
          </p>
        </AnimatedText>

        <AnimatedText delay={0.4}>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            <span className="gradient-text">Frontend Developer</span>
          </h1>
        </AnimatedText>

        <AnimatedText delay={0.6}>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            I create beautiful, functional web experiences with modern
            technologies. Passionate about clean code, pixel-perfect designs,
            and exceptional user experiences.
          </p>
        </AnimatedText>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
        >
          <Button
            onClick={scrollToProjects}
            className="hero-button group"
            size="lg"
          >
            View Projects
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Button>

          <Button
            variant="outline"
            onClick={scrollToContact}
            size="lg"
            className="border-border hover:border-primary/50 hover:bg-surface"
          >
            Get In Touch
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="pt-12"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className="inline-block"
          >
            <div className="w-6 h-10 border-2 border-primary rounded-full p-1">
              <div className="w-1 h-3 bg-primary rounded-full mx-auto animate-pulse"></div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </SectionContainer>
  );
};
