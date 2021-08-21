import { SectorService } from './../../services/sector.service';
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

  displayedColumns: string[] = ['id', 'setor', 'responsavel','actions'];
  dataSource = new MatTableDataSource<Sector>();
  selectedSector: string = '';
  selectedId: number = 0;
  sectorForm!: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(private dialogService: NbDialogService, private fb: FormBuilder, private toastrService: NbToastrService, private SectorService: SectorService) {
  }

  ngOnInit(): void {
    this.SectorService.list().subscribe( (setores: any) => {
      this.dataSource.data = setores.setors;
    })
    this.sectorForm = this.fb.group({
      setor: ['', Validators.required],
      responsavel: ['',Validators.required],
      descricao: [''],
    });
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

  openDelete(dialog: TemplateRef<any>, setor: string, id: number) {
    this.selectedSector = setor
    this.selectedId = id
    this.dialogService.open(dialog);
  }

  openRegister(dialogCreate: TemplateRef<any>) {
    this.dialogService.open(dialogCreate);
  }

  submitForm() {
    var SF = {}
    SF = this.generateArraySetor(this.sectorForm);
    this.SectorService.create(JSON.stringify(SF)).subscribe((result) => {
      console.log(result)
    })
  }

  generateArraySetor(fg: any) {
    var retorno = {
      'setor': fg.controls.setor.value, 
      'responsavel': fg.controls.responsavel.value, 
      'descricao': fg.controls.descricao.value,
    };
    return retorno;
  }

  submitDelete(id: number) {
    this.SectorService.delete(id).subscribe( (result: any) => {
      window.location.reload();
    }, error => {
      window.location.reload();
    })
  }

}
