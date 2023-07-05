import Itransportadora from "./itrans/Itransportadora";

export default class Transportadora implements Itransportadora{
    send() {
        console.log("Transportadora: Sua entrega foi enviada")
    }
    recive() {
        console.log("Transportadora: Sua entrega foi recebida")
    }
}