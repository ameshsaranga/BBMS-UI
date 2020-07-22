import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AppComponent } from './app.component';

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
        loadChildren:"./login/login.module#LoginModule"
      }
    ]
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "dashboard",
        loadChildren: "./dashboard/dashboard.module#DashboardModule"
      },
      {
        path: "donors",
        loadChildren: "./donors/donors.module#DonorsModule"
      },
      {
        path: "donations",
        loadChildren: "./donations/donations.module#DonationsModule"
      },
      {
        path: "inventory",
        loadChildren: "./inventory/inventory.module#InventoryModule"
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
