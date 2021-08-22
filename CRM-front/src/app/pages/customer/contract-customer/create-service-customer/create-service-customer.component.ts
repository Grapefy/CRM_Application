import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Service } from 'src/app/models/service.model';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-create-service-customer',
  templateUrl: './create-service-customer.component.html',
  styleUrls: ['./create-service-customer.component.scss']
})
export class CreateServiceCustomerComponent implements OnInit {

  customerEditId!: number | string | null;
  nameCustomer!: string;
  serviceCustomerForm!: FormGroup;

  services: Service[] = [
    new Service(1,'Serviço A'),
    new Service(2,'Serviço B'),
    new Service(3,'Serviço C')
  ];

  constructor(private fb: FormBuilder, private lastRoute: ActivatedRoute, private CustomerService: CustomerService) { }

  ngOnInit(): void {
    this.serviceCustomerForm = this.fb.group({
      servico: ['', Validators.required],
      dt_adesao: ['', Validators.required],
      dt_entrega: ['', Validators.required],
      valor_final: ['', Validators.required],
    });

    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.customerEditId = id;

    this.CustomerService.readById(id).subscribe((cliente: any) => {
      this.nameCustomer = cliente.cliente.nome
      console.log(this.nameCustomer)
    })

  }
}
