import { Injectable } from '@angular/core';
import { UserLogin } from '../../models/user-login/user-login.model';
import axios from 'axios';
import { environment } from '../../../../environments/environment';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private sessionStorage: SessionStorageService,) { }

  async GetSubjects() {
    let url: string = environment.baseUrl + environment.apis.studentgetsubject;
    let authToken: string = this.sessionStorage.getAuthToken() || '';
    let config = {
      method: 'GET',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        'Content-Type': 'application/json',
        'Authorization': authToken.toString()
      },
    };

    return await axios.request(config)
      .then((resp) => {
        return JSON.stringify(resp);
      })
      .catch((error) => {
        return JSON.stringify(error);
      });
  }
}
