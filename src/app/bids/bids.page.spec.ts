import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BidsPage } from './bids.page';

describe('BidsPage', () => {
  let component: BidsPage;
  let fixture: ComponentFixture<BidsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BidsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
