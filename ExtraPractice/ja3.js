class Rectangle{
    width;
    height;
    area;
    constructor(width,height){
        this.width = width;
        this.height = height;
    
    }
    calcArea() {
        return this.width * this.height;
    }
}
let rectangle = new Rectangle(4,5);

console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.calcArea());


/*
let rectangle = new Rectangle(4,5);
console.log(rectangle.width);
console.log(rectangle.height);
//Make Some Changes to above class 


rectangle.height = 60;

console.log(rectangle.width);
console.log(rectangle.height)
*/

//Q2
rectangle.getArea = function(){
    return this.height * this.width;
}
console.log(rectangle.getArea())

//Q3
rectangle.height = 50;
console.log(rectangle.getArea());

//Q4
var obj = {
     firstName:"SP",
     lastName:"YADAV"}

console.log(obj.firstName);
console.log(obj.lastName);

obj.lastName = "YADAV"
console.log(obj.lastName);

//5

obj.middleName="D"
console.log(obj.middleName);

//6
var string = ({"firstName":"SP","lastName":"YADAV"})
var json = eval(string)
console.log(json);
console.log(json.firstName);
console.log(typeof(json));

//7
var string = ({"firstName":"SP","lastName":"YADAV"})
var real = JSON.parse('{"firstName":"SP","lastName":"YADAV"}')
console.log(real);
console.log(typeof(real));
