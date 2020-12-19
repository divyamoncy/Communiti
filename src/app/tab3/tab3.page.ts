import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { BidService } from '../services/bid.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  public borr;
  public bidsForMe;

  public async get(settingName){
    return await this.storage.get(`profile`);
  }

  constructor(private dbService: DbService, private storage: Storage, private router: Router, private bidService: BidService) {}
  OnInit() {
    this.get('profile').then((val)=> {
      this.borr = val;
      console.log(val);
        this.dbService.getBidsByCustomerId(val.customerId).subscribe((response)=>{
          this.bidsForMe = response;
      });
    })
  }
  ionViewWillEnter(){
    this.get('profile').then((val)=> {
      this.borr = val;
      console.log(val);
    this.dbService.getBidsByCustomerId(this.borr.customerId).subscribe((response)=>{
      this.bidsForMe = response;
    });
    });

  }
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
