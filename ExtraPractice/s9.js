console.log('having fun with javascript');

let a=34;
a +=1;
a++;
console.log(a);

/*for (let i = 0; i < 2; i++)
{
    console.log(i);   
}


let i=0;
while(i<3){
    console.log(i);
    i +=1;
}

let i=0;
do {
    if(i===2){
        break;
    }
    console.log(i);
    i++
    
} while (i<4);
*/


let arr=[5,6,3,5,2,6,2,4,4]
arr.forEach(function(element){
    console.table(element);
});



let myobj={
    name:'sp',
    Course:'b.tech',
    marks:[7.5]
}

for(let key in myobj){
    console.log(` ${key} my object is  ${myobj[key]}`)
}

arr.forEach(function(element,index, array){
    console.log(element,index,array);
});