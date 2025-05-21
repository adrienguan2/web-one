<<<<<<< Updated upstream
// document.getElementById("clickMe").addEventListener("click", function() {
//     alert("Hello! You clicked the button.");
// });

=======
/*this section is for experimenting with mouse events, they will be simplistic
features for now but eventually they will become more cohesive as web-one is 
further developed
*/
>>>>>>> Stashed changes
const magicTarget = document.getElementById("basicText");
const magicButton = document.getElementById("magicButton");

magicButton.addEventListener("click", function(){
    magicTarget.textContent = "SYKE HIT BURGER KING AND PLAY NCAA 14";
});
