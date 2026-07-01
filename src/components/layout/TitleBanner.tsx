const MARQUEE_TEXT = 'FULL STACK · REACT · TYPESCRIPT · ACCESSIBLE · ANIMATED · '

export function TitleBanner() {
  return (
    <div className="relative overflow-hidden border-y-2 border-nuclear-black bg-nuclear-red py-4 md:py-5">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        aria-hidden="true"
        style={{
          backgroundImage: `repeating-linear-gradient(90deg, #000 0px, #000 1px, transparent 1px, transparent 24px)`,
        }}
      />
      <div className="title-banner-track relative flex w-max whitespace-nowrap">
        <span className="mx-10 font-display text-3xl tracking-[0.25em] text-nuclear-black md:text-4xl">
          {MARQUEE_TEXT}
        </span>
        <span className="mx-10 font-display text-3xl tracking-[0.25em] text-nuclear-black md:text-4xl" aria-hidden="true">
          {MARQUEE_TEXT}
        </span>
      </div>
    </div>
  )
}
