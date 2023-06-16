import IItem from "./interface/Iitem";


export default class Movie implements IItem{
    start() :void {
        this.getDescription();
        console.log("Começou o filme...")
    }
    getDescription() :void{
        console.log("Descrição do Filme...")
    }
}