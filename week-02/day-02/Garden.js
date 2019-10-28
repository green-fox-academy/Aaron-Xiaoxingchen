//ES5
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

//ES6
class Garden{
  constructor(width, length){
    this.width = width;
    this.length = length;  
  }

  area(){
    return this.width * this.length;
  }

  circumference(){
    return 2*(this.width + this.length);
  }

  efficiency(){
      return this.area()/this.circumference();
  }
}