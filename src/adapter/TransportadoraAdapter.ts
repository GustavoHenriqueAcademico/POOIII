import Icorreios from "../correios/icorreios/Icorreios";
import Transportadora from "../transportadora/Transportadora";

export default class TransportadoraAdapter implements Icorreios{
    constructor(private transportadora : Transportadora){
        console.log("Adaptando Transportadora no Correios");
    }

    sendCorreios() : void {
        return this.transportadora.send();
    }
    reciveCorreios() :void {
        return this.transportadora.recive();
    }
    
}