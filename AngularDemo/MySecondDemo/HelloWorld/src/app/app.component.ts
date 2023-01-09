import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title: string = 'HelloWorld';

  intervalSub: any = null;

  ngOnInit(): void {
    this.intervalSub = setInterval(() => {
      console.log("Starting Point.");
    }, 1000);
  }

  ngOnDestroy(): void {
    if(this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

  //Lifecycle hooks can help with the behavior of the components during the 
  //creation, updation, and destruction phase.
}