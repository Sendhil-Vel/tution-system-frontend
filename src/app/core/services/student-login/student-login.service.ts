import { Injectable } from '@angular/core';
import { UserLogin } from '../../models/user-login/user-login.model';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { StudentProfile } from '../../../core/models/student-profile/student-profile.model'

@Injectable({
  providedIn: 'root'
})
export class StudentLoginService {

  constructor() { }

  async UpdateUserProfiles(StudentProfileInfo: StudentProfile) {
    console.log(StudentProfileInfo);
    let url: string = environment.baseUrl + environment.apis.studentProfileUpdate;
    let data = JSON.stringify({});
    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };
    return await axios.request(config)
    .then((resp) => {
      return JSON.stringify(resp);
    })
    .catch((error) => {
      return error;
    });
  }

  async authenticateUser(userLogin: UserLogin) {
    let url: string = environment.baseUrl + environment.apis.studentLogin;
    let data = JSON.stringify({
      username: userLogin.getUserName(),
      userpassword: userLogin.getPassword(),
    });

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'application/json',
      },
      data: data,
    };

    return await axios.request(config)
      .then((resp) => {
        return JSON.stringify(resp);
      })
      .catch((error) => {
        return error;
      });
  }
}
