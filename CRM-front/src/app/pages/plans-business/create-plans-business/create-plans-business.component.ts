import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-plans-business',
  templateUrl: './create-plans-business.component.html',
  styleUrls: ['./create-plans-business.component.scss']
})
export class CreatePlansBusinessComponent implements OnInit {
  plansForm!: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.plansForm = this.fb.group({
      nome: ['', Validators.required],
      recorrencia: ['',Validators.required],
      valor: ['',Validators.required],
      detalhes: [''],
    });
  }
  

  submitForm() {
    // var SF = {}
    // SF = this.ServiceService.generateArrayService(this.serviceForm);

    // this.ServiceService.create(JSON.stringify(SF)).subscribe((result) => {
    //   this.AlertsService.showAlertSuccess('Verifique a tabela e veja mais informacoes', 'Servico Cadastrado!');
    //   setTimeout(() => {
    //     this.Router.navigate(['/service']);
    //   }, 2000);
    // })
  }

}
