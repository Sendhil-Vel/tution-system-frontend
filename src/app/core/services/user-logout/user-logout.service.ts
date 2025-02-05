import { Injectable } from '@angular/core';

import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLogoutService {

  constructor() { }

  async logoutSession(authToken: String) {
    let url: string = environment.baseUrl + environment.apis.userLogout;

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Authorization': authToken.toString()
      }
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
