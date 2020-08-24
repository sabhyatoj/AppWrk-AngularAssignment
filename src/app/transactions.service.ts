import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  baseUrl = 'http://localhost:3000/';
  constructor(private http: HttpClient) { }

  getTransactions() {
    return this.http.get(this.baseUrl + 'transactions');
  }

  createTransaction(body) {
    return this.http.post(this.baseUrl + 'transactions', body);
  }
}
