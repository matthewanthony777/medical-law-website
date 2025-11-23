'use client'

import { useState } from 'react'

interface CapabilityProps {
  title: string
  description: string
  icon: string
  index: number
}

export function CoreCapability({ 
  title, 
  description,
  icon,
  index
}: CapabilityProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  // Determine accent color based on the capability type
  const getAccentColor = () => {
    if (title.includes('Legal Career')) return 'from-indigo-900/50';
    if (title.includes('Strategic Career')) return 'from-blue-900/50';
    if (title.includes('Technical Translation')) return 'from-purple-900/50';
    if (title.includes('Media Intelligence')) return 'from-emerald-900/50';
    return 'from-indigo-900/50'; // Default color
  };

  const getIconColor = () => {
    if (title.includes('Legal Career')) return 'bg-indigo-900/50 text-indigo-400 group-hover:bg-indigo-800/60 group-hover:text-indigo-300';
    if (title.includes('Strategic Career')) return 'bg-blue-900/50 text-blue-400 group-hover:bg-blue-800/60 group-hover:text-blue-300';
    if (title.includes('Technical Translation')) return 'bg-purple-900/50 text-purple-400 group-hover:bg-purple-800/60 group-hover:text-purple-300';
    if (title.includes('Media Intelligence')) return 'bg-emerald-900/50 text-emerald-400 group-hover:bg-emerald-800/60 group-hover:text-emerald-300';
    return 'bg-indigo-900/50 text-indigo-400 group-hover:bg-indigo-800/60 group-hover:text-indigo-300';
  };

  return (
    <div 
      className={`bg-zinc-900/50 border border-white/10 rounded-lg transition-all duration-300 p-6 mb-6 group cursor-pointer ${isExpanded ? 'border-white/30' : ''}`}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      {/* Background effects */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-700 rounded-lg">
        <div className={`absolute inset-0 bg-gradient-to-r ${getAccentColor()} to-transparent blur-xl rounded-lg`}></div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Icon */}
          <div className={`w-10 h-10 rounded-md flex items-center justify-center flex-shrink-0 transition-colors duration-300 ${getIconColor()}`}>
            <div dangerouslySetInnerHTML={{ __html: icon }} className="w-6 h-6 transition-colors duration-300" />
          </div>
          
          {/* Title */}
          <h3 className="text-2xl font-bold">{title}</h3>
        </div>
        
        {/* Toggle indicator */}
        <div className={`text-gray-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}>
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
      
      {/* Content - only visible when expanded */}
      <div className={`mt-4 overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <p className="text-gray-300">{description}</p>
        
        <div className="mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center">
            <span className="text-sm font-medium text-gray-400">Trials & Tribulations Exclusive Methodology</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function EnhancedCoreCapabilities() {
  const capabilities = [
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Legal Career Architecture™",
      description: "Our proprietary system identifies emerging patterns in the professional landscape before they become obvious. We've guided professionals to secure positions commanding 40-70% higher compensation by positioning them at critical inflection points others fail to recognize. Unlike conventional career consultants who react to visible market shifts, our system deploys predictive algorithms that identify nascent industry patterns 12-18 months before mainstream recognition. We decode hidden professional inflection points using proprietary pattern recognition methodologies developed at the intersection of legal innovation, technological disruption, and media evolution."
    },
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M14 8V6C14 5.46957 13.7893 4.96086 13.4142 4.58579C13.0391 4.21071 12.5304 4 12 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V18C2 18.5304 2.21071 19.0391 2.58579 19.4142C2.96086 19.7893 3.46957 20 4 20H12C12.5304 20 13.0391 19.7893 13.4142 19.4142C13.7893 19.0391 14 18.5304 14 18V16M8 12H22M22 12L18 8M22 12L18 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Strategic Career Transitions",
      description: "We've developed exclusive frameworks for both entering and exiting the legal profession. The transition points we've identified enable professionals to leverage their existing expertise in ways their peers can't imagine—preserving years of investment while escaping the constraints most believe are inescapable. Our frameworks reveal hidden pathways that transform your existing expertise into powerful leverage points. Where traditional advisors suggest conventional lateral moves, we architect non-linear career trajectories that capitalize on market disequilibrium and information asymmetries."
    },
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 9L12 5L16 9M16 15L12 19L8 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Technical Translation Mastery",
      description: "Unlike conventional trainings that leave professionals with theoretical knowledge, our approach bridges the critical implementation gap. Our clients develop the rare ability to apply technological understanding where others struggle with basic concepts. The greatest professional vulnerability in today's landscape is the implementation gap—the chasm between theoretical understanding and practical application that renders most training essentially worthless. Our technical translation system creates applied mastery through multi-modal learning processes that neurologically encode both conceptual frameworks and implementation pathways simultaneously."
    },
    {
      icon: `<svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M7 4V20M17 4V20M3 8H7M17 8H21M3 12H21M3 16H7M17 16H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>`,
      title: "Media Intelligence Framework",
      description: "Our elite analysis of entertainment, media and cultural movements provides early signals that translate into career leverage. This intelligence creates unprecedented positioning for those who understand how to capitalize on it before market awareness develops. Media narratives don't merely reflect reality—they create it. Our intelligence framework decodes these narrative structures to extract early signals of shifting professional landscapes 6-18 months before they manifest in organizational contexts. We analyze entertainment, media discourse, and cultural phenomena through proprietary semiotic frameworks that identify emergent patterns in collective consciousness."
    }
  ];

  return (
    <div className="border-t border-white/10 pt-16 mb-20">
      <h2 className="text-3xl font-serif font-bold mb-12 relative inline-block">
        Core Capabilities:
        <div className="absolute -bottom-2 left-0 right-0 h-0.5 bg-gradient-to-r from-indigo-600 to-transparent"></div>
      </h2>

      <div className="space-y-4">
        {capabilities.map((capability, index) => (
          <CoreCapability 
            key={index}
            icon={capability.icon}
            title={capability.title}
            description={capability.description}
            index={index}
          />
        ))}
      </div>
    </div>
  )
}