import { Address } from "./address.model";

export class Customer{
    constructor(
        public id: number, 
        public name: string, 
        public email: string,
        public fone?: string,
        public is_empresa ?: boolean,
        public indentificador?: string,
        public dt_nascimento?: Date | string,
        public endereco?: Address
        ){
    }
}