import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { QrcamPage } from './qrcam.page';

describe('QrcamPage', () => {
  let component: QrcamPage;
  let fixture: ComponentFixture<QrcamPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QrcamPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(QrcamPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
