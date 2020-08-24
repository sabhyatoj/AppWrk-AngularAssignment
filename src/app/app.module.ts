import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OfficeTransactionComponent } from './office-transaction/office-transaction.component';
import { AddTransactionComponent } from './add-transaction/add-transaction.component';
import { HttpClientModule } from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { RouterModule} from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    OfficeTransactionComponent,
    AddTransactionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatSnackBarModule,
    RouterModule.forRoot([{path: '', pathMatch : 'full', redirectTo: 'officTransaction'},
      {component : OfficeTransactionComponent, path: 'officTransaction'},
      {component : AddTransactionComponent, path: 'addTransaction'}]),
     BrowserAnimationsModule,
     FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
