let re1 = new RegExp("abc");
let re2 = /[0-9]/;
let re3 = /[a-zA-Z]+\b/gm;

let festividad = "El 20 de nov de 1910 inicio la Revolucion Mexicana";

console.log(re2.test(festividad));
console.log(festividad.match(re3));