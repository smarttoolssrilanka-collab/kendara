
import React, { useState } from 'react';
import type { FormData } from './types';
import { Language, ZodiacSign } from './types';
import { generateAstrologyReading } from './services/geminiService';
import Header from './components/Header';
import AstrologyForm from './components/AstrologyForm';
import ReadingDisplay from './components/ReadingDisplay';
import Loader from './components/Loader';
import Footer from './components/Footer';

function App() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    dob: '',
    birthplace: '',
    zodiacSign: ZodiacSign.ARIES,
    language: Language.ENGLISH,
  });
  const [reading, setReading] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setReading(null);

    try {
      const result = await generateAstrologyReading(formData);
      setReading(result);
    } catch (err) {
      setError('The stars are not aligned. Failed to generate your reading. Please try again later.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-slate-200 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-900/50 via-slate-900 to-slate-900">
       <div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'url("https://www.transparenttextures.com/patterns/stardust.png")'}}></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center">
          <div className="w-full max-w-4xl transition-all duration-500">
            <AstrologyForm
              formData={formData}
              setFormData={setFormData}
              onSubmit={handleSubmit}
              isLoading={isLoading}
            />

            {isLoading && <Loader />}

            {error && (
              <div className="mt-8 p-4 bg-red-900/50 border border-red-500 rounded-lg text-center text-red-300">
                <p className="font-bold text-lg">An Error Occurred</p>
                <p>{error}</p>
              </div>
            )}
            
            {reading && (
              <ReadingDisplay reading={reading} />
            )}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
