var content = document.getElementById("conetent");
var button =document.getElementById("show-more");
var btnText =document.getElementById("myBtn");


button.onclick =function(){
    if(content.className="open"){
        content.className= " ";
        button.innerHTML="show more";

    }
    else{
        content.className="open";
        button.innerHTML="show-less";
    }
};