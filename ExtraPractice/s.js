console.log("i am positive about approch");

let marks=[32,54,542,45,6,2,3,56];
const fruits=['orange' , 'apple', 'pineapple'];
const mixed= ['str', 89, [3,5]];
const arr = new  Array(23,234,53,'orange');
console.log(arr);
console.log(mixed);
console.log(fruits);

console.log(Array.isArray(fruits));
console.log(Array.isArray(arr));

arr[6]='sp';
console.table(arr);
console.log(marks);
let value= marks.indexOf(542);
console.log(value);
marks.push(54);
marks.unshift(532);
console.log(marks);
marks.pop();
console.log(marks);
marks.shift();
console.log(marks);
marks.splice(3,4);  // remove marks from index 3 to 4 
console.log(marks);
let marks2 =[5,6,7,8,9]
marks.concat(marks2);
console.log(marks);

let myobj={
    name:'sp',
    Course:'b.tech',
    marks:[7.5]
}
console.log(myobj);





