import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoDynamicComponentComponent } from './todo-dynamic-component.component';

describe('TodoDynamicComponentComponent', () => {
  let component: TodoDynamicComponentComponent;
  let fixture: ComponentFixture<TodoDynamicComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoDynamicComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoDynamicComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
