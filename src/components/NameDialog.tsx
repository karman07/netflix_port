import { useState } from 'react';
import { NETFLIX_COLORS } from '@/constants/colors';
import { Loader2, X, ChevronDown, ChevronUp } from 'lucide-react';

interface NameDialogProps {
  onSubmit: (name: string) => void;
}

export default function NameDialog({ onSubmit }: NameDialogProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const [isOpen, setIsOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [showOptional, setShowOptional] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim()) {
      setError('Please enter your name');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000';
      const response = await fetch(`${apiBaseUrl}/mail/send`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim() || undefined,
          phone: formData.phone.trim() || undefined,
          company: formData.company.trim() || undefined,
          message: formData.message.trim() || 'New visitor on portfolio',
          subject: 'New Portfolio Visitor'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send information');
      }

      onSubmit(formData.name.trim());
      setIsOpen(false);
    } catch (err) {
      setError('Failed to submit. Please try again.');
      console.error('API Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
    setError('');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 max-w-md w-full shadow-2xl animate-in fade-in zoom-in duration-300 relative">
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full bg-gray-800 hover:bg-gray-700 transition-colors text-gray-400 hover:text-white"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>
        
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">Welcome! 👋</h2>
          <p className="text-gray-400">May I know your name?</p>
          <p className="text-gray-500 text-sm mt-2">Feel free to share more if you'd like</p>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
              Your Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
              autoFocus
              required
            />
          </div>

          {/* Optional Details Dropdown */}
          <div className="mb-6">
            <button
              type="button"
              onClick={() => setShowOptional(!showOptional)}
              className="w-full flex items-center justify-between px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-800 transition-colors"
            >
              <span className="text-sm font-medium">Share more details (optional)</span>
              {showOptional ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
            </button>
            
            {showOptional && (
              <div className="mt-4 space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1234567890"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your company name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your interest..."
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-red-600 transition-colors resize-none"
                  />
                </div>
              </div>
            )}
          </div>

          {error && (
            <div className="mb-4 p-3 bg-red-900/20 border border-red-600 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}
          
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            style={{ backgroundColor: NETFLIX_COLORS.primary }}
          >
            {isLoading ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                <span>Submitting...</span>
              </>
            ) : (
              <span>Continue</span>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
