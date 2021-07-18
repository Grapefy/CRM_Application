import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-address-form',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss']
})
export class AddressComponent implements OnInit {

  
  adressForm!: FormGroup;

  @Output()
  formAddress = new EventEmitter(); 
  
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    this.adressForm = this.fb.group({
      cep: ['', Validators.required],
      logradouro: ['', Validators.required],
      uf: ['', Validators.required],
      bairro: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: [''],
    });

  }

  sendForm(){
    this.formAddress.emit(this.adressForm)
  }

}
