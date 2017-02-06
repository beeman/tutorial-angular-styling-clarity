import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { MainComponent } from './layout/main/main.component';
import { ClarityModule } from 'clarity-angular';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
  ],
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MainComponent,
  ],
  exports: [
    LayoutComponent,
  ]
})
export class UiModule { }
