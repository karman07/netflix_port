import { NETFLIX_COLORS } from '@/constants/colors';

export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-black/90 backdrop-blur-sm">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <h1 
          className="text-3xl font-bold"
          style={{ color: NETFLIX_COLORS.primary }}
        >
          NETFLIX
        </h1>
        <div className="flex items-center space-x-6">
          <button className="text-white hover:text-gray-300 transition-colors">
            Sign In
          </button>
        </div>
      </div>
    </nav>
  );
}