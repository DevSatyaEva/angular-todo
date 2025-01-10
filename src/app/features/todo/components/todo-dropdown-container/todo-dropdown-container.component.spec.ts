import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDropdownContainerComponent } from './todo-dropdown-container.component';

describe('TodoDropdownContainerComponent', () => {
  let component: TodoDropdownContainerComponent;
  let fixture: ComponentFixture<TodoDropdownContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDropdownContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDropdownContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
