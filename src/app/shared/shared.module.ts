import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInputComponent } from './components/input/account-input/account-input.component';



@NgModule({
  declarations: [
    AccountInputComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountInputComponent
  ]
})
export class SharedModule { }
