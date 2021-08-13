import { CustomerService } from './../../services/customer.service';
import { Component, EventEmitter, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';
import { Customer } from 'src/app/models/customer.model';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.scss']
})
export class CustomerComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'nome', 'email','actions'];
  dataSource =  new MatTableDataSource<Customer>();
  selectedName: string = '';
  selectedId: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
    this.CustomerService.list().subscribe( (clientes: any) => {
      this.dataSource.data = clientes.clientes;
    })
  }

  constructor(private dialogService: NbDialogService, private CustomerService: CustomerService) {
  }
  
  //INICIAR PÁGINAÇÃO E QTD DE ITENS
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  //FILTRO
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  open(dialog: TemplateRef<any>, nome: string, id: number) {
    this.selectedName = nome
    this.selectedId = id
    this.dialogService.open(dialog);
  }

  submitDelete(id: number) {
    this.CustomerService.delete(id).subscribe( (result: any) => {
      window.location.reload();
    }, error => {
      window.location.reload();
    })
  }
}


  

