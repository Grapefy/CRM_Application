import { Router } from '@angular/router';
import { LoginService } from './../../services/shared/login.service';
import { AdministratorService } from './../../services/administrator.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';
import { Administrador } from 'src/app/models/administrador.model';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.scss']
})
export class AdministradorComponent implements OnInit {

  displayedColumns: string[] = ['id', 'nome', 'email','actions'];
  dataSource = new MatTableDataSource<Administrador>();
  selectedName: string = '';
  selectedId: number = 0;

  @ViewChild(MatPaginator) 
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private dialogService: NbDialogService, private AdministratorService: AdministratorService, private LoginService: LoginService, private Router: Router) { 
  }

  ngOnInit(): void {
    this.LoginService.canAccess('administradores').subscribe((userCanAccess: any) => {
      if (!userCanAccess.message) {
        this.Router.navigate(['customer'])
      }
    })
    this.AdministratorService.list().subscribe( (administradors: any) => {
      this.dataSource.data = administradors.administradors;
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
    this.AdministratorService.delete(id).subscribe( (result: any) => {
      window.location.reload();
    }, error => {
      window.location.reload();
    })
  }

}
