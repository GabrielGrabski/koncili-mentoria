import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountComponent } from './account/account.component';
import { SharedModule } from '../shared/shared.module';
import { FeaturesRoutingModule } from './features-routing.module';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';


@NgModule({
  declarations: [
    AccountComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FeaturesRoutingModule,
    FormsModule,
    TableModule
  ]
})
export class FeaturesModule { }
