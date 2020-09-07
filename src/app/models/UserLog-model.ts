import { UserAccount } from '../useraccount/useraccount.component'

export class UserLog {
    userAccountId: BigInteger
    lastJobApplyDate: Date
    lastLoginDate: Date
    userAccount: UserAccount
}