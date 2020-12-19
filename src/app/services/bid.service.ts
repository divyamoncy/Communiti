import { Injectable } from '@angular/core';
import { Bid } from '../models/bids';
import { Loan } from '../models/loan';

@Injectable({
  providedIn: 'root'
})
export class BidService {
  public loanDataForBid: Loan;
  public bidForModify: Bid;
  public bidToView: Bid;
  constructor() { 
    this.loanDataForBid = {} as Loan;
    this.bidForModify = {} as Bid;
    this.bidToView = {} as Bid;
  }
}
