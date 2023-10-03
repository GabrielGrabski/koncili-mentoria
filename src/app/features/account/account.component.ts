import { Component } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  isMyAcconutSelected: boolean = false
  options: string[] = [
    "%001%",
    "%002%",
    "%003%",
  ]
  lastUsage: string = new Date().toLocaleString();
}
