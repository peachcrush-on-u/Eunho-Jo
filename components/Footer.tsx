
import React, { useContext } from 'react';
import { PortfolioContext } from '../App';

const Footer: React.FC = () => {
  const context = useContext(PortfolioContext);
  
  const handleEditMode = () => {
    const password = prompt("관리자 비밀번호를 입력하세요:");
    // 기본 비밀번호는 'eunho-edit'으로 설정합니다. 필요시 아래 코드를 수정하세요.
    if (password === 'engeneunho') {
      context?.setEditMode(true);
    } else if (password !== null) {
      alert("비밀번호가 틀렸습니다.");
    }
  };

  return (
    <footer className="py-12 border-t border-slate-200 mt-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p 
          className="text-slate-400 text-sm cursor-help select-none"
          onDoubleClick={handleEditMode}
          title="Double click to enter admin mode"
        >
          © 2025 Copyright by Eunho Jo. All rights reserved.
        </p>
        <div className="flex gap-6">
          <a href={context?.data.profile.scholarLink} target="_blank" className="text-slate-400 hover:text-[#607099] text-sm transition-colors">Scholar</a>
          <a href={context?.data.profile.linkedinLink} target="_blank" className="text-slate-400 hover:text-[#607099] text-sm transition-colors">LinkedIn</a>
          <a href={`mailto:${context?.data.profile.email}`} className="text-slate-400 hover:text-[#607099] text-sm transition-colors">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
