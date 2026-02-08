import { useNavigate } from 'react-router-dom';
import { NETFLIX_COLORS } from '@/constants/colors';
import { useState, useEffect } from 'react';
import { Code2, Crown, Heart, Rocket, Dumbbell, Target, Lightbulb, TrendingUp, Calendar, Award, Brain, Zap, Briefcase, TrendingUp as Trending } from 'lucide-react';
import NameDialog from '@/components/NameDialog';

export default function Personal() {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [showDialog, setShowDialog] = useState(false);
  const codingYears = new Date().getFullYear() - 2020;
  const chessYears = new Date().getFullYear() - 2017;

  useEffect(() => {
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      setIsVisible(true);
    } else {
      setShowDialog(true);
    }
  }, []);

  const handleNameSubmit = (name: string) => {
    localStorage.setItem('userName', name);
    setShowDialog(false);
    setTimeout(() => setIsVisible(true), 100);
  };

  const timeline = [
    { year: '2017', title: 'Chess Journey Begins', description: 'Discovered the beautiful game of chess. Began developing strategic thinking, pattern recognition, and analytical skills that would later complement my technical career.', Icon: Crown },
    { year: '2020', title: 'Coding Journey Begins', description: 'Embarked on software development journey. Started learning programming fundamentals, algorithms, and building real-world applications with modern technologies.', Icon: Code2 },
    { year: '2025', title: 'Year of Resilience', description: 'Faced and overcame two major surgeries. Demonstrated unwavering determination by maintaining focus on personal growth, professional development, and never giving up on my goals.', Icon: Heart, highlight: true },
    { year: 'Present', title: 'Thriving & Building', description: 'Founder and full-stack developer excelling in building innovative products. Maintaining a ~1900 Chess.com rating (top 10% globally) and 1400 OTB rating. Combining entrepreneurial vision with technical expertise to create impactful solutions.', Icon: Rocket },
  ];

  const skills = [
    { category: 'Technical Skills', Icon: Code2, items: ['Full-Stack Development', 'React & TypeScript', 'Modern Web Technologies', 'Problem Solving', 'System Design', 'Code Architecture'] },
    { category: 'Chess Expertise', Icon: Crown, items: ['Strategic Planning', 'Tactical Analysis', 'Pattern Recognition', 'Time Management', 'Competitive Play', 'Opening Theory'] },
    { category: 'Soft Skills', Icon: Brain, items: ['Resilience', 'Adaptability', 'Critical Thinking', 'Continuous Learning', 'Attention to Detail', 'Perseverance'] },
  ];

  const achievements = [
    { title: 'Chess.com Rating', value: '~1900', description: 'Advanced level player demonstrating strong tactical and strategic understanding', Icon: Award },
    { title: 'Chess Percentile', value: 'Top 10%', description: 'Ranked in the 90th percentile globally among millions of chess players', Icon: Trending },
    { title: 'OTB Rating', value: '1400', description: 'Over-the-board competitive chess rating with consistent improvement', Icon: Crown },
    { title: 'Development Experience', value: `${codingYears}+ Years`, description: 'Building scalable applications and founding innovative products', Icon: Code2 },
    { title: 'Chess Experience', value: `${chessYears}+ Years`, description: 'Dedicated practice and competitive play sharpening analytical skills', Icon: Calendar },
    { title: 'Entrepreneurship', value: 'Founder', description: 'Building and leading innovative technology ventures', Icon: Briefcase },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {showDialog && <NameDialog onSubmit={handleNameSubmit} />}
      
      <nav className="flex items-center justify-between p-6 border-b border-gray-800 backdrop-blur-sm bg-black/50 sticky top-0 z-50">
        <h1 
          className="text-3xl font-bold cursor-pointer hover:scale-105 transition-transform"
          style={{ color: NETFLIX_COLORS.primary }}
          onClick={() => navigate('/')}
        >
          Karman Singh
        </h1>
        <button 
          onClick={() => navigate('/')}
          className="px-6 py-2 text-white hover:text-gray-300 transition-all hover:scale-105 border border-gray-700 rounded-lg hover:border-red-600"
        >
          ← Back
        </button>
      </nav>
      
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-10'}`}>
            <h2 className="text-6xl md:text-7xl font-bold text-white mb-6">Karman Singh</h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-8">Founder • Full-Stack Developer • Chess Enthusiast</p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-red-600 transition-all">
                <p className="text-sm text-gray-400">Experience</p>
                <p className="text-2xl font-bold text-white">{codingYears}+ Years</p>
              </div>
              <div className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-red-600 transition-all">
                <p className="text-sm text-gray-400">Chess Rating</p>
                <p className="text-2xl font-bold" style={{ color: NETFLIX_COLORS.primary }}>~1900</p>
              </div>
              <div className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-red-600 transition-all">
                <p className="text-sm text-gray-400">Percentile</p>
                <p className="text-2xl font-bold" style={{ color: NETFLIX_COLORS.primary }}>Top 10%</p>
              </div>
              <div className="px-6 py-3 bg-gray-900 border border-gray-700 rounded-lg hover:border-red-600 transition-all">
                <p className="text-sm text-gray-400">Chess Journey</p>
                <p className="text-2xl font-bold text-white">{chessYears}+ Years</p>
              </div>
            </div>
            <p className="text-base md:text-lg text-gray-500 max-w-3xl mx-auto leading-relaxed">Founder and full-stack developer combining technical expertise with strategic thinking to build innovative solutions. Ranked in the top 10% of chess players globally, demonstrating exceptional analytical and problem-solving abilities.</p>
          </div>

          {/* Timeline */}
          <div className={`mb-20 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Professional Journey</h3>
              <p className="text-gray-400">Key milestones that shaped my path</p>
            </div>
            <div className="max-w-4xl mx-auto space-y-6">
              {timeline.map((item, index) => (
                <div key={index} className={`transition-all duration-700 delay-${(index + 1) * 100} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  <div className={`relative bg-gradient-to-r from-gray-900 to-gray-800 p-6 md:p-8 rounded-xl border ${
                    item.highlight ? 'border-red-600 shadow-lg shadow-red-900/30' : 'border-gray-700'
                  } hover:border-red-600 transition-all duration-300 group`}>
                    <div className="flex items-start gap-4 md:gap-6">
                      <div className={`flex-shrink-0 w-12 h-12 md:w-16 md:h-16 rounded-xl flex items-center justify-center ${
                        item.highlight ? 'bg-red-600' : 'bg-gray-800'
                      } group-hover:scale-110 transition-transform`}>
                        <item.Icon className="w-6 h-6 md:w-8 md:h-8 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                          <h4 className="text-xl md:text-2xl font-bold text-white mb-2 md:mb-0">{item.title}</h4>
                          <span className="inline-block px-4 py-1 text-sm font-semibold rounded-full bg-red-600/20 border border-red-600 text-red-500">
                            {item.year}
                          </span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements Grid */}
          <div className={`mb-20 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Achievements</h3>
              <p className="text-gray-400">Milestones that define my journey</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center justify-between mb-4">
                    <achievement.Icon className="w-8 h-8" style={{ color: NETFLIX_COLORS.primary }} />
                  </div>
                  <div className="text-4xl font-bold mb-2 text-white group-hover:scale-105 transition-transform">{achievement.value}</div>
                  <p className="text-lg text-white font-semibold mb-2">{achievement.title}</p>
                  <p className="text-gray-400 text-sm leading-relaxed">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills Section */}
          <div className={`mb-20 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Skills & Expertise</h3>
              <p className="text-gray-400">A comprehensive blend of technical and strategic capabilities</p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillSet, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900 to-gray-800 p-6 rounded-xl border border-gray-700 hover:border-red-600 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg flex items-center justify-center" style={{ backgroundColor: NETFLIX_COLORS.primary }}>
                      <skillSet.Icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white">{skillSet.category}</h4>
                  </div>
                  <ul className="space-y-3">
                    {skillSet.items.map((skill, idx) => (
                      <li key={idx} className="flex items-center text-gray-300 group-hover:text-white transition-colors">
                        <Zap className="w-4 h-4 mr-3" style={{ color: NETFLIX_COLORS.primary }} />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Core Strengths */}
          <div className={`bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 p-8 md:p-12 rounded-xl border border-gray-700 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-10">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-3">Core Strengths</h3>
              <p className="text-gray-400">Values that drive my success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: NETFLIX_COLORS.primary }}>
                  <Dumbbell className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Resilience</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Overcoming adversity with determination</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: NETFLIX_COLORS.primary }}>
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Strategic Thinking</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Chess-trained analytical mindset</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: NETFLIX_COLORS.primary }}>
                  <Lightbulb className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Innovation</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Building impactful solutions</p>
              </div>
              <div className="text-center p-4 rounded-lg bg-gray-900/50 hover:bg-gray-900 transition-all group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-lg flex items-center justify-center transition-all duration-300 group-hover:scale-110" style={{ backgroundColor: NETFLIX_COLORS.primary }}>
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h4 className="text-lg font-bold text-white mb-2">Growth Mindset</h4>
                <p className="text-gray-400 text-sm leading-relaxed">Continuous learning and improvement</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
