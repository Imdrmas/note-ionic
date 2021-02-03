import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FindNotePage } from './find-note.page';

describe('FindNotePage', () => {
  let component: FindNotePage;
  let fixture: ComponentFixture<FindNotePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindNotePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FindNotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
