//Button als variable reinholen
let button = document.getElementById("calcb");
//Eventlistener auf Button drauflegen ("Event",Methode)
button.addEventListener("click",run);

//die klasse Umsatz reinholen (array)
let umsatz = document.getElementsByClassName("umsatz");



for (i of umsatz){
    console.log(i.innerHTML)
}


function run() {
    //ergebnis initialisieren mit 0
    let ergebnis=0;
    for (i of umsatz){
        //innerhtml parsen
        console.log(i.parentNode.parentNode.parentNode)
        let node = document.getElementById("myTable")
        console.log(node)


        if (i.parentNode.parentNode.parentNode === document.getElementById("myTable")) {
            ergebnis += parseInt(i.innerHTML)
        }
    }
    console.log(ergebnis)
    //button remove
    button.remove()
    //ergebnis reingeben mit +=
    document.getElementById("total").innerHTML +=ergebnis
}
