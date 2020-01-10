
var quantity = screen.width/285;
var slide = 0;

var clicright = 0;
var clicleft = 1; 
var maxclicright = 12/quantity;

var detailclic = 1;
const movie = document.getElementsByClassName("movie");
var i;

//all vriables needed for this task

document.getElementById("button-right").addEventListener("click", moveitright);
document.getElementById("button-left").addEventListener("click", moveitleft);



for (var i = 0; i < movie.length; i++) {
  movie[i].addEventListener('click', movedetail);
}
//makes the pictures clickable

function moveitright(){
  if(document.getElementById('slider').style.right < 1500 + 'px'){ 
    clicright = clicright + 1; clicleft = clicleft-1;
       document.getElementById('slider').style.right =  (clicright*quantity*285) + 'px';
  }
       else if(clicright = maxclicright){document.getElementById('slider').style.right =  0 + 'px'; clicright = 0;};  
} 
//makes the slider go right but returns when you reach the end

function moveitleft(){
  if(document.getElementById('slider').style.right =  0 + 'px'){document.getElementById('slider').style.right =  0 + 'px'; clicright = 0;}
    else {
     document.getElementById('slider').style.right =  -(clicleft*quantity*285) + 'px';
      clicleft = clicleft + 1;clicright = clicright-1;
    }      
}
//function to make the slider go left but no when it is in starting position

 
function movedetail(){
  var bigpic  = this.getAttribute("data-pic");
  if(document.getElementById(bigpic).style.visibility = "hidden"){document.getElementById(bigpic).style.visibility = "visible"}
  else {document.getElementById(bigpic).style.visibility = "hidden"};
  
}

//makes the bigger picture appear







// huidige width van items ophalen

  // get amount of items

  // calculate entire width (nr of items * width of an item)
  // this is the width of the slider

  // hoeveel items passen er op het scherm?

  // logica hieronder uitbreiden: bijhouden hoeveel keer geklikt werd
  // left/right updaten met de width * aantal