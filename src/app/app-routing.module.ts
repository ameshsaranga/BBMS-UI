import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DonorsComponent } from './donors/donors.component';
import { DonationsComponent } from './donations/donations.component';
import { InventoryComponent } from './inventory/inventory.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path:"",
    component: AppComponent,
    children:[
      {
        path:"login",
        component:LoginComponent
      }
    ]
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "donors",
        component: DonorsComponent
      },
      {
        path: "donations",
        component: DonationsComponent
      },
      {
        path: "inventory",
        component: InventoryComponent
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
