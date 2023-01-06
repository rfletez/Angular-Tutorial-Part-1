import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  @Input() single_book: Book = {} as Book; //TS treats this empty object as Book type.

  @Output() emitBook = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }

  addToCart() {
    this.emitBook.emit(this.single_book);
  }

}
