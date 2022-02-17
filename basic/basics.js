console.log("hello world")
document.getElementById('demo').innerHTML=10+20;
document.write("shubham")


var x=10;
var y = 20;
var a= x*y;
console.log(a); 

let b =2;
console.log(b)

// function
function myFunction(a, b) {
    return a * b;
  }
var x = myFunction(4, 3);
console.log(x)

// arrays
var cars = ["porche","ford","ferrari"];
console.log(cars);
cars.push("lambo")
console.log(cars)
cars.push("messarati")
console.log(cars)
var num= [6,2,4,1,6,,8,3];
num.sort();
console.log(num);
num.reverse(num);
console.log(num);


// dates
var d = new Date();
console.log(d)


//replace
function myreplace(){
  var str = document.getElementById("replace").innerHTML;
  var txt = str.replace("google","shubh22121@github.io");
  document.getElementById("replace").innerHTML = txt;
}
