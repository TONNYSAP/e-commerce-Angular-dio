import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'dio-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  @Input() item = 0;

  constructor() { }

  ngOnInit(): void {
  }

  CarrinhoItem() {
    alert( `${this.item} itens`);
  }

}
