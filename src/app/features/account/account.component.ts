import { Component } from '@angular/core';

class TableTest {

  constructor(marketplace: string, value: number) {
    this.marketplace = marketplace
    this.value = value
  }

  marketplace: string = ''
  value: number = 0
}

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
  cnpj = '12345678901234';
  maskedCnpj = '';
  tableValues = [
      new TableTest('Amazon', 1200),
      new TableTest('Vtex', 100),
      new TableTest('Cnova', 4000)
  ]

  ngOnInit() {
    this.maskCNPJ()
  }

  maskCNPJ(): void {
    this.maskedCnpj = this.cnpj.replace(/\D/g, '');
  
    this.maskedCnpj = this.maskedCnpj.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      '$1.***.***/***-$5'
    );
  }
}
