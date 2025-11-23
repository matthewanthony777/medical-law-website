import Link from 'next/link'
import Image from 'next/image'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import NewsletterForm from '@/components/newsletter-form'
import StrategicSection from '@/components/strategic-section'
import AnimatedBackground from '@/components/animated-background'

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative pb-24 pt-40 overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              {/* Enhanced Title with Gradient */}
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-serif font-extrabold leading-[1.1] tracking-tight">
                <span className="bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(255,255,255,0.3)]">
                  Legal Futurism
                </span>
                <span className="block mt-3 text-5xl sm:text-6xl lg:text-7xl font-bold text-white/95">
                  Where Law, AI, Media and Creative Vision Converge
                </span>
              </h1>

              {/* Visual Separator */}
              <div className="w-24 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>

              {/* Enhanced Subtitle */}
              <p className="text-xl sm:text-2xl text-gray-300 max-w-2xl leading-relaxed font-light tracking-wide">
                Pioneering where visionary legal minds harness AI & Media to creatively reshape the profession. We reveal hidden opportunities invisible to the mainstream—positioning you to dominate emerging fields before others recognise they exist.
              </p>

              {/* Enhanced CTA Buttons */}
              <div className="mt-12 flex flex-col sm:flex-row gap-5">
                <Link
                  href="/future-insights"
                  className="group relative inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-blue-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/70 hover:scale-105 active:scale-95"
                >
                  <span className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></span>
                  <span className="relative flex items-center">
                    Explore Our Insights
                    <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
                <Link
                  href="#newsletter"
                  className="group inline-flex items-center justify-center rounded-lg border-2 border-white/30 bg-white/5 backdrop-blur-sm px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:border-white/60 hover:bg-white/10 hover:scale-105 active:scale-95"
                >
                  <span className="flex items-center">
                    Newsletter
                    <span className="ml-2 transition-transform duration-300 group-hover:scale-110">✉</span>
                  </span>
                </Link>
              </div>
              
              {/* Enhanced Social Media Icons */}
              <div className="pt-4 flex space-x-4">
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-red-600/20 hover:border-red-500/50 transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" />
                  </svg>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-gradient-to-br hover:from-purple-600/20 hover:to-pink-600/20 hover:border-pink-500/50 transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
                <a
                  href="https://tiktok.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-3 rounded-full bg-white/5 border border-white/20 backdrop-blur-sm hover:bg-cyan-600/20 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110"
                >
                  <span className="sr-only">TikTok</span>
                  <svg className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Enhanced Hero Video Section */}
            <div className="relative hidden lg:block">
              <div className="relative w-full h-[600px] group">
                {/* Glow effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-2xl opacity-30 group-hover:opacity-50 blur-xl transition-opacity duration-500"></div>

                {/* Video container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl ring-2 ring-white/10 shadow-2xl">
                  <video
                    src="/videos/future-insights/tenet-edit.MP4"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategic Solutions Section */}
      <section className="py-24 bg-black">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <StrategicSection 
              icon="brain"
              title="Innovation Mastery™"
              description="Transform your expertise into unmatched market advantage"
              bullets={[
                "Develop practical skills for AI and automation tools",
                "Develop unique methodologies that create competitive immunity",
                "Position yourself at high-value intersection points others overlook",
                "Access exclusive insights on innovation patterns before they become obvious"
              ]}
            />
            
            <StrategicSection 
              icon="shield"
              title="Future-Proof Career Architecture™"
              description="Build a resilient career that thrives in the chaotic revolution of AI"
              bullets={[
                "Design career paths immune to market and technological disruption",
                "Develop essential skills & capabilities before they become mandatory",
                "Position yourself as an innovation leader in your field",
                "Build your reputation as an industry leader"
              ]}
            />
            
            <StrategicSection 
              icon="eye"
              title="Media Intelligence™"
              description="Gain unique insights through media and cultural analysis"
              bullets={[
                "Decode future trends through legal, technology, media, film, and literature analysis",
                "Apply narrative-derived strategies to real-world professional challenges",
                "Connect theoretical concepts with practical applications",
                "Gain perspectives that differentiate you from peers"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section id="newsletter" className="py-24 bg-black">
        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <NewsletterForm />
        </div>
      </section>
    </div>
  )
}