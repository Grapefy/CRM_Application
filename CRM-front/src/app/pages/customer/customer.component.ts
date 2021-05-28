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

  customers: Customer[] = [
    new Customer(1,'Gabriel', 'gabriel-feliciano@gmail.com'),
    new Customer(2,'Lucas', 'lucas-firmiano@gmail.com'),
    new Customer(3,'Inácio', 'gabriel-inácio@gmail.com'),
    new Customer(4,'bot', 'server-bot@gmail.com'),
    new Customer(5,'bot', 'server-bot@gmail.com'),
    new Customer(6,'bot', 'server-bot@gmail.com'),
    new Customer(7,'bot', 'server-bot@gmail.com'),
    new Customer(8,'bot', 'server-bot@gmail.com'),
  ];
  
  displayedColumns: string[] = ['id', 'nome', 'email','actions'];
  dataSource: MatTableDataSource<Customer>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  ngOnInit(): void {
  }

  constructor(private dialogService: NbDialogService) {
    this.dataSource = new MatTableDataSource(this.customers);
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

  open(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog);
  }

  onSelected(){

  }
}


  

