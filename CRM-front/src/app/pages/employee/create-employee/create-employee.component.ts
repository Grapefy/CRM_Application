import { Router } from '@angular/router';
import { AlertsService } from './../../../services/shared/alerts.service';
import { EmployeeService } from './../../../services/employee.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  Offices = [
    { value: 'Desenvolvedor Júnior', label: 'Desenvolvedor Júnior'},
    { value: 'Desenvolvedor Pleno', label: 'Desenvolvedor Pleno' },
  ];

  linearMode = true;
  employeeForm!: FormGroup;
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder, private EmployeeService: EmployeeService, private AlertsService: AlertsService, private Router: Router) { }

  ngOnInit(): void {
    this.employeeForm = this.fb.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // cargo: ['', Validators.required],
      fone: ['', Validators.required],
      dt_nascimento: ['', Validators.required],
    });

  }

  getAddressForm(event:any){
    this.addressForm = event.value
  }

  // FUNCAO TESTE QUE ME BASEEI PRA VERIFICAR COMO OBTER OS PARAMETROS PRO BD (NAO APAGAR ELA)
  submitForm() {
    var EF = {}
    EF = this.EmployeeService.generateArrayEmployee(this.employeeForm);

    // console.log(this.addressForm)

    this.EmployeeService.create(JSON.stringify([EF,this.addressForm])).subscribe((result) => {
      this.AlertsService.showAlertSuccess('Verifique a tabela e veja mais informacoes', 'Funcionario Cadastrado!');
      setTimeout(() => {
        this.Router.navigate(['/employee']);
      }, 1500);
    })
  }

}
