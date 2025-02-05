export class StudentProfile {
    private _personName: string = '';
    private _usertype: string = '';                       //Parent / Student
    private _studentName: string = '';
    private _studentGender: string = '';
    private _studentAddress: string = '';
    private _emailAddress: string = '';
    private _subjects: string = '';
    private _studentGrade: string = '';
    private _classFrequency: string = '';
    private _Budget: string = '';
    private _timeSlot: string = '';
    private _description: string = '';

    getpersonName() {
      return this._personName
    }
    
    setpersonName(val: string) {
      this._personName = val
    }
    
    getusertype() {
      return this._usertype
    }
    
    setusertype(val: string) {
      this._usertype = val
    }
    
    getstudentName() {
      return this._studentName
    }
    
    setstudentName(val: string) {
      this._studentName = val
    }
    
    getstudentGender() {
      return this._studentGender
    }
    
    setstudentGender(val: string) {
      this._studentGender = val
    }
    
    getstudentAddress() {
      return this._studentAddress
    }
    
    setstudentAddress(val: string) {
      this._studentAddress = val
    }
    
    getemailAddress() {
      return this._emailAddress
    }
    
    setemailAddress(val: string) {
      this._emailAddress = val
    }
    
    getsubjects() {
      return this._subjects
    }
    
    setsubjects(val: string) {
      this._subjects = val
    }
    
    getstudentGrade() {
      return this._studentGrade
    }
    
    setstudentGrade(val: string) {
      this._studentGrade = val
    }
    
    getclassFrequency() {
      return this._classFrequency
    }
    
    setclassFrequency(val: string) {
      this._classFrequency = val
    }
    
    getBudget() {
      return this._Budget
    }
    
    setBudget(val: string) {
      this._Budget = val
    }
    
    gettimeSlot() {
      return this._timeSlot
    }
    
    settimeSlot(val: string) {
      this._timeSlot = val
    }
    
    getdescription() {
      return this._description
    }
    
    setdescription(val: string) {
      this._description = val
    }

    constructor() { }


}
