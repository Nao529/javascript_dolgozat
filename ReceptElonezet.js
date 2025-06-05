import Receptek from "/Receptek.js";

export default class ReceptElonezet {
    #receptLista = [];
    #szElem;
    constructor(receptLista, szElem) {
        this.#receptLista = receptLista;
        this.#szElem = szElem;
        this.megjelenit();
        this.elonezetEsemeny();
    }
    megjelenit(ujElem) {
        if (ujElem) {
            this.#szElem = ujElem;
        }
        this.#szElem.innerHTML = "";
        this.#receptLista.forEach((adat, index) => {
            new Receptek(adat, this.#szElem, index);
        });
    }
    elonezetEsemeny() {
        window.addEventListener("elonezet", (event) => {
            const elonezet = event.detail;
            console.log("előnézet:", elonezet);
        });
    }
}

/* receptKartya.innerHTML = `
                            <div class="card m-2">
                                <div class="card-body" id="elonezet${this.#index}">
                                    <h5>${this.#adat.nev}</h5>
                                    <p class="kedvenc">${this.#adat.kedvenc}</p>
                                    <p class="kedvenc">${this.#adat.hozzavalok}</p>
                                </div>
                            </div>`; */