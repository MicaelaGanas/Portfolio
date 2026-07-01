import { SectionHeader } from '@/components/ui/SectionHeader'
import { ProjectCard } from '@/components/ui/ProjectCard'
import { courseProjects, featuredProjects } from '@/data/portfolio'
import { courseVariants, featuredVariants } from '@/data/projectVariants'

export function ProjectsSection() {
  return (
    <section id="projects" className="section-wrap">
      <SectionHeader
        tag="Portfolio"
        title="Featured Projects"
        subtitle="A selection of work I've built and shipped."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {featuredProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="featured"
            index={i}
            graphic={featuredVariants[i]?.graphic}
            bg={featuredVariants[i]?.bg}
          />
        ))}
      </div>
    </section>
  )
}

export function WorksSection() {
  return (
    <section id="works" className="section-wrap">
      <SectionHeader
        tag="Showcase"
        title="Course Projects"
        subtitle="Academic and personal projects from recent semesters."
      />
      <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {courseProjects.map((project, i) => (
          <ProjectCard
            key={project.id}
            project={project}
            variant="course"
            index={i}
            graphic={courseVariants[i]?.graphic}
            bg={courseVariants[i]?.bg}
          />
        ))}
      </div>
    </section>
  )
}
