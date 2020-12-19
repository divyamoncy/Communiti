import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from '../services/bid.service';
import { DbService } from '../services/db.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.page.html',
  styleUrls: ['./loans.page.scss'],
})
export class LoansPage implements OnInit {
  public allLoans;
  public allBids;
  public lender;

  constructor(private dbService: DbService, private bidService: BidService, private router: Router, public storage: Storage) { }

  ngOnInit() {
    this.storage.get('lenderprofile').then((data) => {
      this.lender = data;
      console.log("Got lender from store!");
     });
    this.dbService.getAllLoans().subscribe((response)=>{
      console.log("loans",response);
      this.allLoans = response;
      this.dbService.getAllBids().subscribe((response)=>{
        console.log("bids",response);
        this.allBids = response;
      });
    });
  }
  goToBid(loan){
    this.bidService.loanDataForBid = loan;
    this.router.navigate(['/createbid']);
  }

}
