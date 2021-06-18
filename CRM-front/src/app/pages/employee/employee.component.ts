import { Employee } from './../../models/employee.model';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [
    new Employee(1,'Gabriel', 'gabriel-feliciano@gmail.com'),
    new Employee(2,'Lucas', 'lucas-firmiano@gmail.com'),
    new Employee(3,'Inácio', 'gabriel-inácio@gmail.com'),
    new Employee(4,'bot', 'server-bot@gmail.com'),
    new Employee(5,'bot', 'server-bot@gmail.com'),
    new Employee(6,'bot', 'server-bot@gmail.com'),
  ];

  displayedColumns: string[] = ['id', 'nome', 'email','actions'];
  dataSource: MatTableDataSource<Employee>;
  selectedName: string = '';
  selectedId: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
    

  constructor(private dialogService: NbDialogService) { 
    this.dataSource = new MatTableDataSource(this.employees);
  }


  ngOnInit(): void {
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

}