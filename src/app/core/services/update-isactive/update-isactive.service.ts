import { Injectable } from '@angular/core';
import { UserStatus } from '../../models/user-status/user-status.model';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class UpdateIsactiveService {

  constructor(private sessionStorage: SessionStorageService,) { }

  async authenticateUser(userstatus: UserStatus) {
    let url: string = environment.baseUrl + environment.apis.updateisactive;
    let data = JSON.stringify({
      userid: userstatus.getUserId(),
      currentstatus: userstatus.getCurrentStatus(),
      requesttype: userstatus.getRequestType()
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
        return JSON.stringify(resp);
      })
      .catch((error) => {
        return error;
      });
  }
}
