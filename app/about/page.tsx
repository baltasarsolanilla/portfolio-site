'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function About() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-purple-300 bg-clip-text text-transparent">
            Sobre Mí
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Conoce más sobre mi trayectoria, experiencia y pasión por el
            desarrollo
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Personal Info */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold mb-6">¿Quién soy?</h2>
              <p className="text-lg text-gray-300 mb-6">
                Soy un desarrollador Full Stack apasionado por la tecnología y
                la innovación. Me encanta crear soluciones que resuelvan
                problemas reales y mejoren la vida de las personas a través de
                la tecnología.
              </p>
              <p className="text-lg text-gray-300 mb-6">
                Con más de 5 años de experiencia en desarrollo web, he trabajado
                en diversos proyectos que van desde aplicaciones empresariales
                hasta plataformas de comercio electrónico y aplicaciones
                móviles.
              </p>
              <p className="text-lg text-gray-300">
                Mi enfoque se centra en escribir código limpio, mantenible y
                escalable, siempre buscando las mejores prácticas y tecnologías
                emergentes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-6xl font-bold">
                TN
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Habilidades Técnicas
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Frontend
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>React</span>
                    <span className="text-purple-300">95%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '95%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>Next.js</span>
                    <span className="text-purple-300">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>TypeScript</span>
                    <span className="text-purple-300">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Backend
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Node.js</span>
                    <span className="text-purple-300">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>Express</span>
                    <span className="text-purple-300">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>Python</span>
                    <span className="text-purple-300">80%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '80%' }}
                    ></div>
                  </div>
                </div>
              </div>

              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <h3 className="text-xl font-semibold mb-4 text-purple-300">
                  Base de Datos
                </h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>MongoDB</span>
                    <span className="text-purple-300">90%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '90%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>PostgreSQL</span>
                    <span className="text-purple-300">85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '85%' }}
                    ></div>
                  </div>

                  <div className="flex justify-between">
                    <span>Redis</span>
                    <span className="text-purple-300">75%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div
                      className="bg-purple-500 h-2 rounded-full"
                      style={{ width: '75%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              Experiencia Profesional
            </h2>
            <div className="space-y-8">
              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Senior Full Stack Developer
                    </h3>
                    <p className="text-purple-300">TechCorp Solutions</p>
                  </div>
                  <span className="text-gray-400">2022 - Presente</span>
                </div>
                <p className="text-gray-300">
                  Liderando el desarrollo de aplicaciones web empresariales,
                  implementando arquitecturas escalables y mentorizando
                  desarrolladores junior.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Full Stack Developer
                    </h3>
                    <p className="text-purple-300">Digital Innovations</p>
                  </div>
                  <span className="text-gray-400">2020 - 2022</span>
                </div>
                <p className="text-gray-300">
                  Desarrollé aplicaciones web completas utilizando React,
                  Node.js y MongoDB, colaborando estrechamente con diseñadores y
                  product managers.
                </p>
              </div>

              <div className="bg-black/20 rounded-lg p-6 border border-white/10">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-semibold">
                      Frontend Developer
                    </h3>
                    <p className="text-purple-300">WebStudio</p>
                  </div>
                  <span className="text-gray-400">2019 - 2020</span>
                </div>
                <p className="text-gray-300">
                  Especializado en desarrollo frontend con React y TypeScript,
                  creando interfaces de usuario intuitivas y responsivas.
                </p>
              </div>
            </div>
          </div>

          {/* Education */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Educación</h2>
            <div className="bg-black/20 rounded-lg p-6 border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold">
                    Ingeniería en Sistemas Computacionales
                  </h3>
                  <p className="text-purple-300">Universidad Tecnológica</p>
                </div>
                <span className="text-gray-400">2015 - 2019</span>
              </div>
              <p className="text-gray-300">
                Especialización en desarrollo de software y arquitectura de
                sistemas. Proyecto final: Plataforma de gestión académica con
                React y Node.js.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-6">
              ¿Te gustaría trabajar juntos?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Estoy siempre abierto a nuevas oportunidades y proyectos
              interesantes
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                  Contáctame
                </Button>
              </Link>
              <Link href="/work">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10"
                >
                  Ver mi trabajo
                </Button>
              </Link>
            </div>
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
