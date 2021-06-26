import { SectorService } from './../../../services/sector.service';
import { OfficeService } from './../../../services/office.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-office',
  templateUrl: './edit-office.component.html',
  styleUrls: ['./edit-office.component.scss']
})
export class EditOfficeComponent implements OnInit {

  // Sectors = [
  //   { value: 'TI', label: 'TI'},
  //   { value: 'RH', label: 'RH' },
  // ];

  Sectors: any = [];
  onEdit = false; 
  officeEditId!: number | string | null;
  officeEditForm!: FormGroup;

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder, private OfficeService: OfficeService, private SectorService: SectorService) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.officeEditId = id

    this.SectorService.list().subscribe( (setores: any) => {
      setores.setors.forEach( (element: any) => {
        this.Sectors.push({value: element.id_setor, label: element.nome})
      });
    })

    this.OfficeService.readById(id).subscribe((office: any) => {
      this.officeEditForm = this.fb.group({
        cargo: [office.cargo.nome, Validators.required],
        setor: [office.cargo.setor_id,Validators.required],
        salario_bruto: [office.cargo.salario_bruto,Validators.required],
        descricao: [office.cargo.descricao],
      });
    
      this.officeEditForm.disable();
    })

  }

  onEditForm(){
    this.onEdit = true;
    this.officeEditForm.enable();
  }
  
  offEditForm(){
    this.onEdit = false;
    this.officeEditForm.disable();
  }

  submitForm() {
    var OF = {}
    OF = this.generateArrayCargo(this.officeEditForm);

    this.OfficeService.update(JSON.stringify(OF),this.officeEditId).subscribe((result) => {
      console.log(result)
    })
  }

  generateArrayCargo(fg: any) {
    var retorno = {
      'cargo': fg.controls.cargo.value, 
      'descricao': fg.controls.descricao.value, 
      'salario_bruto': fg.controls.salario_bruto.value,
      'setor_id': fg.controls.setor.value
    };
    return retorno;
  }


}
