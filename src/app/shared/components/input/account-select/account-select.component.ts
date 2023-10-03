import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-select',
  templateUrl: './account-select.component.html',
  styleUrls: ['./account-select.component.scss']
})
export class AccountSelectComponent {

  @Input() options: string[] = []
  @Input() label: string = ""
}
