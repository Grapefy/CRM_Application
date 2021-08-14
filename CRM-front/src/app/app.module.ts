import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { HttpClientModule } from '@angular/common/http';

import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbActionsModule, NbUserModule, NbContextMenuModule, NbDialogModule, NbStepperModule, NbInputModule, NbDatepickerModule, NbRadioModule, NbToastrModule,  NbSelectModule,  NbCheckboxModule, NbFormFieldModule, NbAccordionModule, NbTabsetModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './_components/_shared/menu/menu.component';
import { HeaderComponent } from './_components/_shared/header/header.component';
import { CustomerComponent } from './pages/customer/customer.component';
import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { CreateAdministradorComponent } from './pages/administrador/create-administrador/create-administrador.component';
import { EditAdministradorComponent } from './pages/administrador/edit-administrador/edit-administrador.component';
import { SectorComponent } from './pages/sector/sector.component';
import { EditSectorComponent } from './pages/sector/edit-sector/edit-sector.component';
import { OfficeComponent } from './pages/office/office.component';
import { EditOfficeComponent } from './pages/office/edit-office/edit-office.component';
import { EmployeeComponent } from './pages/employee/employee.component';
import { CreateEmployeeComponent } from './pages/employee/create-employee/create-employee.component';
import { EditEmployeeComponent } from './pages/employee/edit-employee/edit-employee.component';
import { LoginComponent } from './pages/login/login.component';
import { AddressComponent } from './_components/_shared/address/address.component';
import { UserComponent } from './pages/user/user.component';
import { ServicoComponent } from './pages/servico/servico.component';
import { CreateServicoComponent } from './pages/servico/create-servico/create-servico.component';
import { EditServicoComponent } from './pages/servico/edit-servico/edit-servico.component';
import { ModalDeleteComponent } from './_components/_shared/modals/modal-delete/modal-delete.component';
import { PlansBusinessComponent } from './pages/plans-business/plans-business.component';
import { PlansEditBusinessComponent } from './pages/plans-business/plans-edit-business/plans-edit-business.component';
import { CreatePlansBusinessComponent } from './pages/plans-business/create-plans-business/create-plans-business.component';
import { ContractCustomerComponent } from './pages/customer/contract-customer/contract-customer.component';
import { CreateServiceCustomerComponent } from './pages/customer/contract-customer/create-service-customer/create-service-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    AdministradorComponent,
    CreateAdministradorComponent,
    EditAdministradorComponent,
    SectorComponent,
    EditSectorComponent,
    OfficeComponent,
    EditOfficeComponent,
    EmployeeComponent,
    CreateEmployeeComponent,
    EditEmployeeComponent,
    LoginComponent,
    AddressComponent,
    UserComponent,
    ServicoComponent,
    CreateServicoComponent,
    EditServicoComponent,
    ModalDeleteComponent,
    PlansBusinessComponent,
    PlansEditBusinessComponent,
    CreatePlansBusinessComponent,
    ContractCustomerComponent,
    CreateServiceCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbEvaIconsModule,
    NbButtonModule,
    NbMenuModule.forRoot(),
    NbCardModule,
    NbIconModule,
    NbActionsModule,
    NbUserModule,
    NbTabsetModule,
    NbContextMenuModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    NbDialogModule.forRoot(),
    NbStepperModule,
    NbInputModule,
    NbDatepickerModule.forRoot(),
    NbRadioModule,
    ReactiveFormsModule,
    NbToastrModule.forRoot(),
    NbSelectModule,
    NgxMaskModule.forRoot({
      dropSpecialCharacters: false
    }),
    NgxCurrencyModule.forRoot({
      align: "left",
      allowNegative: true,
      allowZero: true,
      decimal: ",",
      precision: 2,
      prefix: "R$ ",
      suffix: "",
      thousands: ".",
      nullable: true
    }),
    HttpClientModule,
    NbCheckboxModule,
    NbFormFieldModule,
    NbAccordionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
