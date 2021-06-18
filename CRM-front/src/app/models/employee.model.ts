import { Address } from "./address.model";

export class Employee{
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public fone?: string,
        public dt_nascimento?: Date | string,
        public endereco?: Address 
    ){}
}