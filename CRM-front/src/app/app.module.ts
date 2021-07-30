import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbActionsModule, NbUserComponent, NbUserModule, NbContextMenuModule, NbDialogModule, NbStepperModule, NbInputModule, NbDatepickerModule, NbRadioModule, NbToastrModule, NbSelectComponent, NbSelectModule, NbCheckboxComponent, NbCheckboxModule, NbFormFieldModule, NbAccordionModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MenuComponent } from './_components/_shared/menu/menu.component';
import { HeaderComponent } from './_components/_shared/header/header.component';
import { CustomerComponent } from './pages/customer/customer.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';
import { AdministradorComponent } from './pages/administrador/administrador.component';
import { CreateAdministradorComponent } from './pages/administrador/create-administrador/create-administrador.component';
import { EditAdministradorComponent } from './pages/administrador/edit-administrador/edit-administrador.component';
import { SectorComponent } from './pages/sector/sector.component';
import { HttpClientModule } from '@angular/common/http';
import { EditSectorComponent } from './pages/sector/edit-sector/edit-sector.component';
import { OfficeComponent } from './pages/office/office.component';
import { EditOfficeComponent } from './pages/office/edit-office/edit-office.component';
import { NgxMaskModule } from 'ngx-mask';
import { NgxCurrencyModule } from 'ngx-currency';
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
