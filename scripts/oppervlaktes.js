
var figuur = "";

function driehoek() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "block";
  document.getElementById('lengte1_tekst').innerHTML = 'basis: ';
  document.getElementById('lengte2_tekst').innerHTML = 'hoogte: ';
  figuur = "driehoek";
}

function vierkant() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "none";
  document.getElementById('lengte1_tekst').innerHTML = 'zijde: ';
  figuur = "vierkant";
}

function rechthoek() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "block";
  document.getElementById('lengte1_tekst').innerHTML = 'lengte: ';
  document.getElementById('lengte2_tekst').innerHTML = 'breedte: ';
  figuur = "rechthoek";
}

function ruit() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "block";
  document.getElementById('lengte1_tekst').innerHTML = 'diagonaal 1: ';
  document.getElementById('lengte2_tekst').innerHTML = 'diagonaal 2: ';
  figuur = "ruit";
}

function cirkel() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "none";
  document.getElementById('lengte1_tekst').innerHTML = 'straal: ';
  figuur = "cirkel";
}

function parallellogram() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "block";
  document.getElementById('lengte1_tekst').innerHTML = 'basis: ';
  document.getElementById('lengte2_tekst').innerHTML = 'hoogte: ';
  figuur = "parallellogram";
}

function trapezium() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "block";
  document.getElementById('lengte1_tekst').innerHTML = 'som parallelle zijdes: ';
  document.getElementById('lengte2_tekst').innerHTML = 'hoogte: ';
  figuur = "trapezium";
}

function vlieger() {
  document.getElementById('hello').style.display = "block";
  document.getElementById('getal2').style.display = "block";
  document.getElementById('lengte1_tekst').innerHTML = 'lengte diagonaal: ';
  document.getElementById('lengte2_tekst').innerHTML = 'breedte diagonaal: ';
  figuur = "vlieger";
}

function toonOppervlakte() {
  document.getElementById('ans').style.display = "block";
  if (figuur === "driehoek") {
    var basis = document.getElementById('lengte1').value;
    var hoogte = document.getElementById('lengte2').value;
    document.getElementById('oppervlakte').innerHTML = basis*hoogte*0.5;
  } else if (figuur === "vierkant") {
    var zijde = parseInt(document.getElementById('lengte1').value);
    document.getElementById('oppervlakte').innerHTML = Math.pow(zijde,2);
  } else if (figuur === "rechthoek") {
    var l = document.getElementById('lengte1').value;
    var b = document.getElementById('lengte2').value;
    document.getElementById('oppervlakte').innerHTML = l*b;
  } else if (figuur === "ruit") {
    var d1 = document.getElementById('lengte1').value;
    var d2 = document.getElementById('lengte2').value;
    document.getElementById('oppervlakte').innerHTML = d1*d2*0.5;
  } else if (figuur === "cirkel") {
    var r = document.getElementById('lengte1').value;
    document.getElementById('oppervlakte').innerHTML = r*r*3.14;
  } else if (figuur === "parallellogram") {
    var b = document.getElementById('lengte1').value;
    var h = document.getElementById('lengte2').value;
    document.getElementById('oppervlakte').innerHTML = b*h;
  } else if (figuur === "trapezium") {
    var som = document.getElementById('lengte1').value;
    var h = document.getElementById('lengte2').value;
    document.getElementById('oppervlakte').innerHTML = som*h*0.5;
  } else if (figuur === "vlieger") {
    var d1 = document.getElementById('lengte1').value;
    var d2 = document.getElementById('lengte2').value;
    document.getElementById('oppervlakte').innerHTML = d1*d2*0.5;
  }
}
