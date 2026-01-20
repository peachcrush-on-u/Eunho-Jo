
import React, { useContext } from 'react';
import { PortfolioContext } from '../App';
import { Publication } from '../data';

const Publications: React.FC = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { data, setData, isEditMode } = context;

  const updatePub = (id: string, field: keyof Publication, value: string) => {
    const updated = data.publications.map(p => p.id === id ? { ...p, [field]: value } : p);
    setData({ ...data, publications: updated });
  };

  const addPublication = () => {
    const newPub: Publication = {
      id: `p-${Date.now()}`,
      titleEn: "New Paper Title",
      titleKr: "새 논문 제목",
      journal: "Journal Name",
      year: "2025",
      descriptionEn: "Summary in English",
      descriptionKr: "한국어 요약"
    };
    setData({ ...data, publications: [newPub, ...data.publications] });
  };

  const removePublication = (id: string) => {
    if(confirm("이 항목을 삭제할까요?")) {
      setData({ ...data, publications: data.publications.filter(p => p.id !== id) });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Publications</h1>
          <p className="text-slate-500 italic">List of academic research and papers.</p>
        </div>
        {isEditMode && (
          <button onClick={addPublication} className="bg-[#607099] text-white px-4 py-2 rounded-lg text-xs font-bold hover:bg-[#4d5c80] transition-colors">+ ADD PUBLICATION</button>
        )}
      </div>

      <div className="space-y-12">
        {data.publications.map((pub) => (
          <div key={pub.id} className="group border-l-2 border-slate-100 pl-8 hover:border-[#607099] transition-all relative">
            <div className="absolute left-[-5px] top-0 w-2 h-2 rounded-full bg-slate-200 group-hover:bg-[#607099] transition-colors" />
            
            <div className="flex justify-between items-start mb-2">
              <div className="flex gap-2">
                {isEditMode ? (
                  <input className="text-xs font-bold text-slate-400 border-b w-16" value={pub.year} onChange={(e) => updatePub(pub.id, 'year', e.target.value)} />
                ) : (
                  <span className="text-xs font-bold text-slate-400">{pub.year}</span>
                )}
                <span className="text-xs text-slate-300">•</span>
                {isEditMode ? (
                  <input className="text-xs font-bold text-slate-400 border-b" value={pub.journal} onChange={(e) => updatePub(pub.id, 'journal', e.target.value)} />
                ) : (
                  <span className="text-xs font-bold text-slate-400">{pub.journal}</span>
                )}
              </div>
              {isEditMode && (
                <button onClick={() => removePublication(pub.id)} className="text-red-400 text-[10px] font-bold hover:underline">REMOVE</button>
              )}
            </div>
            
            <div className="mb-4">
              {isEditMode ? (
                <input className="text-xl font-bold text-slate-800 w-full border-b mb-1" value={pub.titleEn} onChange={(e) => updatePub(pub.id, 'titleEn', e.target.value)} />
              ) : (
                <h3 className="text-xl font-bold text-slate-800 group-hover:text-[#607099] transition-colors mb-1">{pub.titleEn}</h3>
              )}
              {isEditMode ? (
                <input className="text-slate-500 font-medium w-full border-b" value={pub.titleKr} onChange={(e) => updatePub(pub.id, 'titleKr', e.target.value)} />
              ) : (
                <p className="text-slate-500 font-medium">{pub.titleKr}</p>
              )}
            </div>
            
            <div className="bg-white p-4 rounded-lg border border-slate-50 shadow-sm space-y-2">
              {isEditMode ? (
                <textarea className="w-full text-slate-600 text-sm border p-1" value={pub.descriptionEn} onChange={(e) => updatePub(pub.id, 'descriptionEn', e.target.value)} />
              ) : (
                <p className="text-slate-600 text-sm leading-relaxed">{pub.descriptionEn}</p>
              )}
              {isEditMode ? (
                <textarea className="w-full text-slate-500 text-sm italic border p-1" value={pub.descriptionKr} onChange={(e) => updatePub(pub.id, 'descriptionKr', e.target.value)} />
              ) : (
                <p className="text-slate-500 text-sm italic leading-relaxed">{pub.descriptionKr}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Publications;
