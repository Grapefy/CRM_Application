import { Customer } from './customer.model';
import { Service } from "./service.model";

export class ContractService{
    constructor(
        public id: number, 
        public servico: Service | string, 
        public cliente: Customer | string,
        public dt_adesao: Date | string,
        public dt_entrega: Date | string,
        public desconto?: number | string,
        public valor_desconto?: number | string,
        public valor_final?: number | string,
        ){
    }
}