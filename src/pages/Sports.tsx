import { useNavigate } from 'react-router-dom';
import { NETFLIX_COLORS } from '@/constants/colors';
import { Mail, Trophy, TrendingUp, Target } from 'lucide-react';
import { useState, useEffect } from 'react';
import NameDialog from '@/components/NameDialog';

export default function Sports() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState<string | null>(null);
  const [showDialog, setShowDialog] = useState(false);

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setUserName(storedName);
    } else {
      setShowDialog(true);
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    setUserName(name);
    localStorage.setItem('userName', name);
    setShowDialog(false);
  };

  const handleChallenge = () => {
    window.location.href = 'mailto:karmansingharora01@gmail.com?subject=Chess Challenge Request&body=Hi Karman, I would like to challenge you to a chess game!';
  };

  return (
    <div className="min-h-screen bg-black">
      {showDialog && <NameDialog onSubmit={handleNameSubmit} />}
      
      {/* Navigation */}
      <nav className="flex items-center justify-between p-6 fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm z-50">
        <h1 
          className="text-3xl font-bold cursor-pointer transition-transform hover:scale-105"
          style={{ color: NETFLIX_COLORS.primary }}
          onClick={() => navigate('/')}
        >
          Karman Singh
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="text-white hover:text-gray-300 transition-colors px-4 py-2 rounded-md hover:bg-gray-900"
        >
          Back
        </button>
      </nav>
      
      <div className="pt-24 px-6 pb-12">
        {/* Hero Section */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="text-center mb-12">
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              ♔ Chess Master ♚
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
              Strategic thinker. Tactical genius. Passionate competitor.
            </p>
          </div>

          {/* Stats Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {/* Rating Card */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ boxShadow: '0 10px 40px rgba(229, 9, 20, 0.1)' }}
            >
              <div className="flex items-center justify-center mb-4">
                <Trophy className="w-12 h-12" style={{ color: NETFLIX_COLORS.primary }} />
              </div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider text-center mb-2">
                Chess Rating
              </h3>
              <p className="text-5xl font-bold text-white text-center mb-2">1900</p>
              <p className="text-gray-500 text-center text-sm">Expert Level</p>
            </div>

            {/* Percentile Card */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ boxShadow: '0 10px 40px rgba(229, 9, 20, 0.1)' }}
            >
              <div className="flex items-center justify-center mb-4">
                <TrendingUp className="w-12 h-12" style={{ color: NETFLIX_COLORS.primary }} />
              </div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider text-center mb-2">
                Percentile
              </h3>
              <p className="text-5xl font-bold text-white text-center mb-2">Top 7%</p>
              <p className="text-gray-500 text-center text-sm">Global Ranking</p>
            </div>

            {/* Achievement Card */}
            <div 
              className="bg-gradient-to-br from-gray-900 to-gray-800 p-8 rounded-xl border-2 border-gray-800 hover:border-red-600 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
              style={{ boxShadow: '0 10px 40px rgba(229, 9, 20, 0.1)' }}
            >
              <div className="flex items-center justify-center mb-4">
                <Target className="w-12 h-12" style={{ color: NETFLIX_COLORS.primary }} />
              </div>
              <h3 className="text-gray-400 text-sm uppercase tracking-wider text-center mb-2">
                Experience
              </h3>
              <p className="text-5xl font-bold text-white text-center mb-2">10+</p>
              <p className="text-gray-500 text-center text-sm">Years Playing</p>
            </div>
          </div>

          {/* About Chess Section */}
          <div className="bg-gradient-to-br from-gray-900/90 to-black p-10 rounded-2xl border border-gray-800 mb-12">
            <h3 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
              <span style={{ color: NETFLIX_COLORS.primary }}>♟</span>
              Why Chess?
            </h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 text-lg leading-relaxed mb-4">
                  Chess is more than just a game to me—it's a passion that has shaped my strategic thinking 
                  and problem-solving abilities. With a rating of <span className="font-bold text-white">1900</span>, 
                  I've proven myself among the <span className="font-bold text-white">top 7% of players globally</span>.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Every game teaches patience, foresight, and the importance of calculated risk-taking—skills 
                  that transcend the board and apply to every aspect of life and work.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🎯</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Strategic Mastery</h4>
                    <p className="text-gray-400 text-sm">Developing long-term plans while adapting to dynamic situations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">⚡</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Tactical Precision</h4>
                    <p className="text-gray-400 text-sm">Spotting patterns and executing winning combinations</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <h4 className="text-white font-semibold mb-1">Competitive Spirit</h4>
                    <p className="text-gray-400 text-sm">Thriving under pressure and learning from every match</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Challenge Section */}
          <div 
            className="bg-gradient-to-r from-red-900/20 via-gray-900 to-red-900/20 p-12 rounded-2xl border-2 border-red-600/30 text-center"
            style={{ boxShadow: '0 20px 60px rgba(229, 9, 20, 0.3)' }}
          >
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Think You Can Beat Me?
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              I'm always up for a good challenge! Whether you're a beginner looking to learn 
              or a seasoned player ready to compete, let's play a game.
            </p>
            <button
              onClick={handleChallenge}
              className="group relative inline-flex items-center gap-3 px-8 py-4 text-lg font-semibold text-white rounded-lg transition-all duration-300 transform hover:scale-105"
              style={{ backgroundColor: NETFLIX_COLORS.primary }}
            >
              <Mail className="w-6 h-6 group-hover:rotate-12 transition-transform" />
              <span>Challenge Me to a Game</span>
              <span className="absolute inset-0 rounded-lg bg-white opacity-0 group-hover:opacity-20 transition-opacity"></span>
            </button>
            <p className="text-gray-500 mt-4 text-sm">
              Click to send me an email challenge
            </p>
          </div>

          {/* Other Sports Section */}
          <div className="mt-16">
            <h3 className="text-3xl font-bold text-white mb-6 text-center">
              Other Sports I Enjoy
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors text-center">
                <span className="text-4xl mb-3 block">🏏</span>
                <h4 className="text-xl font-semibold text-white mb-2">Cricket</h4>
                <p className="text-gray-400">Following international matches and tournaments</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors text-center">
                <span className="text-4xl mb-3 block">⚽</span>
                <h4 className="text-xl font-semibold text-white mb-2">Football</h4>
                <p className="text-gray-400">Passionate about the beautiful game</p>
              </div>
              <div className="bg-gray-900/50 p-6 rounded-xl border border-gray-800 hover:border-gray-700 transition-colors text-center">
                <span className="text-4xl mb-3 block">🏀</span>
                <h4 className="text-xl font-semibold text-white mb-2">Basketball</h4>
                <p className="text-gray-400">Enjoying the fast-paced action</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}