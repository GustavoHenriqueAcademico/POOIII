import GamePlace from "./Place/GamePlace";
import MoviePlace from "./Place/MoviePlace";
import Place from "./Place/Place";

declare var process;
let place: Place;

if(process.argv.includes("game")){
    place = new GamePlace();
    place.startItem();
}else if(process.argv.includes("movie")){
    place = new MoviePlace();
    place.startItem()
}else{
    console.log("Tipo de transporte invalido")
}