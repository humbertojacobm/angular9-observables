export class PeriodicElement
{
    name: string;
    position: number;
    weight: number;
    symbol: string;
    constructor(
        entity: any 
    ){
        this.name = entity.name;
        this.position = entity.position;
        this.weight = entity.weight;
        this.symbol = entity.symbol;
    }
}