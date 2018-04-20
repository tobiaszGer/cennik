import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WyborProjektuComponent } from './wybor-projektu.component';

describe('WyborProjektuComponent', () => {
  let component: WyborProjektuComponent;
  let fixture: ComponentFixture<WyborProjektuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WyborProjektuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WyborProjektuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
