import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PytaniaComponent } from './pytania.component';

describe('PytaniaComponent', () => {
  let component: PytaniaComponent;
  let fixture: ComponentFixture<PytaniaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PytaniaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PytaniaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
