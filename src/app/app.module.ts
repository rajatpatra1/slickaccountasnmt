import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { NumbercPipe } from './numberc.pipe';
import { NumberpipePipe } from './numberpipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NumbercPipe,
    NumberpipePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
