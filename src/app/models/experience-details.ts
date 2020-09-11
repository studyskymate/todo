import { SeekerProfile } from './SeekerProfile-model'

export class ExperienceDetail {
    id: BigInteger
    description: String
    companyName: String
    isCurrentJob: String
    jobLocationCity: String
    jobLocationCountry: String
    jobLocationState: String
    jobTitle: String
    seekerProfile: SeekerProfile
}