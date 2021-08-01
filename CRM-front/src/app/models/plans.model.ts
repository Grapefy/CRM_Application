import { PlanType } from "./plan-type.model";

export class PlansSystem{
    constructor(
        public id: number,
        public nome: string,
        public recorrencia?: string,
        public valor?: number | string,
        public detalhes?: string,
        public tipo_planoId?: PlanType | any
    
    ){

    }
} 

export class PlansSite{
    constructor(
        public id: number,
        public nome: string,
        public recorrencia?: string,
        public valor?: number | string,
        public detalhes?: string,
        public tipo_planoId?: PlanType | any
    
    ){

    }
} 