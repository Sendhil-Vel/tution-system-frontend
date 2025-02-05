import { Injectable } from '@angular/core';
import  *  as CryptoJS from  'crypto-js';


@Injectable({
  providedIn: 'root'
})
export class EncryptDecryptService {

  private key: string = "";

  constructor() { }

  public encrypt(txtToEncrypt: string): string{
    return CryptoJS.AES.encrypt(txtToEncrypt, this.key).toString();
  }

  public decrypt(txtToDecrypt: string) {
    return CryptoJS.AES.decrypt(txtToDecrypt, this.key).toString(CryptoJS.enc.Utf8);
  }
}
