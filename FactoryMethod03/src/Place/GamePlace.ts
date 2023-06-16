import Place from "./Place";
import Iitem from "./item/interface/Iitem";
import Game from "./item/Game";

export default class GamePlace extends Place{
    protected createItem(): Iitem {
        return new Game();
    }
}