import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { SidePanelComponent } from './side-panel/side-panel.component';
import { NotificationPanelComponent } from './side-panel/notification-panel/notification-panel.component';
import { UserProfilePanelComponent } from './side-panel/user-profile-panel/user-profile-panel.component';
import { ModuleSwitchPanelComponent } from './side-panel/module-switch-panel/module-switch-panel.component';

@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    SidebarComponent,
    FooterComponent,
    SidePanelComponent,
    NotificationPanelComponent,
    UserProfilePanelComponent,
    ModuleSwitchPanelComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
