
import React, { useState, useEffect, createContext, useContext } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Publications from './pages/Publications';
import Conferences from './pages/Conferences';
import Projects from './pages/Projects';
import Gallery from './pages/Gallery';
import { INITIAL_DATA, PortfolioData } from './data';

interface PortfolioContextType {
  data: PortfolioData;
  setData: React.Dispatch<React.SetStateAction<PortfolioData>>;
  isEditMode: boolean;
  setEditMode: (val: boolean) => void;
}

export const PortfolioContext = createContext<PortfolioContextType | null>(null);

const App: React.FC = () => {
  const [data, setData] = useState<PortfolioData>(() => {
    const saved = localStorage.getItem('eunho_portfolio_data');
    return saved ? JSON.parse(saved) : INITIAL_DATA;
  });
  const [isEditMode, setEditMode] = useState(false);

  useEffect(() => {
    localStorage.setItem('eunho_portfolio_data', JSON.stringify(data));
  }, [data]);

  const exportData = () => {
    const dataStr = JSON.stringify(data, null, 2);
    const blob = new Blob([`export const INITIAL_DATA = ${dataStr};`], { type: 'text/javascript' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'updated_data.ts';
    link.click();
  };

  return (
    <PortfolioContext.Provider value={{ data, setData, isEditMode, setEditMode }}>
      <Router>
        <div className="min-h-screen flex flex-col bg-[#f8fafc]">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/publications" element={<Publications />} />
              <Route path="/conferences" element={<Conferences />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/gallery" element={<Gallery />} />
            </Routes>
          </main>
          
          {isEditMode && (
            <div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-2">
              <div className="bg-[#607099] text-white p-4 rounded-xl shadow-2xl border border-white/20 animate-bounce">
                <p className="text-xs font-bold mb-2">EDIT MODE ACTIVE</p>
                <div className="flex gap-2">
                  <button onClick={exportData} className="px-3 py-1 bg-white text-[#607099] text-[10px] font-bold rounded">DOWNLOAD DATA.TS</button>
                  <button onClick={() => setEditMode(false)} className="px-3 py-1 bg-red-400 text-white text-[10px] font-bold rounded">EXIT</button>
                </div>
              </div>
            </div>
          )}
          
          <Footer />
        </div>
        <style>{`
          @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}</style>
      </Router>
    </PortfolioContext.Provider>
  );
};

export default App;
