import TransportadoraAdapter from "./adapter/TransportadoraAdapter";
import Icorreios from "./correios/icorreios/Icorreios";
import Transportadora from "./transportadora/Transportadora";
import Itransportadora from "./transportadora/itrans/Itransportadora";

const order : Icorreios = new TransportadoraAdapter(new Transportadora());
order.sendCorreios();
order.reciveCorreios();
order.