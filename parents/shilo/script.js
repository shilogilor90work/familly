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

// for inbal


// for roi


//  for amitai
