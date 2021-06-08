import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService } from '@nebular/theme';
import { Sector } from 'src/app/models/sector.model';

@Component({
  selector: 'app-sector',
  templateUrl: './sector.component.html',
  styleUrls: ['./sector.component.scss']
})
export class SectorComponent implements OnInit {

  sectors: Sector[] = [
    new Sector(1,'TI', 'Gabriel'),
    new Sector(2,'RH', 'Lucas'),
  ];

  displayedColumns: string[] = ['id', 'setor', 'responsavel','actions'];
  dataSource: MatTableDataSource<Sector>;
  selectedSector: string = '';
  selectedId: number = 0;
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(private dialogService: NbDialogService) { 
    this.dataSource = new MatTableDataSource(this.sectors);
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

  open(dialog: TemplateRef<any>, setor: string, id: number) {
    this.selectedSector = setor
    this.selectedId = id
    this.dialogService.open(dialog);
  }

}
