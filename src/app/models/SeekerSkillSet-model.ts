import { SeekerProfile } from './SeekerProfile-model'
import { JobPostSkillSet } from './JobPostSkillSet-model'

export class SeekerSkillSet {
    id: BigInteger
    seekerProfile: SeekerProfile
    skillLevel: Number
    skillSet: SkillSet
}