import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-account-input',
  templateUrl: './account-input.component.html',
  styleUrls: ['./account-input.component.scss']
})
export class AccountInputComponent {

  @Input() placeholder: string = "";
  @Input() labelText: string = "";
  @Input() type: string = "text";
  @Input() readOnly: boolean = false;
}
