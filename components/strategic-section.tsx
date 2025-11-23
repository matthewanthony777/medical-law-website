import { JSX } from 'react'

interface StrategicSectionProps {
  icon: 'brain' | 'shield' | 'eye'
  title: string
  description: string
  bullets: string[]
}

export default function StrategicSection({ 
  icon, 
  title, 
  description, 
  bullets 
}: StrategicSectionProps) {
  return (
    <div className="relative p-8 rounded-lg border border-white/10 bg-black hover:border-white/20 transition-all duration-300 group overflow-hidden">
      {/* Animated gradient background on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          icon === 'brain' ? 'from-purple-600/40' : 
          icon === 'shield' ? 'from-blue-600/40' : 
          'from-emerald-600/40'
        } to-transparent blur-xl`}></div>
      </div>
      
      <div className="flex flex-col h-full relative z-10">
        {/* Enhanced icon section */}
        <div className="mb-6 relative">
          <div className={`absolute inset-0 rounded-full ${
            icon === 'brain' ? 'bg-purple-600' : 
            icon === 'shield' ? 'bg-blue-600' : 
            'bg-emerald-600'
          } opacity-10 blur-md group-hover:opacity-20 transition-all duration-300`}></div>
          
          <div className="w-16 h-16 rounded-full bg-zinc-800 flex items-center justify-center relative z-10 group-hover:bg-zinc-800/80 transition-all duration-300">
            {icon === 'brain' && (
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.5 14C14.0712 14 12.9 12.8288 12.9 11.4V10.6C12.9 9.17123 14.0712 8 15.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 14C9.93 14 11.1 12.83 11.1 11.4V10.6C11.1 9.17 9.93 8 8.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 8C8.5 5.8 10.3 4 12.5 4H13.5C15.7 4 17.5 5.8 17.5 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5 8V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 8V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.53 14H19.4C19.74 14 20 14.265 20 14.6V16.4C20 16.735 19.74 17 19.4 17H17.53C17.358 17 17.2 16.916 17.09 16.77L16 15.5V15L17.09 13.766C17.2 13.62 17.358 13.536 17.53 13.536V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M6.47 14H4.6C4.26 14 4 14.265 4 14.6V16.4C4 16.735 4.26 17 4.6 17H6.47C6.642 17 6.8 16.916 6.91 16.77L8 15.5V15L6.91 13.766C6.8 13.62 6.642 13.536 6.47 13.536V14Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13 19V20.4C13 20.737 12.737 21 12.4 21H11.6C11.263 21 11 20.737 11 20.4V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5 17H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 17H7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14V19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M15.5 12.5V14V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8.5 12.5V14V17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            
            {icon === 'shield' && (
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9998 3C10.9591 3.00078 9.9282 3.18746 8.9598 3.549C7.9914 3.91053 7.1015 4.43965 6.3398 5.1L5.9998 5.4C5.9998 9.756 7.6198 15.5 11.9998 19.8C16.3798 15.5 17.9998 9.756 17.9998 5.4L17.6598 5.09C16.8981 4.43965 16.0082 3.91053 15.0398 3.549C14.0714 3.18746 13.0405 3.00078 11.9998 3Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M9.5 11L11 12.5L14.5 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
            
            {icon === 'eye' && (
              <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3 12C3 12 6.2738 7 12 7C17.7262 7 21 12 21 12C21 12 17.7262 17 12 17C6.2738 17 3 12 3 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 14.5C13.3807 14.5 14.5 13.3807 14.5 12C14.5 10.6193 13.3807 9.5 12 9.5C10.6193 9.5 9.5 10.6193 9.5 12C9.5 13.3807 10.6193 14.5 12 14.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            )}
          </div>
        </div>
        
        {/* Title with trademark */}
        <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform duration-300">
          {title}
        </h3>
        
        {/* Description */}
        <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors duration-300">
          {description}
        </p>
        
        {/* Bullets with enhanced styling */}
        <ul className="space-y-4 mt-auto">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start group/item">
              <svg 
                className="w-5 h-5 text-gray-400 mr-2 mt-0.5 group-hover/item:text-white transition-colors duration-300" 
                viewBox="0 0 20 20" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" 
                  fill="currentColor"
                />
              </svg>
              <span className="text-sm text-gray-300 group-hover/item:text-gray-200 transition-colors duration-300">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}