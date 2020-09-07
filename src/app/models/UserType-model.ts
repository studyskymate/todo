import { UserAccount } from './UserAccount-model'

export class UserType {
    id: BigInteger
    userAccounts: List<UserAccount>
    userTypeName: String
}