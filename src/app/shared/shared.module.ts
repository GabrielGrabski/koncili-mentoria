import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountInputComponent } from './components/input/account-input/account-input.component';
import { AccountSelectComponent } from './components/input/account-select/account-select.component';



@NgModule({
  declarations: [
    AccountInputComponent,
    AccountSelectComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AccountInputComponent,
    AccountSelectComponent
  ]
})
export class SharedModule { }
