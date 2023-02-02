import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RecordsService } from './text/records.service';
import { TextComponent } from './text/text.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ReactiveComponent } from './reactive/reactive.component';
import { HttpApiComponent } from './http-api/http-api.component';

@NgModule({
  declarations: [
    AppComponent,
    TextComponent,
    FormComponentComponent,
    NavbarComponent,
    ReactiveComponent,
    HttpApiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
