export interface UserCashOut {
    userID: number;
    userName: string;
    cashoutUsdAmount: string;
    stripeEmail: string;
    stripeID: string;
    processStatus: string;
    responseCode: string;
    processDate: string;
}
