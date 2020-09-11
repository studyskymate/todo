import { SeekerProfile } from './SeekerProfile-model'

export class EducationDetails{
    id : BigInt
    cgpa : number
    institute_university_name : String
    percentage : number
    seekerProfile : SeekerProfile
    startingDate : Date
    completionDate : Date
}