import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childMessage: string = ''; //From Parent to Child

  @Output() messageEvent = new EventEmitter<string>(); //From Child to Parent

  constructor() { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageEvent.emit("Hello from Child Component.");
  }
}
