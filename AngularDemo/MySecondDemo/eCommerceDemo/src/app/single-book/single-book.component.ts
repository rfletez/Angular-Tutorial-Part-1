import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit, OnDestroy {

  @Input() single_book: Book = {} as Book; //TS treats this empty object as Book type.

  @Output() emitBook = new EventEmitter<Book>();

  myInterval: any = null;

  constructor() { }

  ngOnInit(): void {
    this.myInterval = setInterval(() => {
      console.log("Hello!");
    }, 1000);
  }

  addToCart() {
    this.emitBook.emit(this.single_book);
  }

  ngOnDestroy(): void {
    clearInterval(this.myInterval);
    console.log({ ngOnDestroy: "Component Destroyed" });
  }

}