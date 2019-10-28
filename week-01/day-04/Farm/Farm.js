/* #### Farm
- Reuse your `Animal` class
- Create a `Farm` class
  - it has list of Animals
  - it has slots which defines the number of free places for animals
  - breed() -> creates a new animal if there's place for it
  - slaughter() -> removes the least hungry animal
 */
const animal = require('\Animal');
 class Farm{
     constructor(slot){
         this.slot = slot;
         this.animals = [];
     }
     breed(){
         if(this.slot === 0){
             console.log('there is no space for it');
             return false;
         }
         this.slot--;
         this.animals.push(new animal());
         return true;
     }

     slaughter(){
         let id = 0;
         let min = Number.MAX_SAFE_INTEGER;
         for(let i = 0; i < this.animals.length; i++){
             if(this.animals[i] < min){
                 min = this.animals[i];
                 id = i;
             }
         }
     }

 }