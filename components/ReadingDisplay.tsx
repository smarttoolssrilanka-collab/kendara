
import React from 'react';

interface ReadingDisplayProps {
  reading: string;
}

const SectionIcon: React.FC<{ title: string }> = ({ title }) => {
    const iconMap: { [key: string]: JSX.Element } = {
        'personality': <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />,
        'strengths': <path strokeLinecap="round" strokeLinejoin="round" d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z" />,
        'love': <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />,
        'career': <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.07a2.25 2.25 0 0 1-2.25 2.25h-10.5a2.25 2.25 0 0 1-2.25-2.25v-4.07M4.5 12.35h15M4.5 12.35a2.25 2.25 0 0 1-2.25-2.25V6.75a2.25 2.25 0 0 1 2.25-2.25h15a2.25 2.25 0 0 1 2.25 2.25v3.35a2.25 2.25 0 0 1-2.25 2.25a2.25 2.25 0 0 1-2.25-2.25V6.75" />,
        'health': <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 0 0 6 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 0 1 6 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 0 1 6-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0 0 18 18a8.967 8.967 0 0 0-6-2.292m0 0A9.043 9.043 0 0 1 12 4.5c0-1.457.409-2.822 1.146-4.013" />,
        'future': <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />,
        'lucky': <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9a9 9 0 1 1 9 0Z" />
    };

    const key = title.toLowerCase().split(' ')[0].replace(/&/g, '');
    const icon = iconMap[key] || <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09Z" />;

    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 text-amber-300">{icon}</svg>;
}


const ReadingDisplay: React.FC<ReadingDisplayProps> = ({ reading }) => {
  const sections = reading.split(/\*\*(.*?)\*\*/).filter(Boolean);
  
  const formattedSections: { title: string; content: string }[] = [];
  for (let i = 0; i < sections.length; i += 2) {
    if (sections[i] && sections[i+1]) {
      formattedSections.push({
        title: sections[i].trim(),
        content: sections[i+1].trim()
      });
    }
  }

  return (
    <div className="mt-8 bg-slate-800/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl shadow-2xl border border-slate-700 animate-fade-in">
      <h2 className="text-3xl font-cinzel text-center text-amber-300 mb-6">Your Cosmic Reading</h2>
      <div className="space-y-6">
        {formattedSections.map(({ title, content }, index) => (
          <div key={index} className="p-4 bg-slate-900/40 rounded-lg border border-slate-700/50">
            <h3 className="flex items-center text-xl font-bold font-cinzel text-amber-300 mb-2">
                <SectionIcon title={title} />
                {title}
            </h3>
            <p className="text-slate-300 whitespace-pre-line leading-relaxed">
              {content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReadingDisplay;
