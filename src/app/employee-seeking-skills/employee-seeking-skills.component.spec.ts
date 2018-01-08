import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeSeekingSkillsComponent } from './employee-seeking-skills.component';

describe('EmployeeSeekingSkillsComponent', () => {
  let component: EmployeeSeekingSkillsComponent;
  let fixture: ComponentFixture<EmployeeSeekingSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeSeekingSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeSeekingSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
