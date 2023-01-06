import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books: Book[] = [
    {
      name: "clean code",
      author: "robert c. cartin",
      src: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg",
      amount: 500
    },
    {
      name: "System Design Interview - An Insider's Guide",
      author: "Alex Wu",
      src: "https://m.media-amazon.com/images/I/312L17hmrOL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 450
    }
  ];

  isSubmitted: boolean = false;

  isDisplayed: boolean = true;


  constructor() { }

  ngOnInit(): void {
  }

  handleClick() {
    this.isSubmitted = true;
    alert("I am working!");
  }

  myName: string = "Karthik";
  handleInput(event: any) {
    let name = event.target.name;
    let value = event.target.value;

    this.myName = value;
    
    console.log("Name: " + name + ", Value: " + value);
  }

  displayBooks() {
    //if isDisplayed is true, then make it false.
    //if isDisplayed is false, then make it true.

    this.isDisplayed = !this.isDisplayed;
  }
}