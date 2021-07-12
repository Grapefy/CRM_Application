import { Sector } from 'src/app/models/sector.model';
export class Service{
    constructor(
        public id: number,
        public nome: string,
        public descricao?: string,
        public setorId?: Sector | string,
        public valor?: string | number
    ){

    }
} 