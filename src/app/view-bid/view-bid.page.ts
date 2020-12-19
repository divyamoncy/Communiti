import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BidService } from '../services/bid.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-view-bid',
  templateUrl: './view-bid.page.html',
  styleUrls: ['./view-bid.page.scss'],
})
export class ViewBidPage implements OnInit {

  public bid;
  constructor(private bidService: BidService, private dbService: DbService, private router: Router) { }

  ngOnInit() {
    this.bid = this.bidService.bidToView;
  }
  accept(tbid) {
    tbid.status="accepted";
    this.dbService.modifyBid(tbid).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/tabs/tab2']);
      console.log("Navigated!");
    });

  }
  decline(tbid) {
    tbid.status="declined";
    this.dbService.modifyBid(tbid).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/tabs/tab2']);
      console.log("Navigated!");
    });
  }

}
