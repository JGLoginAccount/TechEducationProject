import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeOfferingSkillsComponent } from './employee-offering-skills.component';

describe('EmployeeOfferingSkillsComponent', () => {
  let component: EmployeeOfferingSkillsComponent;
  let fixture: ComponentFixture<EmployeeOfferingSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeOfferingSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeOfferingSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
