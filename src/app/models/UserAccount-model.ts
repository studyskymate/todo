import { JobPostActivity } from './JobPostActivity-model'
import { JobPost } from './job-post-model'
import { SeekerProfile } from './SeekerProfile-model'
import { UserLog } from './UserLog-model'
import { UserType } from './UserType-model'

export class UserAccount {
    id: BigInteger
    contactNumber: String
    dateOfBirth: Date
    email: String
    emailNotificationActive: String
    firstname: String
    gender: String
    isActive: String
    jobPostActivities: Array<JobPostActivity>
    jobPosts: Array<JobPost>
    lasttname: String
    password: String
    registrationDate: Date
    seekerProfile: SeekerProfile
    smsNotificationActive: String
    userImage: any
    userLog: UserLog
    username: String
    userType: UserType
}