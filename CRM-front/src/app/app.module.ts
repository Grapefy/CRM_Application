import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule, NbLayoutModule, NbButtonModule, NbSidebarModule, NbMenuModule, NbCardModule, NbIconModule, NbActionsModule, NbUserComponent, NbUserModule, NbContextMenuModule, NbDialogModule, NbStepperModule, NbInputModule, NbDatepickerModule, NbRadioModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { MenuComponent } from './_components/_shared/menu/menu.component';
import { HeaderComponent } from './_components/_shared/header/header.component';
import { CustomerComponent } from './pages/customer/customer.component';
import {MatTableModule} from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { CreateCustomerComponent } from './pages/customer/create-customer/create-customer.component';
import { EditCustomerComponent } from './pages/customer/edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    CustomerComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
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
    NbRadioModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
