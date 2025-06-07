import { TechStack } from "./tach"

export type WorkExperience = {
  id: string
  title: string
  company: string
  location: string
  start: string
  end: string|null
  type: string
}

export type WorkExperienceDetails = {
  id: string
  work_experience: WorkExperience
  reflection: string
  responsibilities: Array<string>
  key_achievements: Array<string>|null
  tach_stack: TechStack[]
}