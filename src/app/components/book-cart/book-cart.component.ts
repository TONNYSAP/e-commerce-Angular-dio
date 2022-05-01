import { Component, OnInit } from '@angular/core';
import { BookService } from 'src/app/service/book.service';
import { Books } from './model/books.model';

@Component({
  selector: 'dio-book-cart',
  templateUrl: './book-cart.component.html',
  styleUrls: ['./book-cart.component.css']
})
export class BookCartComponent implements OnInit {
  // books: Books[] = [
  //       {
  //         id: 1,
  //         titulo: '',
  //         price: 0.0,
  //         quantity: 0.0,
  //         category: '',
  //         img: ''
  //       }
  // ];

  // livros: any;

  books: Books[] = [
    {id: 1, titulo: 'Mentes Brilhantes', price: 3.58, quantity: 11, category: 'auto-ajuda', img: 'https://img.ibxk.com.br/2020/07/17/17123530837000.jpg'},
    {id: 2, titulo: 'Pó de Lua nas Noites em Claro, Clarice Freire', price: 4.90, quantity: 8, category: 'poesias', img: 'https://img.ibxk.com.br/2020/07/17/17124411200001.jpg'},
    {id: 3, titulo: 'O Último Dia de Um Condenado, Victor Hugo', price: 4.95, quantity: 15, category: 'romance', img: 'https://img.ibxk.com.br/2020/07/17/17124707311002.jpg'},
    {id: 4, titulo: 'Benjamin Franklin: Autobiografia, Benjamin Franklin', price: 4.41, quantity: 10, category: 'autobiografia', img: 'https://img.ibxk.com.br/2020/07/17/17125002843006.jpg'},
    {id: 5, titulo: 'A Vida Secreta dos Nazistas, Paul Roland', price: 3.98, quantity: 6, category: 'historia', img: 'https://img.ibxk.com.br/2020/07/17/17130849757021.jpg'},
    {id: 6, titulo: 'Os Garotos do Furgão, Wilson Silva', price: 3.19, quantity: 20, category: 'ação-suspense', img: 'https://img.ibxk.com.br/2020/07/17/17131706223024.jpg'},
    {id: 7, titulo: 'A Ilha dos Corvos, Waldir L. Santos', price: 1.99, quantity: 13, category: 'romance', img: 'https://img.ibxk.com.br/2020/07/17/17132328754025.jpg'},
    {id: 8, titulo: 'Star Wars: a Resistência renascer Roanhorse e Rebecca', price: 8.97, quantity: 7, category: 'ação-ficção', img: 'https://img.ibxk.com.br/2020/07/13/13160144431283.jpg'},
    {id: 9, titulo: 'Alien: Mar de Angústia, James A. Moore', price: 11.20, quantity: 12, category: 'ficção-terror', img: 'https://img.ibxk.com.br/2020/07/13/13162520976296.jpg'},
    {id: 10, titulo: 'O mundo do exterminador, Orson Scott Card', price: 7.90, quantity: 18, category: 'ensaios', img: 'https://img.ibxk.com.br/2020/07/13/13163826586298.jpg'}
];

  item = 0;

  constructor(private bookService: BookService) {
      
   }

  ngOnInit() {
    
  }

  AddItem() {
    this.item++;
    if(this.item != 0) {
      alert("Adicionado " + (this.item) + " itens");
    }
  }
  
}
