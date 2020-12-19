import { Component, OnInit, ChangeDetectionStrategy, ViewChild } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Storage } from '@ionic/storage';
import { DBCustomer } from '../models/customer';
import { RouterOutlet, Router, ActivationStart } from '@angular/router';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit{

  @ViewChild(RouterOutlet) outlet: RouterOutlet;

  public borrower: DBCustomer;
  public loaded: boolean = false;
  async getStorage() {
    try { return await this.storage.get('profile') }
    catch(e) { console.log(e) }
}
  ngOnInit(){
    this.storage.get('profile').then((data) => {
    this.borrower = data;
    console.log("Got borrower from store!");
    this.loaded = true;
   });
  }
  get userName() {
    return this.authService.getUserName();
  }
  
  constructor(private authService: AuthService, private storage: Storage, private router: Router, public storageService : StorageService) {
    
   }

}
