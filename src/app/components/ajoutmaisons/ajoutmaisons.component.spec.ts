import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutmaisonsComponent } from './ajoutmaisons.component';

describe('AjoutmaisonsComponent', () => {
  let component: AjoutmaisonsComponent;
  let fixture: ComponentFixture<AjoutmaisonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutmaisonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutmaisonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
