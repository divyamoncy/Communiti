import { Component, OnInit } from '@angular/core';
import { BidService } from '../services/bid.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Bid } from '../models/bids';
import { DbService } from '../services/db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modify-bid',
  templateUrl: './modify-bid.page.html',
  styleUrls: ['./modify-bid.page.scss'],
})
export class ModifyBidPage implements OnInit {

  public slideOneForm: FormGroup;
  public bid: Bid;
  public newbid: Bid;

  constructor(private bidService: BidService, public formBuilder: FormBuilder, private dbService: DbService, private router: Router) {
    this.bid = this.bidService.bidForModify;
    this.slideOneForm = formBuilder.group({
      amountOffered: [this.bid.amountOffered, Validators.required],
      term: [this.bid.term, Validators.required],
      offeredRate: [this.bid.offeredRate, Validators.required],
      repaymentFrequency: [this.bid.repaymentFrequency, Validators.required],
      feesDescription: [this.bid.feesDescription, Validators.required],
      fees: [this.bid.fees, Validators.required],
      possibleDisbursementDate: [this.bid.possibleDisbursementDate, Validators.required]
  });
   }

  ngOnInit() {
  }

  modifyBid() {
    this.newbid = {} as Bid;
    this.newbid.customerId = this.bid.customerId;
    this.newbid.loanId = this.bid.loanId;
    this.newbid.businessName = this.bid.businessName;
    this.newbid.currentEmployees = this.bid.currentEmployees;
    this.newbid.newJob = this.bid.newJob;
    this.newbid.oldJob = this.bid.oldJob;
    this.newbid.franchise = this.bid.franchise;
    this.newbid.newBusiness = this.bid.newBusiness;
    this.newbid.requestAmount = this.bid.requestAmount;
    this.newbid.businessCategory = this.bid.businessCategory;
    this.newbid.state = this.bid.state;
    this.newbid.zipCode = this.bid.zipCode;

    this.newbid.amountOffered = this.slideOneForm.value.amountOffered;
    this.newbid.offeredRate = this.slideOneForm.value.offeredRate;
    this.newbid.term = this.slideOneForm.value.term;
    this.newbid.repaymentFrequency = this.slideOneForm.value.repaymentFrequency;
    this.newbid.feesDescription = this.slideOneForm.value.feesDescription;
    this.newbid.fees = this.slideOneForm.value.fees;
    this.newbid.possibleDisbursementDate = this.slideOneForm.value.possibleDisbursementDate;
    this.newbid.status = "submitted";
    
    this.newbid.lenderId = this.bid.lenderId;
    this.newbid.lenderName = this.bid.lenderName;
    console.log(this.newbid);
    this.dbService.modifyBid(this.newbid).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/lenderdashboard']);
      console.log("Navigated!");
    });
  }

}
