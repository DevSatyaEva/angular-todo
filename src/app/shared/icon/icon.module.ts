import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './components/icon.component';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule],
  exports: [IconComponent],
})
export class IconModule {}

// Dynamic Icon Management
// iconRegistryService.addIcon('new-icon', `<svg>...</svg>`);
