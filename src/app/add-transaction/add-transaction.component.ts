import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TransactionsService } from '../transactions.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-transaction',
  templateUrl: './add-transaction.component.html',
  styleUrls: ['./add-transaction.component.css']
})
export class AddTransactionComponent implements OnInit {
  formSubmit = {type : '', description: '', amount : ''};
  constructor(private route: Router, private transaction: TransactionsService, private toaster: MatSnackBar) { }

  ngOnInit() {
  }

  goBack() {
    this.route.navigate(['officTransaction']);
  }
  openSnackBar(message: string, action: string) {
    this.toaster.open(message, action, {
      duration: 2000,
    });
  }
  addTransaction() {
    if (this.formSubmit.type === '' || this.formSubmit.description === '' || this.formSubmit.amount === '') {
      this.openSnackBar('Please fill all the details', 'Dismiss');
    } else {
    this.transaction.createTransaction(this.formSubmit).subscribe(res => {
      this.openSnackBar('Transaction Successfull', 'Dismiss');
      this.route.navigate(['officTransaction']);
    }, err => {
      this.openSnackBar('Error creating Transaction', 'Dismiss');
    });
    }
  }

}
