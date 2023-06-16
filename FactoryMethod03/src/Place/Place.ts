import Iitem from "./item/interface/Iitem";

export default abstract class Place{
    startItem() :void{
        const item = this.createItem();
        item.start()
    }
    protected abstract createItem() :Iitem;
}