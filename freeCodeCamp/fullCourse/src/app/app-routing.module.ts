import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponentComponent } from './form-component/form-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TextComponent } from './text/text.component';

const routes: Routes = [
  { path: '/', component: NavbarComponent },
  { path: 'text', component: TextComponent },
  { path: 'form', component: FormComponentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
