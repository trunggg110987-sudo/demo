function swap(a, b) {
    var temp = a;
    a = b;
    b = temp;
}

var a = 5;
var b = 10;
swap(a, b);
console.log("a = " + a + ", b = " + b);