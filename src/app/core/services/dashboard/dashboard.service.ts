import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  async getDashboard(authToken: String) {
    let url: string = environment.baseUrl + environment.apis.dashboard;

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
        return JSON.stringify(resp);
      })
      .catch((error) => {
        return error;
      });
  }

}
