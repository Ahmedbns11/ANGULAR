import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutchambreComponent } from './ajoutchambre.component';

describe('AjoutchambreComponent', () => {
  let component: AjoutchambreComponent;
  let fixture: ComponentFixture<AjoutchambreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutchambreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutchambreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
