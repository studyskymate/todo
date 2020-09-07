import { EducationDetails } from './education-details'
import { ExperienceDetail } from './experience-details'
import { UserAccount } from '../useraccount/useraccount.component'

export class SeekerProfile {
    currency: String
    currentSalary: number
    educationDetails: List<EducationDetails>
    experienceDetails: List<ExperienceDetail>
    firstName: String
    isAnnuallyMonthly: String
    lastName: String
    seekerSkillSets: List<SeekerSkillSet>
    userAccount: UserAccount
    userAccountId: BigInteger
}