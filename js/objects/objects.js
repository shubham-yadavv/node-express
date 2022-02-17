console.log("hello world")

var student0 = {
    firstname : "shubham",
    lastname  : "yadav",
    age : 19,
    greeting: function(){
        return "hi "+ this.firstname + "anfd ia m " + this.age;
    }
}

console.log(student0.greeting());

var student1 = new Object();
students1.firstname = "edith";
students1.lastname = "parker";
students1.age = 18;

var student2 = {};
student2.firstname = "jarvis";
student2.lastname = "pots";
student2.age = 16;

var students = [];
students.push(student0);
students.push(student1);
students.push(student2);

for (let index = 0; index < students.length; index++) {
    console.log(students[index]);
    
}

// console.log(studentsfirstname)
// console.log(student.lastname)
// console.log(student.age)

// console.log(student["firstname"])
// console.log(student["lastname"])
// console.log(student["age"])


