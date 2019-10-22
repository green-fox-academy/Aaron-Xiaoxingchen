var car = {
    model: 'Benz',
    color: 'black',
    year: 1886,
    doors: 0,
    historical: true,
  };
//before ES6
  var model = car.model;
  var color = car.color;
  var year = car.year;
  var doors = car.doors;
  var historical = car.historical;

//ES6
const {model, color, year, doors, historical} = car;
  
  var computer = {
    type: 'PC',
    monitor: {
      color: 'black',
      size: '16\"',
      HDMI: true,
      VGA: true,
    },
 
    tower: {
      color: 'grey',
      CPU: 4.7,
      memory: 16,
      SSD: 128,
    },
  };

  //before ES6   
  var type = computer.type;
  var size = computer.monitor.color;
  var HDMI = computer.monitor.HDMI;
  var VGA = computer.monitor.VGA;
  var color = computer.tower.color;
  var CPU = computer.tower.memory
  var SSD = computer.tower.SSD;
//ES6
  const {type, monitor : {size, HDMI, VGA}, tower : {color, CPU, memory, SSD}};

  

  