import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import EnhancedCoreCapabilities from '@/components/enhanced-core-capabilities'

export default function ExpertisePage() {
  return (
    <section className="min-h-screen bg-black text-white pb-16 sm:pb-24">
      {/* Hero Section */}
      <div className="relative h-[60vh] sm:h-[70vh] max-h-[600px] w-full overflow-hidden">
        <video
          src="/videos/future-insights/tenet-edit.MP4"
          autoPlay
          muted
          loop
          playsInline
          className="object-cover w-full h-full opacity-40"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-4 sm:mb-6">
            LEGAL FUTURISM EXPERTISE
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-gray-300 max-w-3xl">
            Creating the Future of Law Through AI, Creativity, and Strategic Foresight
          </p>
        </div>
      </div>

      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <p className="text-xl leading-relaxed mb-16 border-l-4 border-indigo-700 pl-6 py-2">
          At Trial & Tribulation, we operate where most never venture, the powerful intersection of legal expertise,
          technological disruption, and media evolution. While others remain trapped in conventional thinking, our
          community gain access to opportunities <span className="font-semibold text-indigo-400">invisible to the mainstream</span>.
        </p>

        {/* Enhanced Core Capabilities Section */}
        <EnhancedCoreCapabilities />
        
        <div className="border-t border-white/10 pt-16 mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12">What Sets Us Apart:</h2>
          
          <div className="bg-zinc-900/30 border border-white/10 rounded-lg p-8 mb-12 hover:border-white/20 transition-all duration-300">
            <p className="text-xl mb-8">
              We've identified psychological patterns in career development that reveal <span className="font-semibold text-indigo-400">opportunities and threats most professionals never see</span>. 
              Our methodologies combine techniques from fields most would never connect, creating results conventional approaches cannot achieve.
            </p>

            <div className="flex items-center bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="w-10 h-10 bg-indigo-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-300 italic">
                Our exclusive methodology identifies patterns 6-18 months before they become obvious to the mainstream.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/30 border border-white/10 rounded-lg p-8 hover:border-white/20 transition-all duration-300">
            <p className="text-xl mb-8">
              While others share general advice that leaves you competing with thousands, our customized approach positions you where
              <span className="font-semibold text-indigo-400"> competition is minimal and leverage is maximal</span>. Clients who implement our methods often report experiencing initial disbelief
              from colleagues who cannot comprehend how such transitions are possible.
            </p>
            
            <div className="flex items-center bg-black/50 p-4 rounded-lg border border-white/5">
              <div className="w-10 h-10 bg-indigo-900/30 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <p className="text-gray-300 italic">
                Our clients consistently secure positions commanding 40-70% higher compensation than their peers.
              </p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-16 mb-20">
          <h2 className="text-3xl font-serif font-bold mb-12">The Critical Choice:</h2>
          
          <div className="bg-gradient-to-br from-black to-zinc-900/80 border border-white/10 rounded-lg p-8 mb-12">
            <p className="text-xl mb-12">
              The legal landscape is dividing into two distinct groups: those who understand the hidden forces reshaping the profession, and
              <span className="font-semibold text-rose-400"> those who will be displaced by them</span>. Our expertise is exclusively available to professionals serious about positioning
              themselves in the former category.
            </p>

            <div className="bg-black/40 border border-white/5 rounded-lg p-8 text-center">
              <p className="text-lg mb-6">
                For confidential consultation on your specific situation, contact us through our secure collaboration channel. Due to
                our personalized approach, we maintain limited availability.
              </p>
              <Link href="/collaborate#contact-form">
                <Button className="bg-indigo-700 hover:bg-indigo-600 text-white px-8 py-6 text-lg rounded-md">
                  Request Consultation
                  <svg className="ml-2 w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.75 6.75L19.25 12L13.75 17.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M19 12H4.75" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}