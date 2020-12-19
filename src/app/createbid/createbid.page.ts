import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { Bid } from '../models/bids';
import { Lender } from '../models/lender';
import { Loan } from '../models/loan';
import { ApiServiceService } from '../services/api-service.service';
import { BidService } from '../services/bid.service';
import { DbService } from '../services/db.service';

@Component({
  selector: 'app-createbid',
  templateUrl: './createbid.page.html',
  styleUrls: ['./createbid.page.scss']
  //changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreatebidPage implements OnInit {

  public slideOneForm: FormGroup;
  public loanData: Loan;
  public bid: Bid;
  public lender: Lender;
  public loadedResult: boolean=false;
  public inputFeatures;
  public risk;
  constructor(public formBuilder: FormBuilder, private bidService: BidService, private dbService: DbService, 
    private router: Router, private storage: Storage, private apiService: ApiServiceService) {
    this.slideOneForm = formBuilder.group({
      amountOffered: ['', Validators.required],
      term: ['', Validators.required],
      offeredRate: ['', Validators.required],
      repaymentFrequency: ['', Validators.required],
      feesDescription: ['', Validators.required],
      fees: ['', Validators.required],
      possibleDisbursementDate: ['', Validators.required]
  });
   }

  ngOnInit() {
    console.log("Inside Create Bid Page");
    //console.log(this.bidService.loanDataForBid);
    this.storage.get('lenderprofile').then((data) => {
      this.lender = data;
     });
    this.loanData = this.bidService.loanDataForBid;
  }

  createBids() {
    this.bid = {} as Bid;
    this.bid.customerId = this.loanData.customerId;
    this.bid.loanId = this.loanData.loanId;
    this.bid.businessName = this.loanData.businessName;
    this.bid.currentEmployees = this.loanData.currentEmployees;
    this.bid.newJob = this.loanData.newJob;
    this.bid.oldJob = this.loanData.oldJob;
    this.bid.franchise = this.loanData.franchise;
    this.bid.newBusiness = this.loanData.newBusiness;
    this.bid.requestAmount = this.loanData.requestAmount;
    this.bid.businessCategory = this.loanData.businessCategory;
    this.bid.state = this.loanData.state;
    this.bid.zipCode = this.loanData.zipCode;

    this.bid.amountOffered = this.slideOneForm.value.amountOffered;
    this.bid.offeredRate = this.slideOneForm.value.offeredRate;
    this.bid.term = this.slideOneForm.value.term;
    this.bid.repaymentFrequency = this.slideOneForm.value.repaymentFrequency;
    this.bid.feesDescription = this.slideOneForm.value.feesDescription;
    this.bid.fees = this.slideOneForm.value.fees;
    this.bid.possibleDisbursementDate = this.slideOneForm.value.possibleDisbursementDate;
    this.bid.status = "submitted";
    
    this.bid.lenderId = this.lender.lenderId;
    this.bid.lenderName = this.lender.legalName;
    console.log(this.bid);
    this.dbService.insertBid(this.bid).subscribe((response)=>{
      console.log(response);
      this.router.navigate(['/lenderdashboard/bids']);
      console.log("Navigated!");
    });

  }
  checkRisk() {
    var states = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DC", "DE", "FL", "GA", 
          "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
          "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
          "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
          "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    this.inputFeatures= [{"BorrState":states.indexOf(this.loanData.state),"BorrZip":parseInt(this.loanData.zipCode),
    "GrossApproval":parseInt(this.slideOneForm.value.amountOffered),
    "ApprovalFiscalYear":2020,"InitialInterestRate":this.slideOneForm.value.offeredRate,
    "TermInMonths":this.slideOneForm.value.term, "NaicsCode":parseInt(this.loanData.businessCategory),
    "FranchiseCode":this.loanData.franchise?1:0,
    "JobsSupported":this.loanData.newJob+this.loanData.oldJob}];
    this.loadedResult=false;
    console.log(this.inputFeatures);
    this.apiService.predictDefault(this.inputFeatures).subscribe((res)=>{

      console.log(res);
      this.risk = res.prediction;
      this.loadedResult=true;
    });
  }

}
