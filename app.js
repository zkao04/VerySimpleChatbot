var output = document.querySelector("#response");
var button = document.querySelector("button")
var replies = ["Oh really?", "That's interesting", "Now I'm not so sure. Can you explain?",
"And how do you feel about that", "Is that usual for you?"];

button.addEventListener("click", clickHandler, false);

function clickHandler(){
  var randomNumber = Math.floor(Math.random()*5);
  output.innerHTML = replies[randomNumber];
}
