import { Address } from "./address.model";

export class Adminstrador{
    constructor(
        public id: number,
        public nome: string,
        public email: string,
        public fone?: string,
        public endereco?: Address 
    ){}
}