console.log('sp');
/*
let a=document;
a=document.all;
//a=document.body;


//console.log(a);
a=document.links[0];
console.log(a);

Array.from(a).forEach(function(element){
    console.log(element);
})
*/


let element=document.getElementById("first");

element=element.parentElement;
element.style.color='red';
element.innerText="sp yadav";

console.log(element);
