import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ApiServiceService } from '../services/api-service.service';
import { DbService } from '../services/db.service';
import { Address, EmailAddress, PhoneNumber, Customer } from '../models/customer';
import { from } from 'rxjs';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomePage implements OnInit {

  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;
  public slideThreeForm: FormGroup;
  public slideFourForm: FormGroup;

  public submitAttempt: boolean = false;
  
  public address: Address[];
  public phoneNumber: PhoneNumber[];
  public emailAddress: EmailAddress[];
  public customer: Customer;
  public homeimg: Object;
  public custID: number;

  public submitted: boolean = false;

  get userName() {
    return this.authService.getUserName();
  }

  constructor(public formBuilder: FormBuilder, private authService: AuthService, private apiService: ApiServiceService, 
    private dbService: DbService, private router: Router, private storage: Storage) { 
    this.slideOneForm = formBuilder.group({
      businessName: ['', Validators.compose([Validators.maxLength(40), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      businessCategory: ['', Validators.compose([Validators.maxLength(2), Validators.pattern('[1-9]*'), Validators.required])],
      businessRegNo: ['', Validators.required],
      annualRevenue: ['', Validators.required],
      businessAge: ['', Validators.required]
  });
    this.slideTwoForm = formBuilder.group({
      latinAmericanOwned: [false],
      africanAmericanOwned: [false],
      nativeAmericanOwned: [false],
      womenOwned: [false],
      veteranOwned: [false],
      lgbtqOwned: [false],
      franchise: [false]
  });
    this.slideThreeForm = formBuilder.group({
      ownerName: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
      phoneNumber: ['', Validators.compose([Validators.maxLength(12), Validators.pattern('[0-9]*'), Validators.required])],
      email: ['', Validators.compose([Validators.required])]
  });
  this.slideFourForm = formBuilder.group({
    buildingNumber: ['', Validators.compose([Validators.maxLength(4), Validators.required])],
    line1: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
    line2: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
    line3: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
    line4: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
    line5: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
    state: ['', Validators.compose([Validators.maxLength(2), Validators.pattern('[a-zA-Z]*'), Validators.required])],
    zipCode: ['', Validators.compose([Validators.maxLength(7), Validators.required])]
});

  }
  ngOnInit() {
    this.storage.set('usertype', 'borrower');
   }
  next(slides){
    slides.slideNext();
  }
  prev(slides){
    slides.slidePrev();
  }

  save(signupSlider){
    this.submitAttempt = true;
  //   this.apiService.getToken().subscribe((res)=>{
  //     console.log("Token");
  //     console.log(res);
  // });
    if(!this.slideOneForm.valid){
        signupSlider.slideTo(0);
    } 
    else if(!this.slideTwoForm.valid){
        signupSlider.slideTo(1);
    }
    else if(!this.slideThreeForm.valid){
      signupSlider.slideTo(2);
    }
    else if(!this.slideFourForm.valid){
      signupSlider.slideTo(3);
    }

    else {
        this.submitted = true;
        this.phoneNumber = [];
        this.address = [];
        this.emailAddress = [];
        this.address.push({"addressType": "BUSINESS",
        "country": "US",
        "line1": this.slideFourForm.value.line1,
        "line2": this.slideFourForm.value.line2,
        "line3": this.slideFourForm.value.line3,
        "line4": this.slideFourForm.value.line4,
        "line5": this.slideFourForm.value.line5,
        "postalCode": this.slideFourForm.value.zipCode,
        "buildingNumber": this.slideFourForm.value.buildingNumber});
        
        this.phoneNumber.push({
          "type": "OFFICE",
          "number": this.slideThreeForm.value.phoneNumber
        });
        this.emailAddress.push({
          "type": "OFFICE",
          "address": this.slideThreeForm.value.email
        });
        this.customer = {} as Customer;
        this.customer.branchCode = "00000001";
        this.customer.enterpriseName = this.slideOneForm.value.businessName;
        this.customer.registrationNumber = this.slideOneForm.value.businessRegNo;
        this.customer.countryOfRegistration = "US";
        this.customer.address = this.address;
        this.customer.phoneNumber = this.phoneNumber;
        this.customer.emailAddress = this.emailAddress;
        this.customer.kycCheckRequired = "CORE-DEFINED";
        this.apiService.getToken().subscribe((res)=>{
          console.log("Token");
          console.log(res);
          this.apiService.postCustomer(this.customer, res).subscribe((resp)=>{
            console.log(resp);
            this.custID = resp.customerId;
            this.dbService.insertCustomer(this.custID, this.slideOneForm.value, this.slideTwoForm.value, this.slideThreeForm.value, this.slideFourForm.value).subscribe((response)=>{
              console.log(response);
              this.router.navigate(['/tabs/tab1']);
              console.log("Navigated!");
            });
      });
    });
    


  
    }
  }

}
