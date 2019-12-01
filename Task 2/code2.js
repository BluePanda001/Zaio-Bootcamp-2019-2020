
//Colour Class
class Colour{
    constructor(colourName,count,price){
        this.colourName=colourName;
        this.count=count;
        this.price=price;
    }
    setPrice(price){
        this.price=price;
    }
    setCount(count2){
        this.count=count2;
    }
    getColourName(){
        return this.colourName;
    }
    getCount(){
        return this.count;
    }
    getPrice(){
        return this.price;
    }    
}
//Array to store colour objects
var objectArray=[];
//colour object price dictionary
var colourPrices = {
    "red":10.33,
    "blue":18.99,
    "orange":10.98,
    "yellow":11.99,
    "green":12.50,
    "indigo":13.50,
    "pink":14.44,
    "purple":15.99,
    "gray":16.99,
    "black":17.99,
    "greenyellow":18.89,
    "darkcyan":19.78,
    "darkorchid":20.67,
    "lightskyblue":21.65,
    "royalblue":22.66,
    "lavender":23.89,
    "tan":9.99,
    "gold":49.99,
}
// array that contains the button colours
var buttonsArray=document.getElementsByClassName("colourBtns");
// variable to store the colour clicked
var colour;
// varable to store how many colours were clicked
var Quantity=0;
// varable to store colourObject being created
var object;
//variable to store strings to be concatinated
var colourToDisplay='';
// array to store all the colours selected
var coloursClicked
//function that updates the colour name to the one clicked
for(i=0;i<buttonsArray.length;i++){    
    buttonsArray[i].onclick=function(event){ 
        Quantity++;        
        colourToDisplay=colourToDisplay+" "+this.id;      
        document.querySelector("#colourName").value=colourToDisplay;   
        colour=this.id;   
        Quantity++;  
        object= new Colour(colour,'',colourPrices[colour]);        
        objectArray.push(object); 
        console.log(objectArray);               
    }    
}
//variable to store element position in object array
var position=0;
//variable to store the current colour object
var currentColourObject;
var len
//function for "ADD TO CART" button
document.getElementById("Add to cart").onclick=function(event){
    if(this.innerHTML==="Add to cart"){
        $("#popUp").modal("toggle");
        len=objectArray.length;
        console.log(len);
        currentColourObject=objectArray[position];         
        Quantity--;
        if(colour==undefined){
            document.getElementById("popUpName").innerHTML="";
        }
        else{ 
            //TRACE     
            console.log(currentColourObject.getColourName());
            document.getElementById("popUpName").innerHTML=currentColourObject.getColourName();
        }    
    }
    else{
        $("#Done").modal("toggle");
        document.getElementById("total").innerHTML="$"+rollingPrice.toFixed(2);
        for (i=0;i<objectArray.length;i++){
            addOrderSummary(objectArray[i])
        }      
    }    
}
// global count variable
var count=0;
var count1=0;
// global ammount varable
var amount=0;
//function that updates the counter display in the modal
function Count() {
    document.getElementById("quantity").innerHTML=count;
}
//function updates the counter in your custom fit
function customCount(count){
    amount=amount+count;
    document.getElementById("customCount").innerHTML=amount;
}
//function that increments the count
document.getElementById("increment").onclick=function(event){
    count++;
    Count();    
}
//function that decrements the counter display in the modal
document.getElementById("decrement").onclick=function(event){
    if(count!=0){
        count--;
    }      
    Count();    
}
//var for len of array
var rollingPrice=0;
var idPrice=0;
var currentPrice;
var yes=0;
//function for agree button
document.getElementById("agree").onclick=function(event){         
    if(position==(len-1)){
        currentColourObject=objectArray[position];
        //update amount 
        customCount(count);
        //passing the count to the object
        currentColourObject.setCount(count);     
        //calling colour wheel funcion
        addColourWheels(currentColourObject.getColourName(),currentColourObject);
        document.getElementById("Add to cart").innerHTML="Check out now";  
        //updating price         
        idPrice=currentColourObject.getPrice()*currentColourObject.getCount();     
        rollingPrice=rollingPrice+idPrice;
        document.getElementById("price").innerHTML="$"+rollingPrice.toFixed(2);  
        $("#popUp").modal('toggle');
        yes=1;
    }
    else{
        //update amount 
        customCount(count);
        //passing the count to the object
        currentColourObject.setCount(count);
        //calling colour wheel funcion
        currentColourObject=objectArray[position];
        addColourWheels(currentColourObject.getColourName(),currentColourObject);
        //updating price
        idPrice=currentColourObject.getPrice()*currentColourObject.getCount();     
        rollingPrice=rollingPrice+idPrice;
        document.getElementById("price").innerHTML="$"+rollingPrice.toFixed(2);        
        //TRACE
        console.log(currentColourObject.getColourName());
        position++;
        //moving into the next object in the array        
        currentColourObject=objectArray[position];          
        //RESETTING THE QUANTITY IN THE MODEL
        count1=count;    
        count=0;             
        document.getElementById("quantity").innerHTML=0;        
        //RESETTING THE COLOUR IN THE DISPLAY
        document.getElementById("popUpName").innerHTML=currentColourObject.getColourName();                
    }
    
}
//function to create colour wheels in details
var parentDiv=document.getElementById("parentRow");
var childDiv;
var colour1;
function addColourWheels(colour,object){
    console.log("begore for loop");
    var k=object.getCount();
    console.log(k);
    console.log(object.getCount());
    for(i=k;i>0;i--){
        console.log("inside for loop");
        childDiv=document.createElement("div");
        childDiv.className="colourBtns";
        colour1=colour;        
        childDiv.style.backgroundColor=colour1;
        childDiv.style.margin='10px';
        //TRACE
        console.log(colour1+"jyfjyfyjfygygyg");
        parentDiv.appendChild(childDiv);
    }
}

//function for order summary
var parentDiv=document.getElementById("parentRow1");
var childDiv1;
function addOrderSummary(object){                        
        childDiv1=document.createElement("p");
        childDiv1.innerHTML=object.getColourName()+" "+object.getCount();       
        parentDiv.appendChild(childDiv1);    
}