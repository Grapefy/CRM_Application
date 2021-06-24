import { SectorService } from './../../../services/sector.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-sector',
  templateUrl: './edit-sector.component.html',
  styleUrls: ['./edit-sector.component.scss']
})
export class EditSectorComponent implements OnInit {

  onEdit = false; 
  sectorEditForm!: FormGroup;
  sectorEditId!: number | string | null;

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder, private SectorService: SectorService) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.sectorEditId = id;

    this.SectorService.readById(id).subscribe((setors: any) => {

      this.sectorEditForm = this.fb.group({
        setor: [setors.setor.nome, Validators.required],
        responsavel: [setors.setor.responsavel,Validators.required],
        descricao: [setors.setor.descricao],
      });
    
      this.sectorEditForm.disable();
    })
  }

  onEditForm(){
    this.onEdit = true;
    this.sectorEditForm.enable();
  }
  
  offEditForm(){
    this.onEdit = false;
    this.sectorEditForm.disable();
  }

  submitForm() {
    var SF = {}
    SF = this.generateArraySetor(this.sectorEditForm);

    console.log(SF)

    this.SectorService.update(JSON.stringify(SF), this.sectorEditId).subscribe((result) => {
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

}
