import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Landing from '@/pages/Landing';
import Developer from '@/pages/Developer';
import Personal from '@/pages/Personal';
import Sports from '@/pages/Sports';
import Others from '@/pages/Others';
//
// Component to handle reporting the visitor path on route changes
function VisitTracker() {
  const location = useLocation();

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000'}/visit`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        path: location.pathname,
        referrer: document.referrer,
      }),
    }).catch((error) => console.error('Failed to report visit:', error));
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <VisitTracker />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/developer" element={<Developer />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/sports" element={<Sports />} />
        <Route path="/others" element={<Others />} />
      </Routes>
    </Router>
  );
}

export default App;
