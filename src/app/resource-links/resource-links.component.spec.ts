import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResourceLinksComponent } from './resource-links.component';

describe('ResourceLinksComponent', () => {
  let component: ResourceLinksComponent;
  let fixture: ComponentFixture<ResourceLinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResourceLinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResourceLinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
