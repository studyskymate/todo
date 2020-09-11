import { UserAccount } from './UserAccount-model'

export class UserType {
    id: BigInteger
    userAccounts: Array<UserAccount>
    userTypeName: String
}