import { JobPost } from './job-post-model'

export class JobLocation {
    id: BigInteger
    city: String
    country: String
    jobPosts: Array<JobPost>
    state: String
    streetAddress: String
    zip: String
}