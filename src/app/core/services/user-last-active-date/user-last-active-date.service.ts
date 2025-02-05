import { Injectable } from '@angular/core';

import axios from 'axios';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserLastActiveDateService {

  constructor() { }

  async getUserLastactiveDate(authToken: String) {
    let url: string = environment.baseUrl + environment.apis.userLastActiveDate;

    let config = {
      method: 'get',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Authorization': authToken.toString()
      }
    };

    const respsonse = async () => {
      return await axios.request(config)
      .then((resp) => {
        return resp;
      })
      .catch((error) => {
        return error;
      });
    }

    return await respsonse()
    .then((resp) => {
      let respData = {
        'status': resp.status,
        'result': ((resp.data) ? resp.data.data.result : [])
      };
      return JSON.stringify(respData);
    })
    .catch((err) => {
      return err
    });
    
  }
}
