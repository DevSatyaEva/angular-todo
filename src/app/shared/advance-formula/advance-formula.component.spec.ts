import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvanceFormulaComponent } from './advance-formula.component';

describe('AdvanceFormulaComponent', () => {
  let component: AdvanceFormulaComponent;
  let fixture: ComponentFixture<AdvanceFormulaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvanceFormulaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvanceFormulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
