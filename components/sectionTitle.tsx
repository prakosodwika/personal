type SectionTitleProps = {
  title: string
  comingSoon?: boolean
}

function ComingSoon() {
  return (
    <span className="ms-3 inline-flex items-center rounded-full bg-zinc-50 px-4 py-1 text-xs text-zinc-600 ring-1 ring-zinc-500/10 ring-inset md:text-sm dark:bg-zinc-800 dark:text-zinc-400">
      Coming Soon !!!
    </span>
  )
}

export default function SectionTitle({ title, comingSoon }: SectionTitleProps) {
  return (
    <div className="mb-2 flex items-center md:mb-5">
      <h3 className="text-lg font-medium md:text-xl dark:text-white">
        {title}
      </h3>
      {comingSoon && <ComingSoon />}
    </div>
  )
}
