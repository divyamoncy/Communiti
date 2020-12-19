import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Lender } from '../models/lender';
import { ApiServiceService } from '../services/api-service.service';
import { DbService } from '../services/db.service';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-lenderonboarding',
  templateUrl: './lenderonboarding.page.html',
  styleUrls: ['./lenderonboarding.page.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LenderonboardingPage implements OnInit {

  public slideOneForm: FormGroup;
  public slideTwoForm: FormGroup;
  public slideThreeForm: FormGroup;

  public lender: Lender;

  public submitAttempt: boolean = false;

  public submitted: boolean = false;

  constructor(public formBuilder: FormBuilder, private apiService: ApiServiceService, 
    private dbService: DbService, private router: Router, private storage: Storage) { 

      this.slideOneForm = formBuilder.group({
        legalName: ['', Validators.compose([Validators.maxLength(40), Validators.pattern('[a-zA-Z .]*'), Validators.required])],
        legalIdType: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z .]*'), Validators.required])],
        legalIdNumber: ['', Validators.required]
      });
      this.slideTwoForm = formBuilder.group({
        contactPersonnel: ['', Validators.compose([Validators.maxLength(40), Validators.pattern('[a-zA-Z .]*'), Validators.required])],
        jobTitle: ['', Validators.compose([Validators.maxLength(30), Validators.pattern('[a-zA-Z ]*'), Validators.required])],
        contactNumber: ['', Validators.compose([Validators.maxLength(12), Validators.pattern('[0-9]*'), Validators.required])],
        email:['', Validators.required]
      });
      this.slideThreeForm = formBuilder.group({
        line1: ['', Validators.compose([Validators.maxLength(30), Validators.required])],
        line2: ['', Validators.maxLength(30)],
        line3: ['', Validators.maxLength(30)],
        state: ['', Validators.compose([Validators.maxLength(2), Validators.pattern('[a-zA-Z]*'), Validators.required])],
        zipCode: ['', Validators.compose([Validators.maxLength(7), Validators.required])]
      });
    }

  ngOnInit() {
    this.storage.set('usertype', 'lender');
  }

  next(slides){
    slides.slideNext();
  }
  prev(slides){
    slides.slidePrev();
  }

  generateUUID() { // Public Domain/MIT
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
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

    else {
      this.submitted = true;
      this.lender = {} as Lender;
      this.lender.legalName = this.slideOneForm.value.legalName;
      this.lender.legalIdType = this.slideOneForm.value.legalIdType;
      this.lender.legalIdNumber = this.slideOneForm.value.legalIdNumber;
      this.lender.contactPersonnel = this.slideTwoForm.value.contactPersonnel;
      this.lender.contactNumber = this.slideTwoForm.value.contactNumber;
      this.lender.jobTitle = this.slideTwoForm.value.jobTitle;
      this.lender.email = this.slideTwoForm.value.email;
      this.lender.line1 = this.slideThreeForm.value.line1;
      this.lender.line2 = this.slideThreeForm.value.line2;
      this.lender.line3 = this.slideThreeForm.value.line3;
      this.lender.state = this.slideThreeForm.value.state;
      this.lender.zipCode = this.slideThreeForm.value.zipCode;
      this.lender.lenderId = this.generateUUID();
      console.log('Lender');
      console.log(this.lender);
      this.dbService.insertLender(this.lender).subscribe((response)=>{
                  console.log(response);
                  this.router.navigate(['/lenderdashboard/loans']);
                  console.log("Navigated!");
      });
  //     this.apiService.getToken().subscribe((res)=>{
  //       console.log("Token");
  //       console.log(res);
  //       this.apiService.postCustomer(this.customer, res).subscribe((resp)=>{
  //         console.log(resp);
  //         this.custID = resp.customerId;
  //         this.dbService.insertCustomer(this.custID, this.slideOneForm.value, this.slideTwoForm.value, this.slideThreeForm.value, this.slideFourForm.value).subscribe((response)=>{
  //           console.log(response);
  //           this.router.navigate(['/tabs/tab1']);
  //           console.log("Navigated!");
  //         });
  //   });
  // });
  



  }
}

}
