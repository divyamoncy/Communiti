import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer, DBCustomer } from '../models/customer';
import { map } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { Loan } from '../models/loan';
import { Lender } from '../models/lender';
import { Bid } from '../models/bids';

@Injectable({
  providedIn: 'root'
})
export class DbService {

  public dbCustomer: DBCustomer;

  constructor(private httpClient: HttpClient, private storage: Storage) { }

  insertCustomer(
customerId, slideOne, slideTwo, slideThree, slideFour
  ): Observable<any> {
    this.dbCustomer = {} as DBCustomer;
    this.dbCustomer.customerId = customerId;
    this.dbCustomer.businessName = slideOne.businessName;
    this.dbCustomer.businessCategory = slideOne.businessCategory;
    this.dbCustomer.businessRegNo = slideOne.businessRegNo;
    this.dbCustomer.annualRevenue = slideOne.annualRevenue;
    this.dbCustomer.businessAge = slideOne.businessAge;
    this.dbCustomer.franchise = slideTwo.franchise;
    this.dbCustomer.latinAmericanOwned = slideTwo.latinAmericanOwned;
    this.dbCustomer.africanAmericanOwned = slideTwo.africanAmericanOwned;
    this.dbCustomer.nativeAmericanOwned = slideTwo.nativeAmericanOwned;
    this.dbCustomer.womenOwned = slideTwo.womenOwned;
    this.dbCustomer.veteranOwned = slideTwo.veteranOwned;
    this.dbCustomer.lgbtqOwned = slideTwo.lgbtqOwned;
    this.dbCustomer.ownerName = slideThree.ownerName;
    this.dbCustomer.phoneNumber = slideThree.phoneNumber;
    this.dbCustomer.emailAddress = slideThree.email;
    this.dbCustomer.state = slideFour.state;
    this.dbCustomer.zipCode = slideFour.zipCode;
    this.storage.set('profile', this.dbCustomer);
    this.storage.set('noOfLoans',0);
    console.log(this.dbCustomer);
    return this.httpClient.post<any>(
      `/insertCustomer`, this.dbCustomer, {
        headers: { 
          'Content-Type': 'application/json' }
      })
      .pipe(map((response) => response));
}
  insertLoan( loan : Loan): Observable<any> {
    return this.httpClient.post<any>(
      `/insertLoan`, loan, {
        headers: { 
          'Content-Type': 'application/json' }
      })
      .pipe(map((response) => response));

  }
  insertLender( lender : Lender): Observable<any> {
    this.storage.set('lenderprofile', lender);
    this.storage.set('noOfBids', 0);
    return this.httpClient.post<any>(
      `/insertLender`, lender, {
        headers: { 
          'Content-Type': 'application/json' }
      })
      .pipe(map((response) => response));

  }
  insertBid( bid : Bid): Observable<any> {
    return this.httpClient.post<any>(
      `/insertBid`, bid, {
        headers: { 
          'Content-Type': 'application/json' }
      })
      .pipe(map((response) => response));

  }
  getCustomerLoans( customerId ): Observable<any> {
    return this.httpClient.get<any>(`/`+customerId+`/loans`)
    .pipe(map((response) => response));
  }
  getAllLoans(): Observable<any> {
    return this.httpClient.get<any>(`/getAllLoans`)
    .pipe(map((response) => response));
  }
  getBidsByLender(lenderId): Observable<any> {
    return this.httpClient.get<any>(`/bids/`+lenderId)
    .pipe(map((response) => response));
  }
  getAllBids(): Observable<any> {
    return this.httpClient.get<any>(`/allbids`)
    .pipe(map((response) => response));
  }
  getBidsByCustomerId(customerId): Observable<any> {
    return this.httpClient.get<any>(`/bids/customer/`+customerId)
    .pipe(map((response) => response));
  }
  modifyBid(newbid : Bid): Observable<any> {
    return this.httpClient.post<any>(`/modifybid/`+newbid.loanId+`/`+newbid.lenderId, newbid, {
      headers: { 
        'Content-Type': 'application/json' }
    })
    .pipe(map((response) => response));
  }
}
