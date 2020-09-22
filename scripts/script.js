function welkomgroet() {
  var today = new Date();
  var hourNow = today.getHours();
  var greeting;
  var icon;

  if (hourNow < 12) {
    greeting = "Goeiemorgen";
  } else if (hourNow < 20) {
    greeting = 'Goeiemiddag';
  } else if (hourNow < 24) {
    greeting = "Goedenavond"
  } else {
    greeting = "Welkom";
  }
  document.getElementById("welkom").innerHTML = greeting;
}

function onbeschaafd() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("onbeschaafd");
  if (checkBox.checked == true) {
    text.innerHTML = "Schaar steen papier";
  } else {
    text.innerHTML = "Blad steen schaar"
  }
}

welkomgroet();

function rot13(str) {
  var input = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  var output = 'NOPQRSTUVWXYZABCDEFGHIJKLMnopqrstuvwxyzabcdefghijklm';
  var index = x => input.indexOf(x);
  var translate = x => index(x) > -1 ? output[index(x)] : x;
  return str.split('').map(translate).join('');
}


var index = Math.floor(Math.random() * 99) + 1;
var weetjes_ROT13lijst = weetjes_ROT13.split('\n');
var weetje = rot13(weetjes_ROT13lijst[index]);
document.getElementById("weetje").innerHTML = weetje;