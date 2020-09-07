import { UserAccount } from './UserAccount-model'
import { Company } from './company-model'
import { JobLocation } from './job-location-model'
import { JobPostActivity } from './JobPostActivity-model'
import { JobPostSkillSet } from './JobPostSkillSet-model'
import { JobType } from './JobType-model'

export class JobPost {
    id: BigInteger
    userAccount: UserAccount
    company: Company
    createdDate: Date
    isActive: String
    isCompanyNameHidden: String
    jobDescription: String
    jobLocation: JobLocation
    jobPostActivities: Array<JobPostActivity>
    jobPostSkillSets: Array<JobPostSkillSet>
    jobType: JobType

}