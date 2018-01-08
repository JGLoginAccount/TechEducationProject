import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeNeedingSkillComponent } from './employee-needing-skill.component';

describe('EmployeeNeedingSkillComponent', () => {
  let component: EmployeeNeedingSkillComponent;
  let fixture: ComponentFixture<EmployeeNeedingSkillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeNeedingSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeNeedingSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
