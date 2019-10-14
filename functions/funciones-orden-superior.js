function add(x){
    return function (y){
        console.log ("x = " + x);
        console.log("y = " + y);
        console.log (x + y);
        return x + y;
    }
}

var result = add(4);
console.log(result(3));
console.log(result(9));
