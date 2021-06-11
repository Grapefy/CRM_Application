import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { CreateAdministradorComponent } from './pages/administrador/create-administrador/create-administrador.component';
import { EditAdministradorComponent } from './pages/administrador/edit-administrador/edit-administrador.component';
import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';
import { OfficeComponent } from './pages/office/office.component';
import { EditSectorComponent } from './pages/sector/edit-sector/edit-sector.component';
import { SectorComponent } from './pages/sector/sector.component';

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

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
