export class User{
    constructor(
        public id: number,
        public email: string,
        public permissao: string | number,
        public senha?: string,
    
    ){

    }
} 