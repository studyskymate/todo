import { JobPost } from './job-post-model'
import { UserAccount } from './UserAccount-model'

export class JobPostActivity {
    id: BigInteger
    applyDate: Date
    jobPost: JobPost
    userAccount: UserAccount
}