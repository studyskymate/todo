import { JobPost } from './job-post-model'
import { SkillSet } from './SkillSet-model'

export class JobPostSkillSet {
    id: BigInteger
    jobPost: JobPost
    skillLevel: Number
    skillSet: SkillSet
}