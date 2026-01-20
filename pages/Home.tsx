
import React, { useContext } from 'react';
import { WorldClock } from '../components/Clock';
import { PortfolioContext } from '../App';

const Home: React.FC = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { data } = context;

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-6 py-12 text-center animate-fadeIn">
      <h1 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 tracking-tight">
        Welcome to Eunho Jo's Portfolio
      </h1>
      <p className="text-slate-500 text-lg md:text-xl max-w-2xl leading-relaxed mb-4">
        {data.profile.bioEn}
      </p>
      <p className="text-slate-400 text-base md:text-lg max-w-2xl leading-relaxed italic mb-12">
        {data.profile.bioKr}
      </p>
      
      <div className="w-full mt-10">
        <h2 className="text-sm font-semibold text-slate-400 uppercase tracking-[0.2em] mb-6">
          Academic Journey Clock
        </h2>
        <WorldClock />
      </div>

      <div className="mt-20">
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/4/4b/Yonsei_University_logo.png" 
          alt="Yonsei University" 
          className="h-20 w-auto object-contain mx-auto grayscale opacity-50 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
        />
        <p className="text-[10px] text-slate-400 mt-4 uppercase tracking-[0.3em] font-bold">Yonsei University</p>
      </div>
    </div>
  );
};

export default Home;
