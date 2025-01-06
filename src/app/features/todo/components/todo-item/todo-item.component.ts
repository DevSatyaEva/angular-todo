import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss'],
})
export class TodoItemComponent {
  @Input() todo: any; // Receive a single to-do item
  @Input() index!: number; // Receive the index of the item
  @Output() delete = new EventEmitter<number>(); // Emit delete event
  @Output() edit = new EventEmitter<number>(); // Emit edit event / Output to edit a to-do item
  @Output() viewDetail = new EventEmitter<any>(); // Emit event to view details
  @Output() toggleComplete = new EventEmitter<any>(); // Emit event when toggling the complete status

  onDelete() {
    this.delete.emit(this.index); // Emit the index for deletion
  }

  onEdit() {
    this.edit.emit(this.index); // Emit the index for editing
  }

  onViewDetail() {
    console.log('Navigating to todo detail for:', this.todo);
    this.viewDetail.emit(this.todo); // Emit the todo to view its details
  }

  onToggleComplete() {
    // Emit the toggled status of the completed property
    this.toggleComplete.emit(this.todo);
  }
}
