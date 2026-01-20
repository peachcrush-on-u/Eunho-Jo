
import React, { useContext } from 'react';
import { PortfolioContext } from '../App';

const Conferences: React.FC = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { data, setData, isEditMode } = context;

  const addConference = () => {
    const newConf = {
      id: `c-${Date.now()}`,
      nameEn: "New Conference Name",
      nameKr: "새 학술대회 명칭",
      location: "City, Country",
      date: "2025.XX",
      descriptionEn: "Details about participation or presentation.",
      descriptionKr: "참여 및 발표 내용 상세."
    };
    setData({ ...data, conferences: [newConf, ...data.conferences] });
  };

  const removeConference = (id: string) => {
    setData({ ...data, conferences: data.conferences.filter(c => c.id !== id) });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Conferences</h1>
          <p className="text-slate-500 italic">Academic presentations and symposia.</p>
        </div>
        {isEditMode && (
          <button onClick={addConference} className="bg-[#607099] text-white px-4 py-2 rounded-lg text-xs font-bold">ADD NEW CONF</button>
        )}
      </div>

      <div className="space-y-12">
        {data.conferences.map((conf) => (
          <div key={conf.id} className="group border-l-2 border-slate-100 pl-8 hover:border-[#607099] transition-all relative">
            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#607099] transition-colors" />
            
            <div className="flex justify-between items-start mb-2">
              <span className="text-xs font-bold text-slate-400">{conf.date} • {conf.location}</span>
              {isEditMode && (
                <button onClick={() => removeConference(conf.id)} className="text-red-400 text-[10px] font-bold">REMOVE</button>
              )}
            </div>
            
            <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#607099] transition-colors mb-1">{conf.nameEn}</h3>
            <p className="text-slate-500 font-medium mb-4">{conf.nameKr}</p>
            
            <div className="bg-white p-4 rounded-lg border border-slate-50 shadow-sm">
              <p className="text-slate-600 text-sm mb-2 leading-relaxed">{conf.descriptionEn}</p>
              <p className="text-slate-500 text-sm italic leading-relaxed">{conf.descriptionKr}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Conferences;
