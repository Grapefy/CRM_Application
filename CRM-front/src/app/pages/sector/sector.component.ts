import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService, NbToastrService } from '@nebular/theme';
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
  sectorForm!: FormGroup;
  

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(private dialogService: NbDialogService, private fb: FormBuilder, private toastrService: NbToastrService) { 
    this.dataSource = new MatTableDataSource(this.sectors);
  }

  ngOnInit(): void {
    this.sectorForm = this.fb.group({
    setor: ['', Validators.required],
    responsavel: ['',Validators.required],
    descricao: [''],
  });
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

  openDelete(dialog: TemplateRef<any>, setor: string, id: number) {
    this.selectedSector = setor
    this.selectedId = id
    this.dialogService.open(dialog);
  }

  openRegister(dialogCreate: TemplateRef<any>) {
    this.dialogService.open(dialogCreate);
  }

}
