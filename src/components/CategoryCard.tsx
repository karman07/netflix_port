import { NETFLIX_COLORS } from '@/constants/colors';

interface CategoryCardProps {
  title: string;
  description: string;
  icon: string;
}

export default function CategoryCard({ title, description, icon }: CategoryCardProps) {
  return (
    <div className="bg-gray-900 rounded-lg p-6 hover:bg-gray-800 transition-all duration-300 cursor-pointer group">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>
      <p className="text-gray-400 text-sm">{description}</p>
      <button 
        className="mt-4 px-6 py-2 rounded text-white font-medium transition-colors"
        style={{ backgroundColor: NETFLIX_COLORS.primary }}
      >
        Explore
      </button>
    </div>
  );
}