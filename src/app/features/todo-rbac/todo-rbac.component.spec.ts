import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoRBACComponent } from './todo-rbac.component';

describe('TodoRBACComponent', () => {
  let component: TodoRBACComponent;
  let fixture: ComponentFixture<TodoRBACComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoRBACComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoRBACComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
