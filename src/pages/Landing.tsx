import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { NETFLIX_COLORS } from '@/constants/colors';
import developerImg from '@/assets/developer.png';
import personalImg from '@/assets/personal.png';
import sportsImg from '@/assets/sports.png';

interface Profile {
  name: string;
  color: string;
  image: string;
  path: string;
}

export default function Landing() {
  const [showProfiles, setShowProfiles] = useState(false);
  const [selectedProfile, setSelectedProfile] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => setShowProfiles(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const profiles: Profile[] = [
    { name: 'Developer', color: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)', image: developerImg, path: '/developer' },
    { name: 'Personal', color: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)', image: personalImg, path: '/personal' },
    { name: 'Sports', color: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)', image: sportsImg, path: '/sports' },
  ];

  const handleProfileClick = (profile: Profile) => {
    setSelectedProfile(profile.name);
    setTimeout(() => {
      navigate(profile.path);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center overflow-hidden relative">
      {/* Animations CSS */}
      <style>{`
        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes fadeOut { from { opacity: 1; } to { opacity: 0; } }
        @keyframes scaleIn { from { transform: scale(0.8); opacity: 0; } to { transform: scale(1); opacity: 1; } }
        @keyframes staggerIn { from { opacity: 0; transform: scale(0.8); } to { opacity: 1; transform: scale(1); } }

        .intro-screen { animation: fadeIn 1.5s ease-out; }
        .intro-screen.exit { animation: fadeOut 1s ease-out forwards; }
        .name-text { animation: scaleIn 1.2s ease-out; }
        .profiles-screen { animation: fadeIn 1.2s ease-out; }
        .profile-card { animation: staggerIn 0.4s ease-out forwards; opacity: 0; }
        .profile-card:nth-child(1) { animation-delay: 0s; }
        .profile-card:nth-child(2) { animation-delay: 0.2s; }
        .profile-card:nth-child(3) { animation-delay: 0.4s; }
        .profile-card:nth-child(4) { animation-delay: 0.6s; }
        .profile-avatar { transition: all 0.2s ease; }
        .profile-card:hover .profile-avatar { transform: scale(1.1); box-shadow: 0 0 0 4px white; }
        .profile-card:active .profile-avatar { transform: scale(0.95); }
        .profile-name { transition: color 0.2s ease; }
        .profile-card:hover .profile-name { color: #d1d1d1; }
        .selected-screen { animation: fadeIn 0.5s ease-out; }
      `}</style>

      {/* Intro Screen */}
      {!showProfiles && !selectedProfile && (
        <div className={`text-center intro-screen ${showProfiles ? 'exit' : ''}`}>
          <h1
            className="text-6xl md:text-8xl font-extrabold name-text"
            style={{ color: NETFLIX_COLORS.primary, fontFamily: 'Netflix Sans, Arial, sans-serif' }}
          >
            Karman Singh
          </h1>
        </div>
      )}

      {/* Profile Selection */}
      {showProfiles && !selectedProfile && (
        <div className="text-center profiles-screen">
          <h1 className="text-4xl md:text-5xl font-normal text-white mb-12" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>Who’s watching?</h1>

          <div className="flex justify-center gap-8 px-4">
            {profiles.map((profile) => (
              <div
                key={profile.name}
                className="flex flex-col items-center cursor-pointer profile-card"
                onClick={() => handleProfileClick(profile)}
              >
                <div className="relative mb-4">
                  <div
                    className="w-24 h-24 md:w-32 md:h-32 rounded-md flex items-center justify-center profile-avatar overflow-hidden"
                    style={{ background: profile.color }}
                  >
                    <img 
                      src={profile.image} 
                      alt={profile.name}
                      className="w-16 h-16 md:w-20 md:h-20 image-contain"
                    />
                  </div>
                </div>
                <span className="text-white text-lg profile-name" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>{profile.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Selected Profile Screen */}
      {selectedProfile && (
        <div className="text-center selected-screen">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>
            Welcome, {selectedProfile}!
          </h1>
          <p className="text-2xl text-gray-400 mb-12" style={{ fontFamily: 'Netflix Sans, Arial, sans-serif' }}>Loading your content...</p>
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
      )}
    </div>
  );
}
