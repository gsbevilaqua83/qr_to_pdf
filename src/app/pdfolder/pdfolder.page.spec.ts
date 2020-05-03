import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PdfolderPage } from './pdfolder.page';

describe('PdfolderPage', () => {
  let component: PdfolderPage;
  let fixture: ComponentFixture<PdfolderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PdfolderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PdfolderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
