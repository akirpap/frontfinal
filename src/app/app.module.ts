import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card'
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatTableModule} from '@angular/material/table';
import {MatDividerModule} from '@angular/material/divider';
import { FormBuilder } from '@angular/forms';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {NgForm} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatInputModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatDividerModule,
    MatProgressBarModule
  ],
  providers: [FormBuilder],
  bootstrap: [AppComponent]
})
export class AppModule { }

