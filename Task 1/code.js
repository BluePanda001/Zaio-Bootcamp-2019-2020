// array that contains the button colours
var buttonsArray=document.getElementsByClassName("colourBtns");
// variable to store the colour clicked
var colour;
//function that updates the colour name to the one clicked
for(i=0;i<buttonsArray.length;i++){    
    buttonsArray[i].onclick=function(event){
        document.querySelector("#colourName").value=this.id;   
        colour=this.id;     
    }
    
}
//function that undates the colour name in the modal
document.getElementById("Add to cart").onclick=function(event){
    if(colour==undefined){
        document.getElementById("popUpName").innerHTML="";
    }
    else{
        document.getElementById("popUpName").innerHTML=colour;
    }
}

