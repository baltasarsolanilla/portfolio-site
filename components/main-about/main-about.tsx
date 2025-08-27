export default function MainAbout() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Sobre Mí</h2>
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-lg text-gray-300 mb-6">
            Soy un desarrollador Full Stack con experiencia en tecnologías
            modernas como React, Node.js, y bases de datos. Me apasiona resolver
            problemas complejos y crear soluciones elegantes que mejoren la
            experiencia del usuario.
          </p>
          <p className="text-lg text-gray-300 mb-6">
            Con una sólida base en desarrollo web y una mente curiosa, siempre
            estoy aprendiendo nuevas tecnologías y metodologías para mantenerme
            al día con las últimas tendencias del desarrollo.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              React
            </span>
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              Node.js
            </span>
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              TypeScript
            </span>
            <span className="px-3 py-1 bg-purple-600/20 border border-purple-500/30 rounded-full text-sm">
              Next.js
            </span>
          </div>
        </div>
        <div className="text-center">
          <div className="w-64 h-64 mx-auto bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-4xl font-bold">
            TN
          </div>
        </div>
      </div>
    </div>
  );
}
