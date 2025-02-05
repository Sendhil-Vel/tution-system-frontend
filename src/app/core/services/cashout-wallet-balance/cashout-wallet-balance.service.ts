import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class CashoutWalletBalanceService {

  constructor() { }

  async getCashoutWalletBalance(authToken: String) {
    let url: string = environment.baseUrl + environment.apis.cashOutWalletBalance;

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
