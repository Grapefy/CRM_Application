import { UserService } from './../../services/user.service';
import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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

  permissao: any = [{value: 0, label:'Administrador'},{value: 1, label:'Funcionario'},{value: 2, label:'Cliente'}];
  displayedColumns: string[] = ['id', 'email', 'permissao','actions'];
  dataSource = new MatTableDataSource<User>();
  selectedUser: string = '';
  selectedId: number = 0;
  selectedPermissao: string = '';
  userForm!: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(private dialogService: NbDialogService, private fb: FormBuilder, private UserService: UserService) {
  }

  ngOnInit(): void {
    this.UserService.list().subscribe( (users: any) => {
      users.usuarios.forEach( (element: any) => {
        if (element.permissao == 0){
          element.permissao = 'Administrador';
        } else if (element.permissao == 1){
          element.permissao = 'Funcionario';
        } else {
          element.permissao = 'Cliente';
        }
      });
      this.dataSource.data = users.usuarios;
    })

  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  openDelete(dialog: TemplateRef<any>, email: string,
    id: number) {
    this.selectedUser = email,
    this.selectedId = id,
    this.dialogService.open(dialog);
  }

  openEdit(dialogEdit: TemplateRef<any>, email: string, id: number, permissao: string) {
    this.UserService.readById(id).subscribe((user: any) => {
      this.userForm = this.fb.group({
        email:[user.usuario.email, [Validators.required, Validators.email]],
        permissao: [user.usuario.permissao, Validators.required],
        senha: [user.usuario.senha,Validators.required],
      });
      this.dialogService.open(dialogEdit);
      this.selectedUser = email
      this.selectedId = id
      this.selectedPermissao = permissao
    })
  }

  submitDelete(id: number) {
    this.UserService.delete(id).subscribe( (result: any) => {
      window.location.reload();
    }, error => {
      window.location.reload();
    })
  }

  submitEdit() {
    var submitForm = this.UserService.generateArrayUser(this.userForm);
    this.UserService.update(JSON.stringify(submitForm), this.selectedId).subscribe( (result: any) => {
      window.location.reload();
    }, error => {
      window.location.reload();
    })
  }

}
