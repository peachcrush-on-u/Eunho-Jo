
import React, { useContext } from 'react';
import { PortfolioContext } from '../App';

const Gallery: React.FC = () => {
  const context = useContext(PortfolioContext);
  if (!context) return null;
  const { data, setData, isEditMode } = context;

  const addPhoto = () => {
    const url = prompt("Enter Image URL (from Unsplash or cloud):", `https://picsum.photos/800/800?seed=${Date.now()}`);
    if (url) {
      const newImg = { id: `g-${Date.now()}`, url };
      setData({ ...data, gallery: [...data.gallery, newImg] });
    }
  };

  const removePhoto = (id: string) => {
    if (confirm("Delete this photo?")) {
      setData({ ...data, gallery: data.gallery.filter(g => g.id !== id) });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-fadeIn">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Gallery</h1>
          <p className="text-slate-500 italic">Moments captured during my academic journey.</p>
        </div>
        <button 
          onClick={addPhoto}
          className="px-4 py-2 bg-[#607099] text-white text-xs font-bold rounded-lg hover:bg-[#4d5c80] transition-colors flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
          </svg>
          Add New Photo
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2 sm:gap-4">
        {data.gallery.map((item) => (
          <div key={item.id} className="aspect-square overflow-hidden rounded-md bg-slate-200 group relative border border-slate-100">
            <img 
              src={item.url} 
              alt="Gallery" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            {/* Tool Overlays */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
              <button 
                onClick={() => removePhoto(item.id)}
                className="p-2 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
                title="Delete"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
              </button>
              <button 
                onClick={() => window.open(item.url, '_blank')}
                className="p-2 bg-white text-slate-800 rounded-full hover:bg-slate-100 transition-colors"
                title="View"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
