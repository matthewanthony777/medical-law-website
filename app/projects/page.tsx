import Projects from '@/components/projects'
import { getProjects } from '@/lib/projects'

export default async function ProjectsPage() {
  const projects = await getProjects()

  return (
    <section className='min-h-screen bg-black text-white pb-16 sm:pb-24 pt-32 sm:pt-40'>
      <div className='container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='mb-12 sm:mb-16'>
          <h1 className='title text-4xl sm:text-5xl lg:text-6xl mb-4'>Projects</h1>
          <p className='text-lg sm:text-xl text-gray-400 max-w-2xl'>
            Explore our innovative projects at the intersection of law, technology, and media.
          </p>
        </div>

        <Projects projects={projects} />
      </div>
    </section>
  )
}
