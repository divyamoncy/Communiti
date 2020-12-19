import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Loan } from '../models/loan';
import { DbService } from '../services/db.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-loanrequest',
  templateUrl: './loanrequest.page.html',
  styleUrls: ['./loanrequest.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanrequestPage implements OnInit {

  public loanRequest: Loan;

  public slideOneForm: FormGroup;

  constructor(public formBuilder: FormBuilder, private dbService: DbService, private router: Router, private storage: Storage) {
    this.slideOneForm = formBuilder.group({
      requestAmount: ['', Validators.required],
      loanPurpose: ['', Validators.required],
      currentEmployees: ['', Validators.required],
      newJob: ['', Validators.required],
      oldJob: ['', Validators.required]
  });
   }

  ngOnInit() {
  }
  createLoanRequest(){
    this.loanRequest = {} as Loan;
    this.loanRequest.requestAmount = this.slideOneForm.value.requestAmount;
    this.loanRequest.loanPurpose = this.slideOneForm.value.loanPurpose;
    this.loanRequest.currentEmployees = this.slideOneForm.value.currentEmployees;
    this.loanRequest.newJob = this.slideOneForm.value.newJob;
    this.loanRequest.oldJob = this.slideOneForm.value.oldJob;
    this.storage.get('profile').then((data) => {
      this.loanRequest.newBusiness = data.businessAge > 24 ? false : true;
      this.loanRequest.customerId = data.customerId;
      this.loanRequest.businessCategory = data.businessCategory;
      this.loanRequest.franchise = data.franchise;
      this.loanRequest.latinAmericanOwned = data.latinAmericanOwned;
      this.loanRequest.africanAmericanOwned = data.africanAmericanOwned;
      this.loanRequest.nativeAmericanOwned = data.nativeAmericanOwned;
      this.loanRequest.womenOwned = data.womenOwned;
      this.loanRequest.veteranOwned = data.veteranOwned;
      this.loanRequest.lgbtqOwned = data.lgbtqOwned;
      this.loanRequest.businessName = data.businessName;
      this.loanRequest.state = data.state;
      this.loanRequest.zipCode = data.zipCode;
      this.storage.get('noOfLoans').then((no) => {
        this.loanRequest.loanId = this.loanRequest.customerId + no.toString();
        this.storage.set('noOfLoans', no+1);
        console.log(this.loanRequest);
        this.dbService.insertLoan(this.loanRequest).subscribe((response)=>{
          console.log(response);
          this.router.navigate(['/tabs/tab2']);
          console.log("Navigated!");
        });
      });


     });
  }

}
