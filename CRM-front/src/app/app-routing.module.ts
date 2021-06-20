import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { CreateAdministradorComponent } from './pages/administrador/create-administrador/create-administrador.component';
import { EditAdministradorComponent } from './pages/administrador/edit-administrador/edit-administrador.component';
import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';
import { EditOfficeComponent } from './pages/office/edit-office/edit-office.component';
import { OfficeComponent } from './pages/office/office.component';
import { EditSectorComponent } from './pages/sector/edit-sector/edit-sector.component';
import { SectorComponent } from './pages/sector/sector.component';
import { CreateEmployeeComponent } from './pages/employee/create-employee/create-employee.component';

const routes: Routes = [
  { path: 'customer', 
    component: CustomerComponent, 
  },
  {
    path: 'create-customer', 
    component: CreateCustomerComponent, 
  },
  {
    path: 'info-customer/:id',
    component: EditCustomerComponent, 
  },
  { path: 'administrador', 
    component: AdministradorComponent, 
  },
  {
    path: 'create-administrador',
    component: CreateAdministradorComponent
  },
  {
    path: 'info-administrador/:id',
    component: EditAdministradorComponent
  },
  {
    path: 'sector',
    component: SectorComponent
  },
  {
    path: 'info-sector/:id',
    component: EditSectorComponent, 
  },
  {
    path: 'office',
    component: OfficeComponent
  },
  {
    path: 'info-office/:id',
    component: EditOfficeComponent
  },
  {
    path: 'employee',
    component: EmployeeComponent
  },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent
  },
  {
    path: 'info-employee/:id',
    component: EditEmployeeComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
