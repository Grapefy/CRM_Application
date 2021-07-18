import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  
  constructor() {
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
