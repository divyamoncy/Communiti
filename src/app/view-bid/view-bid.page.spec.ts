import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ViewBidPage } from './view-bid.page';

describe('ViewBidPage', () => {
  let component: ViewBidPage;
  let fixture: ComponentFixture<ViewBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewBidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ViewBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
