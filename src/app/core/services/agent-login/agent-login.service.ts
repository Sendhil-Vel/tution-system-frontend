import { Injectable } from '@angular/core';
import { UserLogin } from '../../models/user-login/user-login.model';
import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AgentLoginService {

  constructor() { }

  async authenticateUser(userLogin: UserLogin) {
    let url: string = environment.baseUrl + environment.apis.agentLogin;
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
