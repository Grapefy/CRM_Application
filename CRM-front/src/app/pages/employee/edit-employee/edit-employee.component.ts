import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.scss']
})
export class EditEmployeeComponent implements OnInit {

  onEdit = false; 
  employeeEditForm!: FormGroup;
  addressEditForm!: FormGroup;
  Offices = [
    { value: 'Desenvolvedor Júnior', label: 'Desenvolvedor Júnior'},
    { value: 'Desenvolvedor Pleno', label: 'Desenvolvedor Pleno' },
  ];
  employeeEditId!: number | string | null;
  addressEditId!: number | string | null;

  constructor(private lastRoute: ActivatedRoute, private fb: FormBuilder, private EmployeeService: EmployeeService) { }

  ngOnInit(): void {
    const id = this.lastRoute.snapshot.paramMap.get('id')
    this.employeeEditId = id;

    this.EmployeeService.readById(id).subscribe((funcionario: any) => {

      this.addressEditId = funcionario.funcionario.enderecos[0].id_endereco;

      this.employeeEditForm = this.fb.group({
        nome: [funcionario.funcionario.nome, Validators.required],
        email: [funcionario.funcionario.email, [Validators.required, Validators.email]],
        fone: [funcionario.funcionario.fone, Validators.required],
        dt_nascimento: [''],
      });
  
      this.addressEditForm = this.fb.group({
        cep: [funcionario.funcionario.enderecos[0].cep, Validators.required],
        logradouro: [funcionario.funcionario.enderecos[0].logradouro, Validators.required],
        uf: [funcionario.funcionario.enderecos[0].uf, Validators.required],
        bairro: [funcionario.funcionario.enderecos[0].bairro, Validators.required],
        numero: [funcionario.funcionario.enderecos[0].numero, Validators.required],
        complemento: ['CASA A'],
      });

      this.employeeEditForm.disable();
      this.addressEditForm.disable();

    })
  }

  onEditForm(){
    this.onEdit = true;
    this.employeeEditForm.enable();
    this.addressEditForm.enable();
  }
  
  offEditForm(){
    this.onEdit = false;
    this.employeeEditForm.disable();
    this.addressEditForm.disable();
  }

  submitForm() {
    var CF = {}
    var AF = {}
    CF = this.EmployeeService.generateArrayEmployee(this.employeeEditForm);
    AF = this.generateArrayAdress(this.addressEditForm);

    this.EmployeeService.update(JSON.stringify([CF,AF,this.employeeEditId,this.addressEditId]),this.employeeEditId).subscribe((result) => {
      console.log(result)
    })
  }

  generateArrayAdress(fg: any) {
    var retorno = {
      'bairro': fg.controls.bairro.value, 
      'cep': fg.controls.cep.value, 
      'logradouro': fg.controls.logradouro.value, 
      'numero': fg.controls.numero.value,
      'uf': fg.controls.uf.value
    };

    return retorno;

  }

}
