export class RecaudoVehiculo {

    constructor(
        public id: number,
        public estacion: string,
        public categoria: string,
        public sentido: string,
        public hora: number,
        public valorTabuldo: number
    ) {

    }
}