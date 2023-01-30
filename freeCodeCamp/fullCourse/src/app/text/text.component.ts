import { Component, OnInit } from '@angular/core';
import { RecordsService } from './records.service';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements OnInit {

  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  constructor(private records: RecordsService) {}

  getInfoFromServiceClass1() {
    this.infoReceived1 = this.records.getInfo1();
  }

  getInfoFromServiceClass2() {
    this.infoReceived2 = this.records.getInfo2();
  }

  getInfoFromServiceClass3() {
    this.infoReceived3 = this.records.getInfo3();
  }

  ngOnInit(): void {
    
  }
}