import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemovedTodoItemsComponent } from './removed-todo-items.component';

describe('RemovedTodoItemsComponent', () => {
  let component: RemovedTodoItemsComponent;
  let fixture: ComponentFixture<RemovedTodoItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemovedTodoItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemovedTodoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
