import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  info1: string[] = ['Alec Baldwin', 'E300', 'alec@email.com'];
  info2: string[] = ['Selena Gomez', 'E301', 'sel@email.com'];
  info3: string[] = ['Prince Herb', 'E302', 'herb@email.com'];

  constructor() { }

  getInfo1(): string[] {
    return this.info1;
  }

  getInfo2(): string[] {
    return this.info2;
  }

  getInfo3(): string[] {
    return this.info3;
  }

  addInfo(data: any) {
    this.info1.push(data);
    this.info2.push(data);
    this.info3.push(data);

    return this.info1;
  }

}