import { Component, OnInit } from '@angular/core';
import {TransactionsService} from '../transactions.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-office-transaction',
  templateUrl: './office-transaction.component.html',
  styleUrls: ['./office-transaction.component.css']
})
export class OfficeTransactionComponent implements OnInit {
  tranactionsArray;
   results;
   displayedColumns = ['closingBalance', 'description', 'amount'];
  constructor(private transaction: TransactionsService, private toaster: MatSnackBar, private route: Router) { }

  ngOnInit() {
    this.getAllTransactions();
  }

  openSnackBar(message: string, action: string) {
    this.toaster.open(message, action, {
      duration: 2000,
    });
  }
  getAllTransactions() {
    this.transaction.getTransactions().subscribe(res => {
    //  this.openSnackBar('Success', 'Dismiss');
     this.results = res;
     this.tranactionsArray = this.results.transactions;
     console.log(this.tranactionsArray);
    }, err => {
      this.openSnackBar('Error fetching transactions', 'Dismiss');
    });
  }

  navigate() {
    this.route.navigate(['addTransaction']);
  }

}
