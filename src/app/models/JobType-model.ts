import { JobPost } from './job-post-model'

export class JobType{
id : BigInteger
jobPosts : Array<JobPost>
jobType : String
}