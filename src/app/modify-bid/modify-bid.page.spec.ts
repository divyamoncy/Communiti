import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ModifyBidPage } from './modify-bid.page';

describe('ModifyBidPage', () => {
  let component: ModifyBidPage;
  let fixture: ComponentFixture<ModifyBidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModifyBidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ModifyBidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
