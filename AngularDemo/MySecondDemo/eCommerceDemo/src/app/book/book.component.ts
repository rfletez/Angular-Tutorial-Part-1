import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  name: string = "Clean Code";
  author: string = "Rober C. Martin";
  src: string = "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg";

  name2: string = "System Design Interview - An Insider's Guide";
  author2: string = "Alex Wu";
  src2: string = "https://m.media-amazon.com/images/I/312L17hmrOL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg";

  isSubmitted: boolean = false;

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
}