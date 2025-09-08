'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { SectionContainer } from '@/components/common/section-container';
import { SOCIAL_LINKS } from '@/lib/constants/common';
import type { ContactFormData } from '@/types';
import { sendEmail } from '@/lib/api/sendEmail';
import {
  errorToast,
  successToast,
} from '@/components/providers/toast-provider';

export const Contact = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await sendEmail();
      successToast('Message sent successfully.');
    } catch (error) {
      errorToast('Something went wrong — please try again.');
    }

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const getSocialIcon = (iconName: string) => {
    switch (iconName) {
      case 'Github':
        return <Github size={24} />;
      case 'Linkedin':
        return <Linkedin size={24} />;
      default:
        return null;
    }
  };

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
    <SectionContainer id="contact" className="bg-surface/30">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-16"
      >
        <motion.div variants={itemVariants} className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let&apos;s Work <span className="gradient-text">Together</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Have a project in mind or just want to chat? I&apos;d love to hear
            from you. Let&apos;s create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <motion.div variants={itemVariants} className="space-y-8">
            <Card className="glass-card">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className="bg-surface border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                      className="bg-surface border-border focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Tell me about your project or just say hello..."
                      rows={6}
                      required
                      className="bg-surface border-border focus:border-primary resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="hero-button w-full group"
                    size="lg"
                  >
                    {isSubmitting ? (
                      'Sending...'
                    ) : (
                      <>
                        Send Message
                        <Send className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8 lg:pl-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed">
                I&apos;m always open to discussing new opportunities,
                interesting projects, or just having a chat about technology and
                design. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 text-muted-foreground">
                <Mail size={20} className="text-primary" />
                <a
                  href="mailto:alex@example.com"
                  className="hover:text-primary transition-colors duration-200"
                >
                  baltasar.solanilla@gmail.com
                </a>
              </div>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Follow Me</h4>
              <div className="flex gap-4">
                {SOCIAL_LINKS.map((link) => (
                  <motion.a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-3 bg-surface hover:bg-surface-elevated border border-border hover:border-primary/50 rounded-lg transition-all duration-200 text-muted-foreground hover:text-primary group"
                  >
                    {getSocialIcon(link.icon)}
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="p-6 bg-surface/50 rounded-lg border border-border">
                <h4 className="font-semibold mb-2 text-accent">
                  Quick Response
                </h4>
                <p className="text-sm text-muted-foreground">
                  I typically respond to emails within 24 hours. For urgent
                  matters, feel free to connect with me on LinkedIn.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </SectionContainer>
  );
};
