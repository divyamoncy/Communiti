import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LenderdashboardPage } from './lenderdashboard.page';

describe('LenderdashboardPage', () => {
  let component: LenderdashboardPage;
  let fixture: ComponentFixture<LenderdashboardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LenderdashboardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LenderdashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
