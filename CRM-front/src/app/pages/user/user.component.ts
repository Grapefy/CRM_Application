import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: User[] = [
    new User(1,'gabriel@grapefy.com', 'Administrador'),
    new User(2,'inacio@grapefy.com', 'Funcionário'),
  ];

  displayedColumns: string[] = ['id', 'email', 'permissao','actions'];
  dataSource = new MatTableDataSource<User>();
  selectedUser: string = '';
  selectedId: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(private dialogService: NbDialogService) { 
    this.dataSource = new MatTableDataSource(this.users);
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDelete(dialog: TemplateRef<any>, email: string, id: number) {
    this.selectedUser = email
    this.selectedId = id
    this.dialogService.open(dialog);
  }

}
