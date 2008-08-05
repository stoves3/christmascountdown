var FADE_DURATION = 3000;
var FADE_INTERVAL = 6000;

var picNum = null;
var curDate = new Date();
var christmas = new Date();
var nDays = new Number();
var getDays = new Number();
var origDays = null;

function View_onOpen() {

christmas.setFullYear(curDate.getFullYear(), 11, 25);
getDays = (christmas.valueOf() - curDate.valueOf())/86400000;
origDays = getDays.toFixed(0);
nDays = getDays;

picNum = nDays.toFixed(0);
numDays.innerText = picNum;

view.setInterval(updateGadget, FADE_INTERVAL);

}

function updateGadget() {

getDays = (christmas.valueOf() - curDate.valueOf())/86400000;
if (origDays != getDays.toFixed(0)) {
origDays = getDays.toFixed(0);
nDays = getDays;
picNum = null;
}

if (picNum != nDays.toFixed(0)) {
picNum = null;
picNum = nDays.toFixed(0);
numDays.innerText = picNum;
}

refreshPic();

}

function refreshPic() {

view.beginAnimation(function() { setElementOpacity(currentImage.src); }, 255, 0, FADE_DURATION);

currentImage.src = "pics\\" + picNum + ".png";

view.beginAnimation(function() { setElementOpacity(currentImage.src); }, 0, 255, FADE_DURATION);

}

function button1_onclick() {

nDays = nDays - 1;
if (nDays < 0) {

nDays = 355;

}

}

function backButton_onclick() {

nDays = nDays + 1;
if (nDays > 355) {

nDays = 1;

}

}

function setElementOpacity(element) {
  element.opacity = event.value;
}