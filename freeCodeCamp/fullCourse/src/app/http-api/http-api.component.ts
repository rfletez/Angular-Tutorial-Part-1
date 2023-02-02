import { Component } from '@angular/core';
import { UserService } from './user.service';

/* Link: https://www.youtube.com/watch?v=k8qDGBFPfXk 
  Stopped at 35:00 */

@Component({
  selector: 'app-http-api',
  templateUrl: './http-api.component.html',
  styleUrls: ['./http-api.component.css'],
  providers: [UserService]
})
export class HttpApiComponent {

}
