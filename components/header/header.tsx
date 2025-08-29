import HeaderNavBar from './header-nav-bar';

export default function Header() {
  return (
    <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="text-xl font-bold">Baltasar Solanilla</div>
          {/* Hide navbar for the time being - add when back: md:flex */}
          <div className="hidden space-x-8">
            <HeaderNavBar />
          </div>
        </div>
      </div>
    </nav>
  );
}
