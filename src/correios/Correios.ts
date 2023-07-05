import Icorreios from "./icorreios/Icorreios";

export default class Correios implements Icorreios{
    sendCorreios() {
        console.log("Correio: Sua entrega foi enviada")
    }
    reciveCorreios() {
        console.log("Correio: Sua entrega foi recebida")
    }

}