'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Work() {
  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      description:
        'Plataforma completa de comercio electrónico con sistema de pagos, gestión de inventario y panel de administración.',
      longDescription:
        'Desarrollé una plataforma de e-commerce completa utilizando React para el frontend y Node.js con Express para el backend. La aplicación incluye autenticación de usuarios, gestión de productos, carrito de compras, sistema de pagos con Stripe, y un panel de administración completo. Utilicé MongoDB para la base de datos y implementé un sistema de búsqueda avanzada con filtros.',
      technologies: [
        'React',
        'Node.js',
        'Express',
        'MongoDB',
        'Stripe',
        'Redux',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'Aplicación web para gestión de tareas y proyectos con funcionalidades de colaboración en equipo.',
      longDescription:
        'Creé una aplicación de gestión de tareas con Next.js y TypeScript que permite a los usuarios crear, asignar y rastrear tareas en tiempo real. La aplicación incluye funcionalidades como notificaciones push, chat en tiempo real, y un dashboard con métricas de productividad. Utilicé Prisma como ORM y PostgreSQL para la base de datos.',
      technologies: [
        'Next.js',
        'TypeScript',
        'Prisma',
        'PostgreSQL',
        'Socket.io',
        'Tailwind CSS',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Frontend',
    },
    {
      id: 3,
      title: 'Analytics Dashboard',
      description:
        'Panel de control con visualizaciones de datos y métricas en tiempo real para análisis empresarial.',
      longDescription:
        'Desarrollé un dashboard de analytics empresarial con React y D3.js que proporciona visualizaciones interactivas de datos. El sistema incluye gráficos personalizables, reportes automáticos, y integración con múltiples fuentes de datos. Implementé un sistema de alertas y notificaciones para métricas críticas.',
      technologies: [
        'React',
        'D3.js',
        'Node.js',
        'Redis',
        'Chart.js',
        'Material-UI',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Data Visualization',
    },
    {
      id: 4,
      title: 'Mobile Banking App',
      description:
        'Aplicación móvil para servicios bancarios con funcionalidades de transferencias y pagos.',
      longDescription:
        'Participé en el desarrollo de una aplicación móvil de banca en React Native que permite a los usuarios realizar transferencias, pagar facturas, y gestionar sus cuentas. La aplicación incluye autenticación biométrica, notificaciones push, y un sistema de seguridad robusto con encriptación de datos.',
      technologies: [
        'React Native',
        'Node.js',
        'MongoDB',
        'Firebase',
        'JWT',
        'Biometrics',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Mobile',
    },
    {
      id: 5,
      title: 'Real Estate Platform',
      description:
        'Plataforma web para búsqueda y gestión de propiedades inmobiliarias.',
      longDescription:
        'Desarrollé una plataforma inmobiliaria completa con React y Node.js que permite a los usuarios buscar propiedades, programar visitas, y contactar agentes. La aplicación incluye un sistema de filtros avanzados, mapas interactivos con Google Maps API, y un sistema de gestión de leads para agentes inmobiliarios.',
      technologies: [
        'React',
        'Node.js',
        'PostgreSQL',
        'Google Maps API',
        'AWS S3',
        'SendGrid',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      category: 'Full Stack',
    },
    {
      id: 6,
      title: 'AI Chatbot',
      description:
        'Chatbot inteligente para atención al cliente con procesamiento de lenguaje natural.',
      longDescription:
        'Implementé un chatbot de IA utilizando Python y TensorFlow que puede responder preguntas frecuentes y resolver problemas básicos de clientes. El sistema incluye análisis de sentimientos, integración con APIs de terceros, y un panel de administración para entrenar y mejorar las respuestas del bot.',
      technologies: [
        'Python',
        'TensorFlow',
        'NLTK',
        'Flask',
        'PostgreSQL',
        'Docker',
      ],
      image: '/api/placeholder/600/400',
      liveUrl: '#',
      githubUrl: '#',
      category: 'AI/ML',
    },
  ];

  const categories = [
    'All',
    'Full Stack',
    'Frontend',
    'Mobile',
    'Data Visualization',
    'AI/ML',
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Mi Trabajo
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Una colección de proyectos que demuestran mi pasión por la
            innovación y la excelencia técnica
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-full border border-white/20 hover:border-purple-500 hover:bg-purple-500/20 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-black/20 rounded-lg overflow-hidden border border-white/10 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    {project.title}
                  </span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-xs">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-purple-600/20 text-xs rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-600/20 text-xs rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex gap-3">
                    <Button
                      size="sm"
                      className="bg-purple-600 hover:bg-purple-700 flex-1"
                    >
                      Ver Demo
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-white/30 text-white hover:bg-white/10 flex-1"
                    >
                      Código
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16">
            Proyecto Destacado
          </h2>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">E-commerce Platform</h3>
              <p className="text-lg text-gray-300 mb-6">
                Mi proyecto más ambicioso hasta la fecha. Una plataforma
                completa de comercio electrónico que demuestra mis habilidades
                en desarrollo full stack, arquitectura de sistemas, y
                implementación de funcionalidades complejas.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Sistema de autenticación seguro con JWT</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Integración con pasarelas de pago (Stripe)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Panel de administración completo</span>
                </div>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span>Sistema de búsqueda y filtros avanzados</span>
                </div>
              </div>
              <div className="flex gap-4">
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Ver Demo
                </Button>
                <Button
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Ver Código
                </Button>
              </div>
            </div>
            <div className="text-center">
              <div className="w-full h-96 bg-gradient-to-br from-purple-600 via-blue-600 to-purple-800 rounded-lg flex items-center justify-center">
                <span className="text-white text-2xl font-bold">
                  E-commerce Platform
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">¿Te gusta lo que ves?</h2>
          <p className="text-lg text-gray-300 mb-8">
            Estoy disponible para nuevos proyectos y oportunidades de
            colaboración
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Hablemos
              </Button>
            </Link>
            <Link href="/about">
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Más sobre mí
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-white/10">
        <div className="max-w-7xl mx-auto text-center text-gray-400">
          <p>&copy; 2024 Tu Nombre. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  );
}
