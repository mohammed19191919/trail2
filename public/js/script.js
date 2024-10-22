
// // let abebe={
// //     name:"abebe",
// //     age:30
// // }

// // console.log(abebe.name);


// function Abebe(name, age){
//     this.name=name;
//      this.age=age;
// }
// let abe= new Abebe("ahmed", 30);
// console.log(abe);
// let abee= new Abebe("mohammed", 40);
// console.log(abee);

// Abebe.prototype.myName= function(){
//     return this.name + " "+ "is" + this.age + "years old!";
// };
// console.log(abe);
// console.log(abee);

// console.log(abee.myName());


class Person{
    constructor(name, age, sex){
        this.name=name;
        this.age=age;
        this.sex=sex;
    };
    getName(){
        return this.name;
    }
}
let Almaz= new Person("Almaz", 20, "female");
console.log(Almaz);
console.log(Almaz.getName());

class Student extends Person{
  constructor(grade, name, age, department){
    super(name, age);
    this.grade=grade;
    this.department=department;
  }
}

let newStudent= new Student("B", "Mohammed", 40, "physics");
console.log(newStudent);
console.log(newStudent.getName());