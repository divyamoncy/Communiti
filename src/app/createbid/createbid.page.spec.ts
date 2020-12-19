import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CreatebidPage } from './createbid.page';

describe('CreatebidPage', () => {
  let component: CreatebidPage;
  let fixture: ComponentFixture<CreatebidPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatebidPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CreatebidPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
