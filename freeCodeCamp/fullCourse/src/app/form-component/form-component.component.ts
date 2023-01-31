import { Component } from '@angular/core';
import { DataService } from './data.service';


@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
  providers: [DataService]
})
export class FormComponentComponent {

  infoReceived1: string[] = [];
  infoReceived2: string[] = [];
  infoReceived3: string[] = [];

  constructor(private dataService: DataService) {}

  getInfoFromService1() {
    this.infoReceived1 = this.dataService.getInfo1();
  }

  getInfoFromService2() {
    this.infoReceived2 = this.dataService.getInfo2();
  }

  getInfoFromService3() {
    this.infoReceived3 = this.dataService.getInfo3();
  }

  submit(login: any) {
    console.log('Form submitted');
  }

  updateInfo(readInput: any) {
    this.dataService.addInfo(readInput.value.location);
  }
}
