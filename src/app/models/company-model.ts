import { BusinessStream } from './business-stream'
import { CompanyImage } from './company-image-model'

export class Company {
    id: number
    businessStream: BusinessStream
    companyImages: Array<CompanyImage>
    companyName: String
    companyWebsiteUrl: String
    establishmentDate: Date
    profileDescription: String 
}