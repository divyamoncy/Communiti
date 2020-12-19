import { Component, OnInit } from '@angular/core';
import { DbService } from '../services/db.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {
  public myBids;
  public loaded: boolean = false;
  constructor(public dbService: DbService, public storage: Storage) { }

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
