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

  //nome variavel: tipo = valor

  administradores: Administrador[] = [
    new Administrador(1,'Gabriel', 'gabriel-feliciano@gmail.com'),
    new Administrador(2,'Lucas', 'lucas-firmiano@gmail.com'),
    new Administrador(3,'Inácio', 'gabriel-inácio@gmail.com'),
    new Administrador(4,'bot', 'server-bot@gmail.com'),
    new Administrador(5,'bot', 'server-bot@gmail.com'),
    new Administrador(6,'bot', 'server-bot@gmail.com'),
  ];

  displayedColumns: string[] = ['id', 'nome', 'email','actions'];
  dataSource: MatTableDataSource<Administrador>;
  selectedName: string = '';
  selectedId: number = 0;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
    

  constructor(private dialogService: NbDialogService) { 
    this.dataSource = new MatTableDataSource(this.administradores);
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