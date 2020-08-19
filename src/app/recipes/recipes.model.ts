import { Ingradients } from '../shared/ingradients.model';

export class Recipes {
    public name: string;
    public description: string;
    public imagePath: string;
    public ingradients: Ingradients[];

    constructor(name: string, desc: string, imagePath: string, ingradients:Ingradients[]) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.ingradients = ingradients;
    }
}