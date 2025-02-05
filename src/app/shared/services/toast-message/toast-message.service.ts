import { Injectable } from '@angular/core';
import { Message, MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToastMessageService {

  constructor(
    private messageService: MessageService
  ) { }

  setToastMessage(message: Message) {
    this.messageService.clear(message.key);
    this.messageService.add(message);
  }

}
