export default function Career() {
  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <h1 className="text-3xl font-bold">Career</h1>
      <p className="text-lg text-gray-500 dark:text-gray-400">
        My work experience and projects.
      </p>
      <div className="mt-8 flex flex-col gap-4">
        {/* Add your work experience items here */}
        {/* Example: */}
        {/* {WORK_EXPERIENCE.map((work) => ( */}
        {/*   <WorkExperienceItem key={work.id} work={work} /> */}
        {/* ))} */}
      </div>
    </div>
  )
}