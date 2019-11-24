function A(b, c) {
    this.b = b;
    this.c = c;
    this.add = function() {
        return(this.b+this.c);
    }
}
//das added mir die funktion mult zu A
A.prototype.mult = function() {
    return(this.b*this.c);
}
//erstellt A mit b=10 c=20
let a1 = new A(10,20);
//gibt 30 aus
console.log(a1.add()); //-------------------
//gibt aus 200
console.log(a1.mult());  //-------------------

//sollte add überschreiben       // Was passiert hier, bzw. wie rufe ich diese function auf?
A.prototype.add = function() {
    return(this.b-this.c);
}
//-10
console.log(a1.add());  //-------------------
//200
console.log(a1.mult());  //-------------------

//B erbt von a mult und add
function B(b,c,d) {
    A.call(this, b, c);
    this.d = d;
}

//erstellt A object und gibt es ins B hinein   // Genauere Erklärung mit Tafelbild bitte!
B.prototype = Object.create(A.prototype);
//constructor auf B.prototype
B.prototype.constructor = B;
//B.Protoype bekommt div funktion
B.prototype.div = function() {return this.mult() / this.d};

let b1 = new B(10,20,2);
console.log(b1.add());   //-------------------
console.log(b1.div());   //-------------------