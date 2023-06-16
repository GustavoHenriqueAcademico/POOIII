import Iitem from "./interface/Iitem";


export default class Game implements Iitem{
    start(): void {
        this.getDescription();
        console.log("O jogo começou...")
    }
    getDescription(): void {
        console.log("Descrição do jogo")
    }
}