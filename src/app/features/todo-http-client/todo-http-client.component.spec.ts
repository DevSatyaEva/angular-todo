import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoHttpClientComponent } from './todo-http-client.component';

describe('TodoHttpClientComponent', () => {
  let component: TodoHttpClientComponent;
  let fixture: ComponentFixture<TodoHttpClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoHttpClientComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoHttpClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
