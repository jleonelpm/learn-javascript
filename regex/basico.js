let re1 = new RegExp("abc");
let re2 = /[0-9]/;

result = re1.test("abc") //true
console.log(result);
result = re2.test("aniversario en 1985"); 
console.log(result); //true

let re3 = /\d+[-|/]\d+[-|/]\d+/;
console.log(re3.test("13/7/1991")); //true
console.log(re3.test("18-06-1999")); //true

let re4 = /\d\d[-|/]\d\d[-|/]\d\d\d\d/;
let re5 = /(\d{1,2})[-|/](\d{1,2})[-|/](\d{4})/;

let re6 = /[aeiou]/;
console.log(re6.test("start")); //true
 
 //Reemplaza todas las vocales en la palabra correcaminos
let mensaje = "zoologico";
let newMensaje = mensaje.replace(/aeiou$/g,"*");
console.log(newMensaje);
 
var mensaje2 = "el 20 de enero de 2019 se dio inicio a la 3 semana nacional de tecnologia";
let newMensaje2 = mensaje2.replace(/[a-z]{5,}/g,"");
console.log(newMensaje2);

var historia = "P4r4 s0m3ter situado fuer de los limites bayonetazo";

var expresion = /[a-zA-Z]+[aeiou]\b/gm
result = historia.match(expresion);
console.log (result);


