import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { AdminUserUpdate } from '../../models/admin-user-update/admin-user-update.model';
import { AdminUserInfo } from '../../interfaces/admin-user-info.interface';
import axios from 'axios';

@Injectable({
  providedIn: 'root',
})
export class AdminUserUpdateService {
  constructor() {}

  async updateAdminUser(authToken: String, adminUserInfo: AdminUserUpdate) {
    let url: string = environment.baseUrl + environment.apis.adminUserUpdate;
    let data: AdminUserInfo = {
      adminuserid: adminUserInfo.getAdminUserId(),
      userpassword: adminUserInfo.getCurrentPassword(),
      username: adminUserInfo.getAdminUserName(),
      newuserpassword: adminUserInfo.getNewPassword(),
    };

    let config = {
      method: 'POST',
      maxBodyLength: Infinity,
      url: url,
      headers: {
        Authorization: authToken.toString(),
      },
      data: data,
    };

    return await axios
      .request(config)
      .then((resp) => {
        return JSON.stringify(resp);
      })
      .catch((error) => {
        return error;
      });
  }
}
