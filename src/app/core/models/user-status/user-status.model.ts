export class UserStatus {

    private userid: Number = NaN;
    private currentstatus: String = '';
    private requesttype: String = '';

    constructor() { }

    setUserId(userId: Number) {
        this.userid = userId;
    }
    getUserId(): Number {
        return this.userid;
    }

    setCurrentStatus(currentStatus: String) {
        this.currentstatus = currentStatus;
    }
    getCurrentStatus(): String {
        return this.currentstatus;
    }

    setRequestType(requestType: String) {
        this.requesttype = requestType;
    }
    getRequestType(): String {
        return this.requesttype;
    }
}
