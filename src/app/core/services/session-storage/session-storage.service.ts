import { Injectable } from '@angular/core';
import { SessionTokens } from '../../enums/session-tokens/session-tokens.enum';

@Injectable({
  providedIn: 'root'
})
export class SessionStorageService {

  constructor() { }

  // AUTH_TOKEN
  public setAuthToken(authToken: string) {
    sessionStorage.setItem(SessionTokens.AUTH_TOKEN, authToken);
  }

  public getAuthToken() {
    return sessionStorage.getItem(SessionTokens.AUTH_TOKEN)?.toString();
  }

  // ADMIN_USER_ID
  public setAdminUserId(adminUserId: number) {
    sessionStorage.setItem(SessionTokens.ADMIN_USER_ID, adminUserId.toString());
  }

  public getAdminUserId() {
    return Number.parseInt(sessionStorage.getItem(SessionTokens.ADMIN_USER_ID) || '');
  }

  public setAdminUserObj(adminUserObj: any) {
    sessionStorage.setItem(SessionTokens.ADMIN_USER_OBJ, adminUserObj);
  }

  public getAdminUserObj() {
    return Number.parseInt(sessionStorage.getItem(SessionTokens.ADMIN_USER_OBJ) || '');
  }
  
  // ADMIN_USER_NAME
  public setAdminUserName(adminUserName: string) {
    sessionStorage.setItem(SessionTokens.ADMIN_USER_NAME, adminUserName);
  }

  public getAdminUserName() {
    return sessionStorage.getItem(SessionTokens.ADMIN_USER_NAME)?.toString();
  }

  // Clear Session Storage
  clearSessionStorage() {
    sessionStorage.clear();
  } 
  
}
