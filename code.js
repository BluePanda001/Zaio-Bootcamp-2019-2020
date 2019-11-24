// creating a array thatcontaons the button colours
var buttonsArray=document.getElementsByClassName("colourBtns");
//defing a function that updates the colour name to the one clicked
for(i=0;i<buttonsArray.length;i++){
    buttonsArray[i].onclick=function(event){
        document.querySelector("#colourName").value=this.id;
    }
}
var closeIt=document.getElementsByClassName("close");
closeIt.onclick=function(event){
    document.getElementsById("popUp").style.display="none";
}


