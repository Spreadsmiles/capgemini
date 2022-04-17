////question 1

const number = parseInt(prompt('Enter a positive integer: '));
let sum = 0;
for (let i = 1; i <= number; i++) {
    sum += i;
}
console.log('The sum of n  numbers:', sum);

//question 2

const number = parseInt(prompt('Enter a positive integer: '));
let sum = 0;
if(number%2==0){
    for (let i = 1; i <= number; i++) {
        sum += i;
}
}else{
    console.log("the multiple of 3 and 5 is not zero ")
    prompt("number is not muliple of 3 and 5");
}
console.log('The sum of n  numbers:', sum);


//question 3
function oddeven(number){
    if(number%2==0){
        console.log("even")
        
    }
    else{
        console.log("odd");
    }
} 
oddeven(3);
oddeven(4);


 // question 4 & 5
function numHeads(n) {  
    var heads = 0;
    var  tails = 0;
    for(var i=0;i<n;i++){
        x=Math.random;

        (Math.floor(Math.random() * 2) == 0) ? heads++:tails++;
    }
    return console.log(heads);

}

numHeads(10);


// maximum number in array 

const array = [1, 3, 2];

console.log(Math.max(...array));


let  myvar = {
    name:"sp",
    address: "azmagarh",
    mobile : 8058915391
}
console.log(myvar);


function validate() {
      
    if( document.sp.email.value == "" ) {
       alert( "Please provide your name!" );
       document.myForm.Name.focus() ;
       return false;
    }
    if( document.myForm.EMail.value == "" ) {
       alert( "Please provide your Email!" );
       document.sp.password.focus() ;
       return false;
    }
    
    return( true );
 }
