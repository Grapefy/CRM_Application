import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { NbDialogService, NbToastrService } from '@nebular/theme';
import { Office } from 'src/app/models/office.model';

@Component({
  selector: 'app-office',
  templateUrl: './office.component.html',
  styleUrls: ['./office.component.scss']
})
export class OfficeComponent implements OnInit {

  Sectors = [
    { value: 'TI', label: 'TI'},
    { value: 'RH', label: 'RH' },
  ];


  offices: Office[] = [
    new Office(1,'Desenvolvedor Júnior', 'TI'),
    new Office(2,'Desenvolvedor Pleno', 'TI'),
  ];

  displayedColumns: string[] = ['id', 'cargo', 'setor','actions'];
  dataSource: MatTableDataSource<Office>;
  selectedOffice: string = '';
  selectedId: number = 0;
  officeForm!: FormGroup;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;
  
  constructor(private dialogService: NbDialogService, private fb: FormBuilder, private toastrService: NbToastrService) { 
    this.dataSource = new MatTableDataSource(this.offices);  }

  ngOnInit(): void {
    this.officeForm = this.fb.group({
      cargo:['', Validators.required],
      setor: ['', Validators.required],
      salario_bruto: ['',Validators.required],
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

  openDelete(dialog: TemplateRef<any>, cargo: string, id: number) {
    this.selectedOffice = cargo
    this.selectedId = id
    this.dialogService.open(dialog);
  }

  openRegister(dialogCreate: TemplateRef<any>) {
    this.dialogService.open(dialogCreate);
  }


}
