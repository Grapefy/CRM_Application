import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-edit-service-customer',
  templateUrl: './edit-service-customer.component.html',
  styleUrls: ['./edit-service-customer.component.scss']
})
export class EditServiceCustomerComponent implements OnInit {

  customerEditId!: number | string | null;
  nameCustomer!: string;
  serviceCustomerForm!: FormGroup;
  status!: boolean;

  valor_adicional!: number | string;

  services: Service[] = [
    new Service(1,'Serviço A'),
    new Service(2,'Serviço B'),
    new Service(3,'Serviço C')
  ];

  constructor(private fb: FormBuilder, private lastRoute: ActivatedRoute, private CustomerService: CustomerService) { }

  ngOnInit(): void {

    this.serviceCustomerForm = this.fb.group({
      servico: [''],
      dt_adesao: [''],
      dt_entrega: [''],
      valor_desconto: [1000],
      valor_final: [5000],
    });
    
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.customerEditId = id;

    this.CustomerService.readById(id).subscribe((cliente: any) => {
      this.nameCustomer = cliente.cliente.nome
    })

    
  }


}
