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
    },
    {
      name: "The Lord of the Rings",
      author: "JRR Tolkien",
      src: "https://m.media-amazon.com/images/I/41fx2jOQMfL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 1000
    },
    {
      name: "The Illiad",
      author: "Homer",
      src: "https://m.media-amazon.com/images/I/51bMPbMWfOL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 650
    }, 
    {
      name: "Thomas H. Cormen",
      author: "Intro to Algorithms",
      src: "https://m.media-amazon.com/images/I/41vLer1KbmL._SX218_BO1,204,203,200_QL40_FMwebp_.jpg",
      amount: 335
    }
  ];

  isSubmitted: boolean = false;

  isDisplayed: boolean = true;

  cart: Book[] = [];

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