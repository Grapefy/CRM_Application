import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';

const routes: Routes = [
  { path: 'customer', 
    component: CustomerComponent, 
    
    // children: [
    //   {
    //     path: 'register', 
    //     component: CreateCustomerComponent, 
    //   },
    //   {
    //     path: 'info',
    //     component: EditCustomerComponent, 
    //   },
    // ],
  },
  {
    path: 'create-customer', 
    component: CreateCustomerComponent, 
  },
  {
    path: 'info-customer',
    component: EditCustomerComponent, 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
