import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecordsService {

  info1: string[] = ["Adam Taylor", "ES1", "adam@email.com"]; 
  info2: string[] = ["Steven Jobs", "ES2", "steve@email.com"]; 
  info3: string[] = ["Ed Bosco", "ES3", "ed@email.com"]; 

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
}
