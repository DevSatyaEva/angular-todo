import { Component } from '@angular/core';
import { TodoService } from 'src/app/core/todo.service';
import {
  IconCategory,
  IconPrefix,
} from 'src/app/shared/icon/models/icon.model';
import { IconService } from 'src/app/shared/icon/services/icon.service';
import { IconKeys } from 'src/app/shared/icon/utils/mullion-icons';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent {
  list = [
    'fix login bug',
    'fix PRs',
    'fix pp',
    'fix zxzxz',
    'Plan sprint',
    'plan docs',
    'update API',
    'Optimize DB',
    'Deploy app',
    'edit UI',
    'Write tests',
    'write feedback',
  ];
  searchTerm: string = ''; // Tracks the search term input
  completedStatus: string = ''; // variable initalization which tract the filter drop down.

  // todoList = this.todoService.getTodos(); // Fetch todos from the service

  category = IconCategory;
  prefix = IconPrefix;
  iconkey = IconKeys;

  constructor(
    public todoService: TodoService,
    private iconService: IconService
  ) {}

  ngOnInit(): void {
    this.iconService.loadIcons(
      IconCategory.MULLION,
      IconPrefix.MULLION_DROPDOWN
    );
    // this.iconService.loadIcons('user', 'sm');
    // this.iconService.loadIcons('social', 'sm');
    // this.iconService.loadIcons(IconCategory.SYSTEM, 'sm');
    // this.iconService.addIcons('custom', 'fa', ...this.customIcons);
    // this.iconService.addIconPacks('social', 'fa', [
    //   ...this.userIcons,
    //   ...this.systemIcons,
    // ]);
    // this.iconService.addIcon('custom', 'fa', 'upload-icon', this.customSvg);
  }

  onItemSelected(selectedItem: string) {
    console.log('Selected:', selectedItem);
  }
}
