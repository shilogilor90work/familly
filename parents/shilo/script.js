function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
var number = getRandomInt(20) + 1;
if (number<10) {
    number = ("0"+number);
}

document.querySelector('body').style.backgroundImage = "url('images/image_" + number + ".png')";



// for inbal


// for roi


//  for amitai
