function myFunct(a) {
    let i= function () {
        a++;
        console.log(a);
    }
    i();
    return(i);
}
let x = myFunct(10); // console gibt 11 aus
x(); // console gibt 12 aus
x(); // console gibt 13 aus
x = myFunct(5); //consolge gibt 6 aus
x(2); // da man i (die innere funktion ohne parameter zurückbekommt) gibt die console 7 aus


