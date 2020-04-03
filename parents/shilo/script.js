function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var number = getRandomInt(20) + 1;
if (number<10) {
    number = ("0"+number);
}

document.querySelector('body').style.backgroundImage = "url('images/image_" + number + ".png')";

// side bars
document.querySelectorAll('[custom]').forEach(function(tab) {
    tab.addEventListener("click", function(event){
        document.querySelectorAll(".main_screen").forEach(function(div) {
            div.style.display = "none";
        });
        document.querySelector('.' + tab.getAttribute("custom")).style.display = "block";
    });
});

var caller = $("#runnning");

function move()
{
    main_screen = $(".main_screen");
    var randX = Math.floor(Math.random() * (main_screen.width()));
    var randY = Math.floor(Math.random() * (main_screen.height() - 100));
    console.log([randX, randY]);
    caller.stop().animate({"left": randX + "px", "top": randY + "px"});
}

$(document).ready(function() {

    caller.on('mouseenter', move);
    caller.on('click', function(){
        alert('clicked!');
    });

});

// for roi


//  for amitai
