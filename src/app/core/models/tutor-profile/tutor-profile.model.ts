export class TutorProfileModel {
    private _tutorName: string = '';
    private _tutorNationality: string = '';
    private _tutorDOB: string = '';
    private _tutorGender: string = '';
    private _postalCode: string = '';
    private _phoneNo: string = '';
    private _paymentOption: string = '';
    private _tutoringPerference: string = '';
    private _tutorStandard: string = '';
    private _tutorSubject: string = '';
    private _tutorExperience: string = '';
    private _tutoringLocation: string = '';
    private _tutorQualification: string = '';

    gettutorName() {
      return this._tutorName
    }
    
    settutorName(val: string) {
      this._tutorName = val
    }
    
    gettutorNationality() {
      return this._tutorNationality
    }
    
    settutorNationality(val: string) {
      this._tutorNationality = val
    }
    
    gettutorDOB() {
      return this._tutorDOB
    }
    
    settutorDOB(val: string) {
      this._tutorDOB = val
    }
    
    gettutorGender() {
      return this._tutorGender
    }
    
    settutorGender(val: string) {
      this._tutorGender = val
    }
    
    getpostalCode() {
      return this._postalCode
    }
    
    setpostalCode(val: string) {
      this._postalCode = val
    }
    
    getphoneNo() {
      return this._phoneNo
    }
    
    setphoneNo(val: string) {
      this._phoneNo = val
    }
    
    getpaymentOption() {
      return this._paymentOption
    }
    
    setpaymentOption(val: string) {
      this._paymentOption = val
    }
    
    gettutoringPerference() {
      return this._tutoringPerference
    }
    
    settutoringPerference(val: string) {
      this._tutoringPerference = val
    }
    
    gettutorStandard() {
      return this._tutorStandard
    }
    
    settutorStandard(val: string) {
      this._tutorStandard = val
    }
    
    gettutorSubject() {
      return this._tutorSubject
    }
    
    settutorSubject(val: string) {
      this._tutorSubject = val
    }
    
    gettutorExperience() {
      return this._tutorExperience
    }
    
    settutorExperience(val: string) {
      this._tutorExperience = val
    }
    
    gettutoringLocation() {
      return this._tutoringLocation
    }
    
    settutoringLocation(val: string) {
      this._tutoringLocation = val
    }
    
    gettutorQualification() {
      return this._tutorQualification
    }
    
    settutorQualification(val: string) {
      this._tutorQualification = val
    }
}
