document.getElementById("clickMe").addEventListener("click", function() {
    alert("Hello! You clicked the button.");
});

const magicTarget = document.getElementById("basicText");
const magicButton = document.getElementById("magicButton");

magicButton.addEventListener("click", function(){
    magicTarget.textContent = "SYKE HIT BURGER KING AND PLAY NCAA 14";
});
