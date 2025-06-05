import { receptLista } from "./recept.js";

export default class Receptek {
    #adat;
    #szElem;
    #index;
    constructor(adat, szElem, index) {
        this.#adat = adat;
        this.#szElem = szElem;
        this.#index = index;
        this.megjelenit(receptLista);
    }
    megjelenit() {
        const receptKartya = document.createElement("div");
        receptKartya.classList.add("receptKartya");
        receptKartya.classList.add("col-md-4");
        receptKartya.classList.add("col-lg-3");
        receptKartya.classList.add("col-sm-6");
        receptKartya.classList.add("mb-4");
        
        receptKartya.innerHTML = `
                                <div class="card m-2">
                                    <div class="card-body" id="elonezet${this.#index}">
                                        <h5>${this.#adat.nev}</h5>
                                        <img src="${this.#adat.kep}" class="card-img" alt="${this.#adat.nev}">
                                        <p class="kedvenc">${this.#adat.kedvenc}</p>
                                    </div>
                                </div>`;
        this.#szElem.appendChild(receptKartya);
        this.#elonezetGombEsemeny();
    }
    #elonezetGombEsemeny() {
        const elonezetGomb = document.getElementById(`elonezet${this.#index}`);
        elonezetGomb.addEventListener("click", () => {
            console.log(`${this.#adat.nev} előnézet`);
            const esemeny = new CustomEvent("elonezet", {
                detail: this.#adat,
            });
            window.dispatchEvent(esemeny);
        });
    }
}
/* function boolToX(lista) {
    return lista.map(e => e ? "✔" : "❌");
} */