import Place from "./Place";
import Iitem from "./item/interface/Iitem";
import Movie from "./item/movie";

export default class MoviePlace extends Place{
    protected createItem() :Iitem{
        return new Movie();
    }
}