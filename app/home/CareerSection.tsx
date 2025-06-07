import SectionTitle from "@/components/sectionTitle";
import { Spotlight } from "@/components/ui/spotlight";
import { WORK_EXPERIENCE } from "../data";
import Link from "next/link";
import { workExperience } from "@/data/workData";

export default function CareerSection() {
  const isComingSoon = workExperience.length === 0;
  return (
    <section>
      <SectionTitle title="Career Journey" comingSoon={isComingSoon} />
      <div className="flex flex-col space-y-2">
        {workExperience.map((job) => (
          <Link
            className="relative overflow-hidden rounded-2xl bg-zinc-300/30 p-[1px] dark:bg-zinc-600/30"
            href={`/career/${job.id}`}
            key={job.id}
          >
            <Spotlight
              className="from-zinc-900 via-zinc-800 to-zinc-700 blur-2xl dark:from-zinc-100 dark:via-zinc-200 dark:to-zinc-50"
              size={64}
            />
            <div className="relative h-full w-full rounded-[15px] bg-white p-4 dark:bg-zinc-950">
              <div className="relative flex w-full flex-row justify-between">
                <div>
                  <h4 className="font-normal dark:text-white md:text-lg">
                    {job.title}
                  </h4>
                  <p className="text-zinc-500 dark:text-zinc-400 text-sm md:text-base">
                    {job.company} | {job.location}
                  </p>
                </div>
                <p className="text-zinc-600 dark:text-zinc-400">
                  <span className="md:hidden">
                    {job.end ? job.start.slice(-4) : 'Present'}
                  </span>
                  <span className="hidden md:inline">
                    {job.start} - {job.end ?? 'Present'}
                  </span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}