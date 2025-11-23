// app/collaborate/page.tsx
import CollaborateForm from '@/components/collaborate-form'

export default function CollaboratePage() {
  return (
    <section className="min-h-screen bg-black text-white pb-16 sm:pb-24 pt-32 sm:pt-40">
      <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16 space-y-4 sm:space-y-6">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold">Work With Us</h1>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            We help legal professionals thrive in the age of AI and technological disruption through strategic career guidance,
            digital presence development, and creative content support.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {/* Career Strategy & Transitions */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:border-indigo-500/30 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="mb-4">
              <div className="w-10 h-10 bg-indigo-900/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-indigo-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6H20M9 12H20M9 18H20M5 6V6.01M5 12V12.01M5 18V18.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Career Strategy & Transitions</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>One-on-one career consultations</li>
              <li>Transition planning for changing fields</li>
              <li>Skills assessment and development plans</li>
              <li>Career positioning in emerging legal areas</li>
            </ul>
          </div>

          {/* Digital Presence Development */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:border-blue-500/30 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="mb-4">
              <div className="w-10 h-10 bg-blue-900/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-blue-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 18H12.01M7 21H17C19.2091 21 21 19.2091 21 17V7C21 4.79086 19.2091 3 17 3H7C4.79086 3 3 4.79086 3 7V17C3 19.2091 4.79086 21 7 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3V7M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <path d="M3 11H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                  <rect x="6" y="14" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Digital Presence Development</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>Professional website design and development</li>
              <li>Online brand strategy and execution</li>
              <li>Digital portfolio creation</li>
              <li>Social media and content strategy</li>
            </ul>
          </div>

          {/* Writing & Content Support */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:border-purple-500/30 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="mb-4">
              <div className="w-10 h-10 bg-purple-900/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-purple-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 18H16M10.0156 11.1797L12 7L13.9844 11.1797L18.5 11.9063L15.25 14.8438L16.0938 19.1875L12 17L7.90625 19.1875L8.75 14.8438L5.5 11.9063L10.0156 11.1797Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Writing & Content Support</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>Legal writing and editing services</li>
              <li>Thought leadership content development</li>
              <li>Blog and article creation</li>
              <li>Professional publications support</li>
            </ul>
          </div>

          {/* Community & Connections */}
          <div className="bg-zinc-900/50 border border-white/10 rounded-lg p-8 hover:border-emerald-500/30 hover:bg-zinc-900/80 transition-all duration-300">
            <div className="mb-4">
              <div className="w-10 h-10 bg-emerald-900/50 rounded-md flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-emerald-400" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 20H5C3.89543 20 3 19.1046 3 18V8C3 6.89543 3.89543 6 5 6H19C20.1046 6 21 6.89543 21 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 14L17 16.5M17 14L19 16.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C9 12.1046 8.10457 13 7 13C5.89543 13 5 12.1046 5 11C5 9.89543 5.89543 9 7 9C8.10457 9 9 9.89543 9 11Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M15 11C15 12.1046 14.1046 13 13 13C11.8954 13 11 12.1046 11 11C11 9.89543 11.8954 9 13 9C14.1046 9 15 9.89543 15 11Z" stroke="currentColor" strokeWidth="2"/>
                  <path d="M17 6L17 20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h2 className="text-2xl font-bold mb-2">Community & Connections</h2>
            </div>

            <ul className="space-y-3 text-gray-300">
              <li>Monthly virtual events and discussions</li>
              <li>Peer feedback and collaboration</li>
              <li>Networking with forward-thinking professionals</li>
              <li>Collaborative projects and opportunities</li>
            </ul>
          </div>
        </div>

        <div id="contact-form" className="mb-16">
          <h2 className="text-3xl font-serif font-bold mb-8 text-center">Begin Your Legal Future Strategy</h2>
          <CollaborateForm />
          <p className="text-sm text-gray-500 text-center mt-4">Due to our selective consultation process, response times may vary as we evaluate strategic alignment.</p>
        </div>
      </div>
    </section>
  )
}