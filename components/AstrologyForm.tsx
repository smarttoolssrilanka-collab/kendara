
import React from 'react';
import type { FormData } from '../types';
import { ZODIAC_SIGNS, LANGUAGES } from '../constants';

interface AstrologyFormProps {
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isLoading: boolean;
}

const inputBaseClasses = "w-full px-4 py-3 bg-slate-800/60 border border-slate-600 rounded-lg focus:ring-2 focus:ring-amber-400 focus:border-amber-400 outline-none transition duration-300 placeholder-slate-400 text-slate-200";
const labelBaseClasses = "block mb-2 text-sm font-bold text-amber-200 tracking-wider";

const AstrologyForm: React.FC<AstrologyFormProps> = ({ formData, setFormData, onSubmit, isLoading }) => {
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="bg-slate-800/30 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700">
      <h2 className="text-2xl font-cinzel text-center text-amber-300 mb-6">Enter Your Celestial Details</h2>
      <form onSubmit={onSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="name" className={labelBaseClasses}>Your Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g., Elara"
              required
              className={inputBaseClasses}
            />
          </div>
          <div>
            <label htmlFor="dob" className={labelBaseClasses}>Date of Birth</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
              required
              className={`${inputBaseClasses} [color-scheme:dark]`}
            />
          </div>
        </div>
        
        <div>
          <label htmlFor="birthplace" className={labelBaseClasses}>Birthplace</label>
          <input
            type="text"
            id="birthplace"
            name="birthplace"
            value={formData.birthplace}
            onChange={handleChange}
            placeholder="e.g., Colombo, Sri Lanka"
            required
            className={inputBaseClasses}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="zodiacSign" className={labelBaseClasses}>Zodiac Sign</label>
            <select
              id="zodiacSign"
              name="zodiacSign"
              value={formData.zodiacSign}
              onChange={handleChange}
              required
              className={inputBaseClasses}
            >
              {ZODIAC_SIGNS.map(sign => (
                <option key={sign} value={sign}>{sign}</option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="language" className={labelBaseClasses}>Language</label>
            <select
              id="language"
              name="language"
              value={formData.language}
              onChange={handleChange}
              required
              className={inputBaseClasses}
            >
              {LANGUAGES.map(lang => (
                <option key={lang} value={lang}>{lang}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="pt-4">
          <button
            type="submit"
            disabled={isLoading}
            className="w-full font-cinzel font-bold text-lg text-slate-900 bg-gradient-to-r from-amber-300 to-amber-500 hover:from-amber-400 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed rounded-lg px-6 py-4 transition-all duration-300 shadow-lg hover:shadow-amber-400/30 transform hover:scale-105"
          >
            {isLoading ? 'Consulting the Cosmos...' : 'Reveal My Fortune'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default AstrologyForm;
