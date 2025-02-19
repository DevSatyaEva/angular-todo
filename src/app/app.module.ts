import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PortalModule } from '@angular/cdk/portal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TooltipComponent } from './shared/components/tooltip/tooltip.component';
import { OverlayModule } from '@angular/cdk/overlay';
import { TodoStatusPipe } from './shared/pipes/todo-status.pipe';

@NgModule({
  declarations: [AppComponent, TooltipComponent, TodoStatusPipe],
  imports: [BrowserModule, AppRoutingModule, PortalModule, OverlayModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
