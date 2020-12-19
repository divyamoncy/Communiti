import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LenderonboardingPage } from './lenderonboarding.page';

describe('LenderonboardingPage', () => {
  let component: LenderonboardingPage;
  let fixture: ComponentFixture<LenderonboardingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderonboardingPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LenderonboardingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
