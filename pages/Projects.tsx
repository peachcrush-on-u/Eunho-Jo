
import React, { useContext } from 'react';
import { PortfolioContext } from '../App';

const Projects: React.FC = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { data, setData, isEditMode } = context;

  const addProject = () => {
    const newProj = {
      id: `proj-${Date.now()}`,
      titleEn: "New Project Title",
      titleKr: "새 프로젝트 명칭",
      roleEn: "Researcher",
      roleKr: "연구원",
      duration: "2025 - 2026",
      descriptionEn: "Brief description of project goals.",
      descriptionKr: "프로젝트 목표 및 역할 설명."
    };
    setData({ ...data, projects: [newProj, ...data.projects] });
  };

  const removeProject = (id: string) => {
    setData({ ...data, projects: data.projects.filter(p => p.id !== id) });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Projects</h1>
          <p className="text-slate-500 italic">Research and industry collaborations.</p>
        </div>
        {isEditMode && (
          <button onClick={addProject} className="bg-[#607099] text-white px-4 py-2 rounded-lg text-xs font-bold">ADD NEW PROJECT</button>
        )}
      </div>

      <div className="space-y-8">
        {data.projects.map((proj) => (
          <div key={proj.id} className="bg-white rounded-2xl border border-slate-100 p-8 shadow-sm relative group overflow-hidden">
            {isEditMode && (
              <button onClick={() => removeProject(proj.id)} className="absolute top-4 right-4 text-red-400 text-[10px] font-bold z-10">REMOVE</button>
            )}
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-2xl font-bold text-slate-800">{proj.titleEn}</h3>
                <p className="text-lg text-slate-500 font-light">{proj.titleKr}</p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-slate-400 block uppercase tracking-widest">{proj.duration}</span>
                <span className="inline-block mt-2 px-3 py-1 bg-slate-100 text-[#607099] rounded text-[10px] font-bold uppercase tracking-widest">
                  Role: {proj.roleEn}
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-50">
              <div>
                <p className="text-slate-600 leading-relaxed text-sm">{proj.descriptionEn}</p>
              </div>
              <div>
                <p className="text-slate-500 italic leading-relaxed text-sm">
                  {proj.roleKr} • {proj.descriptionKr}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
