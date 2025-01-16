import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoIndexdbComponent } from './todo-indexdb.component';

describe('TodoIndexdbComponent', () => {
  let component: TodoIndexdbComponent;
  let fixture: ComponentFixture<TodoIndexdbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoIndexdbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoIndexdbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
