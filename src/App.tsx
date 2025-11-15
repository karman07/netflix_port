import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from '@/pages/Landing';
import Developer from '@/pages/Developer';
import Personal from '@/pages/Personal';
import Sports from '@/pages/Sports';
import Others from '@/pages/Others';

function App() {
  return (
    <Router>
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
