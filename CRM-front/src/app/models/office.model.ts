import { Sector } from "./sector.model";

export class Office{
    constructor(
        public id: number,
        public cargo : string,
        public setor: Sector | string,
        public salario_bruto?: string,
        public descricao?: string,
    
    ){

    }
} 