import { ActivatedRoute } from '@angular/router';
import { ChangeDetectionStrategy, Component, OnInit, TemplateRef } from '@angular/core';
import { NbDialogService } from '@nebular/theme';
import { CustomerService } from 'src/app/services/customer.service';
import { ContractService } from 'src/app/models/contract-service.model';

@Component({
  selector: 'app-contract-customer',
  templateUrl: './contract-customer.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./contract-customer.component.scss']
})
export class ContractCustomerComponent implements OnInit {

  customerEditId!: number | string | null;
  nameCustomer!: string;

  servicesContract: ContractService[] = [
    new ContractService(1,'Serviço A', this.nameCustomer, '12/12/2020', '30/12/2022', 0, 0, 5000),
    new ContractService(2,'Serviço B', this.nameCustomer, '01/10/2020', '10/05/2022', 0, 0, 5000),
    new ContractService(3,'Serviço C', this.nameCustomer, '20/05/2020', '30/02/2022', 0, 0, 5000),
  ];

  

  constructor(private lastRoute: ActivatedRoute, private CustomerService: CustomerService, private dialogService: NbDialogService) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.customerEditId = id;

    this.CustomerService.readById(id).subscribe((cliente: any) => {
      this.nameCustomer = cliente.cliente.nome
    })

  }

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

}
