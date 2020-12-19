import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoanrequestPage } from './loanrequest.page';

describe('LoanrequestPage', () => {
  let component: LoanrequestPage;
  let fixture: ComponentFixture<LoanrequestPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanrequestPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoanrequestPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
