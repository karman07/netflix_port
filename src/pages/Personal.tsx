import { useNavigate } from 'react-router-dom';
import { NETFLIX_COLORS } from '@/constants/colors';

export default function Personal() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-black">
      <nav className="flex items-center justify-between p-6">
        <h1 
          className="text-3xl font-bold cursor-pointer"
          style={{ color: NETFLIX_COLORS.primary }}
          onClick={() => navigate('/')}
        >
          Karman Singh
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="text-white hover:text-gray-300"
        >
          Back
        </button>
      </nav>
      
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-8">Personal</h2>
          <div className="grid gap-6">
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">About Me</h3>
              <p className="text-gray-300">Passionate developer with a love for creating innovative solutions</p>
            </div>
            <div className="bg-gray-900 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-white mb-4">Interests</h3>
              <p className="text-gray-300">Technology, coding, problem-solving, and continuous learning</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}