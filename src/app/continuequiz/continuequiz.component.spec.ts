import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContinuequizComponent } from './continuequiz.component';

describe('ContinuequizComponent', () => {
  let component: ContinuequizComponent;
  let fixture: ComponentFixture<ContinuequizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContinuequizComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContinuequizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
