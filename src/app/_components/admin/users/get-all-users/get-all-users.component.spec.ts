import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminGetAllUsersComponent } from './get-all-users.component';

describe('GetAllUsersComponent', () => {
  let component: AdminGetAllUsersComponent;
  let fixture: ComponentFixture<AdminGetAllUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminGetAllUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminGetAllUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
