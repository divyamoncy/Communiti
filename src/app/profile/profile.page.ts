import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Lender } from '../models/lender';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public lender: Lender;
  public loaded: boolean;

  constructor(private storage: Storage) { }

  ngOnInit() {
    this.storage.get('lenderprofile').then((data) => {
      this.lender = data;
      console.log("Got lender from store!");
      this.loaded = true;
     });
  }

}
