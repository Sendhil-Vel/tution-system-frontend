import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class FlaggedPostsService {

  constructor() { }

  async getFlaggedPosts(authToken: String) {
    let url: string = environment.baseUrl + environment.apis.flaggedPosts;

    let config = {
      method: 'GET',
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
