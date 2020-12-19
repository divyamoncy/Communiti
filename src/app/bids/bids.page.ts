import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { BidService } from '../services/bid.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-bids',
  templateUrl: './bids.page.html',
  styleUrls: ['./bids.page.scss'],
})
export class BidsPage implements OnInit {

  public loaded : boolean = false;
  public myBids;

  constructor(private dbService: DbService, private storage: Storage, private bidService: BidService, private router: Router) { }

  ngOnInit() {
    this.storage.get('lenderprofile').then((data) => {
      
      console.log("Got borrower from store!");

      this.dbService.getBidsByLender(data.lenderId).subscribe((response)=>{
        console.log("the bids",response);
        this.myBids = response;
      });

      this.loaded = true;
     });

    
  }
  modifyBid(bid){
    this.bidService.bidForModify = bid;
    this.router.navigate(['/modify-bid']);
  }
  ionViewWillEnter(){
    this.storage.get('lenderprofile').then((data) => {
      
      console.log("Got borrower from store!");

      this.dbService.getBidsByLender(data.lenderId).subscribe((response)=>{
        console.log("the bids",response);
        this.myBids = response;
      });

      this.loaded = true;
     });

  }

}
