/*jslint browser:true */
var i;
var a; //Declració de números aleatoris.
var aM = []; // Declaració de la matriu de números aleatoris.
var aM2 = []; //Declaració de la matriu còpia
var aMs = []; //Declaració de la matriu de números aleatoris, ordenats.
var stat = new Array(10).fill(0); //Variable d'estadístiques per comptar les vegades

var stat2 = [];
//Matriu d'ocurrències ordenada per obtenir mínim i màxim

var stat2Min = 0;
var stat2Max;
var stat2Dif;
var statL;
var parar = false;



function generador() {
 "use strict";


 var a = Math.floor(10 * Math.random()) + 1;
 //Genera un número sencer aleatori entre 1 i 10.
 document.getElementById('v1').innerHTML = a;
 // Escriu el número aleatori a v1

 aM.push(a);
 // Introdueix els valors aleatoris a la matriu aM
 document.getElementById('v2').innerHTML = aM.join(' | ').toString();
 // Escriu la matriu en forma de cadena

 aM2 = aM.slice();
 //El mètode slice genera una matriu nova idèntica a aM. La raó per la que ens cal generar aquest matriu és perquè crear a continuació una matriu amb els números aleatoris que hem generat ordenats. I resulta que el mètode que fem servir ".sort()" altera la matriu a la que se li aplica.
 //No fem var aM2 = aM perquè ocupen el mateix espai a la memòria. No serveix. Cal crear una matriu nova i per això utilitzem slice().

 aM2.sort(function (a, b) {
  return a - b;
 });
 // Com que sort endreça la matriu alfabèticament pot passar que consideri que 10 va abans que el 2.  Per aquesta raó utilitzem function(a, b){return a - b} que ens serveix per endreçar matrius numèriques.
 document.getElementById('v3').innerHTML = aM2.join(' | ').toString();
 // Escriu la matriu en forma de cadena

 document.getElementById('v4').innerHTML = aM2[0];
 //Representa el primer element de la matriu ordenada, per tant el valor mínim obtingut fins el moment.

 document.getElementById('v5').innerHTML = aM2[aM2.length - 1];
 //Representa el darrer element de la matriu ordenada, és a dir el valor màxim.

 stat[a - 1] += 1;
 //Fem que s'assigni a cada posició de la matriu stat una unitat més cada vegada
 document.getElementById('v6').innerHTML = stat.join(' | ');


 stat2 = stat.slice();
 stat2.sort(function (a, b) {
  return a - b;
 });

 stat2Max = stat2[stat2.length - 1];
 document.getElementById('v7').innerHTML = stat2Max;

 stat2Min = stat2[0];

 document.getElementById('v8').innerHTML = stat2Min;

 stat2Dif = stat2[stat2.length - 1] - stat2[0];


 document.getElementById('v9').innerHTML = stat2Dif;


 document.getElementById('his' + (a)).style.width = (stat[a - 1] / stat2Max) * 100 + "%";




} //FINAL DE LA FUNCIÓ generador()



function esborrar() {
 "use strict";
 stat.fill(0);
 aM.fill(0);
 aM2.fill(0);
 document.getElementById('v2').innerHTML = "";
 document.getElementById('v3').innerHTML = "";
}



function generador100() {
 "use strict";


 for (i = 0; i < 100; i = i + 1) {
  generador();

  if (i === 99) {
   esborrar();
  }



 }
}





function generadorT() {
 "use strict";

 setInterval(function () {
  generador100();
 }, 500);


}




