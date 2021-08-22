import { EmployeeService } from './../../services/employee.service';
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

  displayedColumns: string[] = ['id', 'nome', 'email','actions'];
  dataSource = new MatTableDataSource<Employee>();
  selectedName: string = '';
  selectedId: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
    
  constructor(private dialogService: NbDialogService, private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    this.EmployeeService.list().subscribe( (funcionarios: any) => {
      this.dataSource.data = funcionarios.funcionarios;
    })
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

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
    this.EmployeeService.delete(id).subscribe( (result: any) => {
      console.log(result)
    }, error => {
      window.location.reload();
    })
  }

}