export const SECTION_IDS = {
  ABOUT: 'about',
  PROJECTS: 'projects',
  CONTACT: 'contact',
} as const;

export const UI_TEXT = {
  LAYOUT: {
    TITLE: 'Portfolio Site',
    DESCRIPTION: "Baltasar's Portfolio Site",
  },
  HERO: {
    GREETING: "👋 Hi, I'm Baltasar Solanilla",
    ROLE: 'Frontend Developer',
    TAGLINE:
      'I create beautiful, functional web experiences with modern technologies. Passionate about clean code, pixel-perfect designs, and exceptional user experiences.',
    CTA_PROJECTS: 'View Projects',
    CTA_CONTACT: 'Get In Touch',
    BG_ALT: 'Developer workspace',
  },
  ABOUT: {
    HEADING: { TITLE: 'About', HIGHLIGHT: 'Me' },
    DESCRIPTION:
      'Frontend Software Engineer with 5+ years of experience building scalable web applications using React, JavaScript, and modern web tooling. Passionate about translating complex problems into intuitive user experiences. Thrive in agile teams where code quality, maintainability, and user value are core priorities.',
    FEATURES: ['Clean Code', 'Maintainable', 'Performance'],
    TECH_TITLE: 'Technologies I Work With',
    AVATAR_ALT: 'Avatar of myself',
    DOWNLOAD_PREPARING: 'Preparing...',
    DOWNLOAD_LABEL: 'Download CV',
  },
  MY_WORK: {
    HEADING: { TITLE: 'Featured', HIGHLIGHT: 'Projects' },
    SUBTITLE:
      'A selection of projects that showcase my skills in software development',
    LIVE_LABEL: 'Live Demo',
    CODE_LABEL: 'Code',
  },
  CONTACT: {
    HEADING: { TITLE: "Let's Work", HIGHLIGHT: 'Together' },
    SUBTITLE:
      "Have a project in mind or just want to chat? I'd love to hear from you. Let's create something amazing together.",
    FORM: {
      NAME_LABEL: 'Name',
      NAME_PLACEHOLDER: 'Your full name',
      EMAIL_LABEL: 'Email',
      EMAIL_PLACEHOLDER: 'your.email@example.com',
      MESSAGE_LABEL: 'Message',
      MESSAGE_PLACEHOLDER: 'Tell me about your project or just say hello...',
      SUBMIT: 'Send Message',
      SUBMITTING: 'Sending...',
    },
    RIGHT_PANEL: {
      TITLE: 'Get In Touch',
      BODY:
        "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and design. Feel free to reach out!",
      EMAIL_ADDRESS: 'baltasar.solanilla@gmail.com',
      EMAIL_MAILTO: 'mailto:baltasar.solanilla@gmail.com',
      FOLLOW_ME: 'Follow Me',
      QUICK_RESPONSE_TITLE: 'Quick Response',
      QUICK_RESPONSE_TEXT:
        'I typically respond to emails within 24 hours. For urgent matters, feel free to connect with me on LinkedIn.',
    },
    TOASTS: {
      SUCCESS: 'Message sent successfully.',
      ERROR: 'Something went wrong — please try again.',
    },
  },
} as const;
