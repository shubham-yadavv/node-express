this.car = "honda civic";

var garage = {
  car:"aston martin",
  getcar: function(){
  return this.car;
}
};


console.log(garage.getcar());


var storeGet = garage.getcar;

console.log(storeGet());