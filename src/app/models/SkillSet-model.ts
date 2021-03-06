import { SeekerProfile } from './SeekerProfile-model'
import { JobPostSkillSet } from './JobPostSkillSet-model'
import { SeekerSkillSet } from './SeekerSkillSet-model'

export class SkillSet {
    id : BigInteger
    jobPostSkillSets : Array<JobPostSkillSet>
    seekerSkillSets : Array<SeekerSkillSet>
    skillSetName : String
}