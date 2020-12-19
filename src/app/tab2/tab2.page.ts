import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { BidService } from '../services/bid.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{
  public myLoans;
  public bidsOnMyLoans;
  public borr;
  public loaded: boolean = false;
  public async get(settingName){
    return await this.storage.get(`profile`);
  }
  ngOnInit(){
    this.loaded = false;
    this.get('profile').then((val)=> {
      this.borr = val;
      console.log(val);
      this.dbService.getCustomerLoans(val.customerId).subscribe((response)=>{
        console.log("Customer+loans",response);
        this.myLoans = response;
        this.dbService.getBidsByCustomerId(val.customerId).subscribe((response)=>{
          console.log("Customer bids",response);
          this.bidsOnMyLoans = response;
          this.loaded = true;
        });
      });
    })
  }

  ionViewWillEnter() {
    this.loaded = false;
    this.get('profile').then((val)=> {
      this.borr = val;
      console.log(val);
    this.dbService.getBidsByCustomerId(this.borr.customerId).subscribe((response)=>{
      console.log("Customer bids",response);
      this.bidsOnMyLoans = response;
      this.loaded = true;
    });
  });
  }
  constructor( private dbService: DbService, public storage: Storage, public router: Router, public bidService: BidService) {}

  accept(bid) {
    bid.status="accepted";
    this.dbService.modifyBid(bid).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/tabs/tab2']);
      console.log("Navigated!");
    });

  }
  decline(bid) {
    bid.status="declined";
    this.dbService.modifyBid(bid).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/tabs/tab2']);
      console.log("Navigated!");
    });

  }
  view(bid) {
    this.bidService.bidToView = bid;
    this.router.navigate(['/view-bid']);

  }
}
