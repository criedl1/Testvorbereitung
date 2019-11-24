class Product {
    constructor(idEl, descEl) {
        this.id = idEl.value;
        this.desc = descEl.value;
        this.idEl = idEl;
        this.descEl = descEl;
    }
    syncData(e) {
        console.log(this);
        console.log(e.target.id);
        this.id = this.idEl.value;
        this.desc = this.descEl.value;
        console.log(this.id +" "+ this.desc);
    }
    register() {
        this.idEl.addEventListener("change", this.syncData.bind(this)); //.bind(this) wurde hinzugefügt
        this.descEl.addEventListener("change", this.syncData.bind(this)); //.bind(this) wurde hinzugefügt
        console.log(this)
    }
}
let p = new Product(document.getElementById("idEl"),document.getElementById("descEl"));
p.register();


/*erklären sie das verhalten:
* ein neues Produkt wird erstellt über den constructor
* sobald p.register ausgeführt wird, werden 2 eventlistener hinzugefügt (change)
* Wir binden das vorher erstellte p an den eventlistener und übergeben es dem eventlistener
*
* */



