function A(b, c) {
    this.b = b;
    this.c = c;
    this.add = function() {
        return(this.b+this.c);
    }
}
A.prototype.mult = function() {
    return(this.b*this.c);
}
let a1 = new A(10,20);
console.log(a1.add());
console.log(a1.mult());
A.prototype.add = function() {
    return(this.b-this.c);
}
console.log(a1.add());
console.log(a1.mult());
function B(b,c,d) {
    A.call(this, b, c);
    this.d = d;
}
B.prototype = Object.create(A.prototype);
B.prototype.constructor = B;
B.prototype.div = function() {return this.mult() / this.d};
let b1 = new B(10,20,2);
console.log(b1.add());
console.log(b1.div());