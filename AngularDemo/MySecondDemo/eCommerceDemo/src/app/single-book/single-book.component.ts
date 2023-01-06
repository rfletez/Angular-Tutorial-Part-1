import { Component, Input, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-single-book',
  templateUrl: './single-book.component.html',
  styleUrls: ['./single-book.component.css']
})
export class SingleBookComponent implements OnInit {
  @Input() single_book: Book = {} as Book; //TS treats this empty object as Book type.

  constructor() { }

  ngOnInit(): void {
  }

}
