type SectionTitleProps = {
  title: string,
  comingSoon?: boolean,
}

function ComingSoon() {
  return (
    <span className="inline-flex items-center rounded-full bg-zinc-50 dark:bg-zinc-800 ms-3 px-4 py-1 text-zinc-600 dark:text-zinc-400 ring-1 ring-zinc-500/10 ring-inset text-xs md:text-sm">
      Coming Soon !!!
    </span>
  )
}

export default function SectionTitle({ title, comingSoon }: SectionTitleProps) {
  return (
    <div className="flex items-center mb-2 md:mb-5">
      <h3 className="font-medium dark:text-white text-lg md:text-xl">
        {title}
      </h3>
      {comingSoon && <ComingSoon />}
    </div>
  )
}
