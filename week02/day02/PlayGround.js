function Garden(length, width){
    this.length = length;
    this.width = width;
  }
  
  Garden.prototype.area = function(){
    return this.length * this.width;
  }
  
  Garden.prototype.circumference = function(){
    return 2 *(this.length + this.width);
  }
  
  Garden.prototype.efficiency = function(){
    return this.area()/this.circumference();
  }

function PlayGround(length, width, toys) {
  Garden.call(this. length, width);
  this.toys = toys;
}
  PlayGround.prototype = Object.create(Garden.prototype);
  PlayGround.prototype.constructor = Garden;

  PlayGround.prototype.add = function (toy) {
    this.toys.push(toy);
}