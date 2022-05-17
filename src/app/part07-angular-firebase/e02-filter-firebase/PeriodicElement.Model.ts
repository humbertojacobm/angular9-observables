export class PeriodicElement
{
    name: string;
    position: number;
    weightxx: number;
    symbol: string;
    constructor(
        entity: any 
    ){
        this.name = entity.name;
        this.position = entity.position;
        this.weightxx = entity.weight;
        this.symbol = entity.symbol;
    }
}