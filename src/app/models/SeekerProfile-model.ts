import { EducationDetails } from './education-details'
import { ExperienceDetail } from './experience-details'
import { UserAccount } from '../useraccount/useraccount.component'
import { SeekerSkillSet } from './SeekerSkillSet-model'

export class SeekerProfile {
    currency: String
    currentSalary: number
    educationDetails: Array<EducationDetails>
    experienceDetails: Array<ExperienceDetail>
    firstName: String
    isAnnuallyMonthly: String
    lastName: String
    seekerSkillSets: Array<SeekerSkillSet>
    userAccount: UserAccount
    userAccountId: BigInteger
}