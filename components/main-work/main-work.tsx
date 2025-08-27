export default function MainWork() {
  return (
    <div className="max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">Mi Trabajo</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Project Card 1 */}
        <div className="bg-black/20 rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
          <div className="w-full h-48 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Proyecto E-commerce</h3>
          <p className="text-gray-300 mb-4">
            Plataforma completa de comercio electrónico con React, Node.js y
            MongoDB
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-purple-600/20 text-xs rounded">
              React
            </span>
            <span className="px-2 py-1 bg-purple-600/20 text-xs rounded">
              Node.js
            </span>
          </div>
        </div>

        {/* Project Card 2 */}
        <div className="bg-black/20 rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
          <div className="w-full h-48 bg-gradient-to-br from-green-600 to-teal-600 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">App de Gestión</h3>
          <p className="text-gray-300 mb-4">
            Aplicación web para gestión de tareas y proyectos con Next.js
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-purple-600/20 text-xs rounded">
              Next.js
            </span>
            <span className="px-2 py-1 bg-purple-600/20 text-xs rounded">
              TypeScript
            </span>
          </div>
        </div>

        {/* Project Card 3 */}
        <div className="bg-black/20 rounded-lg p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300">
          <div className="w-full h-48 bg-gradient-to-br from-orange-600 to-red-600 rounded-lg mb-4"></div>
          <h3 className="text-xl font-semibold mb-2">Dashboard Analytics</h3>
          <p className="text-gray-300 mb-4">
            Panel de control con visualizaciones de datos y métricas en tiempo
            real
          </p>
          <div className="flex gap-2">
            <span className="px-2 py-1 bg-purple-600/20 text-xs rounded">
              React
            </span>
            <span className="px-2 py-1 bg-purple-600/20 text-xs rounded">
              D3.js
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
