var randomNumber1 = Math.floor(Math.random() *6)+1;
var randomDiceimage = "dice"+ randomNumber1 +".png";
var randomImagesource = "images/"+ randomDiceimage;


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);

var randomNumber2 = Math.floor(Math.random() *6)+1;
var randomDiceimage2 = "dice"+ randomNumber2 +".png";
var randomImagesource2 = "images/"+ randomDiceimage2;


var image2 = document.querySelectorAll("img")[1].src = randomImagesource2;

if(randomNumber1 >randomNumber2){
    document.querySelector("h1").innerHTML = " First Player Wins";

}else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Second Player Wins"
}
else{
    document.querySelector("h1").innerHTML = "Ties"
}