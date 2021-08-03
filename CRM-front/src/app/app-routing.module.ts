import { AuthGuard } from './services/shared/auth.guard';
import { PlansBusinessComponent } from './pages/plans-business/plans-business.component';
import { CreateServicoComponent } from './pages/servico/create-servico/create-servico.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { UserComponent } from './pages/user/user.component';
import { LoginComponent } from './pages/login/login.component';
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
import { EditServicoComponent } from './pages/servico/edit-servico/edit-servico.component';
import { PlansEditBusinessComponent } from './pages/plans-business/plans-edit-business/plans-edit-business.component';
import { CreatePlansBusinessComponent } from './pages/plans-business/create-plans-business/create-plans-business.component';

const routes: Routes = [
  { path: '', 
    component: LoginComponent, 
  },
  { path: 'customer', 
    component: CustomerComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'create-customer', 
    component: CreateCustomerComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'info-customer/:id',
    component: EditCustomerComponent, 
    canActivate: [AuthGuard]
  },
  { path: 'administrador', 
    component: AdministradorComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'create-administrador',
    component: CreateAdministradorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'info-administrador/:id',
    component: EditAdministradorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'sector',
    component: SectorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'info-sector/:id',
    component: EditSectorComponent, 
    canActivate: [AuthGuard]
  },
  {
    path: 'office',
    component: OfficeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'info-office/:id',
    component: EditOfficeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employee',
    component: EmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-employee',
    component: CreateEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'info-employee/:id',
    component: EditEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'user',
    component: UserComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'service',
    component: ServicoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'create-service',
    component: CreateServicoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'edit-service/:id',
    component: EditServicoComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'plans',
    component: PlansBusinessComponent
  },
  {
    path: 'create-plan-business',
    component: CreatePlansBusinessComponent
  },
  {
    path: 'edit-plans/:id',
    component: PlansEditBusinessComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes),
            RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
