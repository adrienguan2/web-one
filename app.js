/*this section is for experimenting with mouse events, they will be "silly" 
features for now but eventually they will become more cohesive as web-one is 
further developed
*/
const magicTarget = document.getElementById("basicText");
const magicButton = document.getElementById("magicButton");

magicButton.addEventListener("click", function(){
    magicTarget.textContent = "SYKE HIT BURGER KING AND PLAY NCAA 14";
});

const pageSummary = document.getElementById("pageSummary");


pageSummary.addEventListener("mouseenter", function(){
    pageSummary.textContent = "SHOOP DA WOOP";
});

pageSummary.addEventListener("mouseleave", function(){
    pageSummary.textContent = "Adrien's web development playground.";
});
