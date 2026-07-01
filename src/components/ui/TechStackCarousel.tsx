import { techStack } from '@/data/portfolio'
import { TechStackIcon } from '@/components/ui/TechStackIcons'

function SkillCard({ skill }: { skill: string }) {
  return (
    <article
      role="listitem"
      className="tech-carousel-card flex shrink-0 flex-col items-center gap-4 rounded-2xl border border-nuclear-white/10 bg-nuclear-white/[0.04] px-7 py-7 md:gap-5 md:px-8 md:py-8"
    >
      <TechStackIcon name={skill} />
      <span className="whitespace-nowrap font-mono text-[11px] font-medium uppercase tracking-wider text-nuclear-white/80 md:text-xs">
        {skill}
      </span>
    </article>
  )
}

export function TechStackCarousel() {
  const items = [...techStack, ...techStack]

  return (
    <div className="tech-carousel relative mt-2 md:mt-4">
      <div className="mb-8 text-center md:mb-10">
        <h3 className="font-display text-3xl tracking-wide text-nuclear-white md:text-4xl">Tech Stack</h3>
        <div className="mx-auto mt-3 h-0.5 w-12 bg-nuclear-red" aria-hidden="true" />
      </div>

      <div className="tech-carousel-fade relative overflow-hidden py-4 md:py-6">
        <div
          className="tech-carousel-marquee flex w-max gap-8 md:gap-10"
          aria-label="Technologies"
          role="list"
        >
          {items.map((skill, i) => (
            <SkillCard key={`${skill}-${i}`} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  )
}
