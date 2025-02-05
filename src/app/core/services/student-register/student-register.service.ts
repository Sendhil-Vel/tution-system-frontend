import { Injectable } from '@angular/core';
import { UserLogin } from '../../models/user-login/user-login.model';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class StudentRegisterService {

  constructor(private sessionStorage: SessionStorageService,) { }
  async authenticateUser(userLogin: UserLogin) {
    let url: string = environment.baseUrl + environment.apis.studentRegister;
    let data = JSON.stringify({
      username: userLogin.getUserName(),
      userpassword: userLogin.getPassword(),
    });
    let authToken: string = this.sessionStorage.getAuthToken() || '';

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken.toString()
      },
      data: data,
    };

    return await axios.request(config)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
  }
}
