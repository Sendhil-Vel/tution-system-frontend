import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardModule } from 'primeng/card';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CardModule,
    ToastModule,
    DialogModule,
    ButtonModule
  ],
  exports: [
    CardModule,
    ToastModule,
    DialogModule,
    ButtonModule
  ]
})
export class PrimeNgModulesModule { }
