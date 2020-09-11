import { SeekerProfile } from './SeekerProfile-model'
import { JobPostSkillSet } from './JobPostSkillSet-model'
import { SkillSet } from './SkillSet-model'

export class SeekerSkillSet {
    id: BigInteger
    seekerProfile: SeekerProfile
    skillLevel: Number
    skillSet: SkillSet
}