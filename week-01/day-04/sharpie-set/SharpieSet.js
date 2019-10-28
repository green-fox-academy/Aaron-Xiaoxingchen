/* Reuse your Sharpie class
Create SharpieSet class
it contains a list of Sharpie
countUsable() -> sharpie is usable if it has ink in it
removeTrash() -> removes all unusable sharpies */
const sharpie = require('\Sharpie');

class SharpieSet {
    constructor(){
        this.Sharpies = [];
    }
    add(sharpie){
        this.Sharpies.push(sharpie);
    }

    countUsable(){
        let amount = 0;
        for(let i = 0; i < this.Sharpies.length; i++) {
            if(this.Sharpies[i].inkAmount > 0){
                amount++;
            }
        }
        return amount;
    }

    removeTrash(){
        this.Sharpies = this.Sharpies.filter((item) => {
            return item.inkAmount > 0;
        });
    }

}


    test = new SharpieSet();
    console.log(`count usable sharpie: ${test.countUsable()}`);
    test.removeTrash();
    console.log(test.list);
