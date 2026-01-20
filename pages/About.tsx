
import React, { useContext } from 'react';
import { PortfolioContext } from '../App';

const About: React.FC = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { data, isEditMode, setData } = context;

  const updateProfile = (field: string, value: string) => {
    setData({ ...data, profile: { ...data.profile, [field]: value } });
  };

  const updateKeywords = (value: string) => {
    const keywords = value.split(',').map(k => k.trim());
    setData({ ...data, profile: { ...data.profile, researchKeywords: keywords } });
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <div className="relative group">
            <img 
              src={data.profile.imageUrl} 
              alt={data.profile.nameEn} 
              className="w-full h-auto rounded-2xl shadow-xl grayscale hover:grayscale-0 transition-all duration-500 border border-slate-100"
            />
            {isEditMode && (
              <div className="mt-2 text-center">
                <input 
                  className="text-[10px] w-full border p-1 rounded font-mono" 
                  value={data.profile.imageUrl} 
                  placeholder="Image URL" 
                  onChange={(e) => updateProfile('imageUrl', e.target.value)}
                />
              </div>
            )}
          </div>
        </div>
        <div className="md:col-span-7 space-y-8">
          <div>
            {isEditMode ? (
              <div className="flex flex-col gap-2">
                <input className="text-4xl font-bold text-slate-800 border-b" value={data.profile.nameEn} onChange={(e) => updateProfile('nameEn', e.target.value)} />
                <input className="text-xl text-slate-500 border-b" value={data.profile.nameKr} onChange={(e) => updateProfile('nameKr', e.target.value)} />
              </div>
            ) : (
              <>
                <h1 className="text-4xl font-bold text-slate-800">{data.profile.nameEn}</h1>
                <h2 className="text-xl text-slate-500 mt-2 font-light">{data.profile.nameKr} • {data.profile.taglineEn}</h2>
              </>
            )}
          </div>
          
          <div className="space-y-4">
            {isEditMode ? (
              <div className="space-y-4">
                <label className="text-[10px] font-bold text-slate-400 uppercase">Bio (English)</label>
                <textarea className="w-full p-2 text-slate-600 border rounded h-32" value={data.profile.bioEn} onChange={(e) => updateProfile('bioEn', e.target.value)} />
                <label className="text-[10px] font-bold text-slate-400 uppercase">Bio (Korean)</label>
                <textarea className="w-full p-2 text-slate-500 italic border rounded h-32" value={data.profile.bioKr} onChange={(e) => updateProfile('bioKr', e.target.value)} />
              </div>
            ) : (
              <>
                <p className="text-slate-600 leading-relaxed text-lg">{data.profile.bioEn}</p>
                <p className="text-slate-500 leading-relaxed border-l-4 border-[#607099] pl-4 italic">{data.profile.bioKr}</p>
              </>
            )}
          </div>

          <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
            {isEditMode ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                <input className="text-xs p-2 border rounded" placeholder="Scholar Link" value={data.profile.scholarLink} onChange={(e) => updateProfile('scholarLink', e.target.value)} />
                <input className="text-xs p-2 border rounded" placeholder="LinkedIn Link" value={data.profile.linkedinLink} onChange={(e) => updateProfile('linkedinLink', e.target.value)} />
                <input className="text-xs p-2 border rounded" placeholder="Email" value={data.profile.email} onChange={(e) => updateProfile('email', e.target.value)} />
              </div>
            ) : (
              <>
                <a href={data.profile.scholarLink} target="_blank" className="px-6 py-2 bg-[#607099] text-white rounded-full hover:bg-[#4d5c80] transition-colors font-medium text-sm">Google Scholar</a>
                <a href={data.profile.linkedinLink} target="_blank" className="px-6 py-2 border border-[#607099] text-[#607099] rounded-full hover:bg-slate-50 transition-colors font-medium text-sm">LinkedIn</a>
              </>
            )}
          </div>

          {!isEditMode && (
            <div className="mt-8 p-6 bg-slate-50 rounded-xl border border-slate-100">
              <h3 className="text-sm font-bold text-slate-800 uppercase tracking-widest mb-4">Contact Me</h3>
              <a href={`mailto:${data.profile.email}`} className="text-[#607099] font-semibold hover:underline">{data.profile.email}</a>
            </div>
          )}

          <div className="mt-12 pt-8 border-t border-slate-100">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Research Keywords</h3>
            {isEditMode ? (
              <div>
                <input 
                  className="w-full p-2 border rounded font-mono text-sm mb-2" 
                  value={data.profile.researchKeywords.join(', ')} 
                  onChange={(e) => updateKeywords(e.target.value)}
                  placeholder="Comma separated keywords: #HCI, #AI, ..."
                />
                <p className="text-[10px] text-slate-400">쉼표(,)로 구분하여 입력하세요.</p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-3">
                {data.profile.researchKeywords.map((kw, idx) => (
                  <span key={idx} className="text-[#607099] font-mono text-sm font-medium px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg">
                    {kw}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
