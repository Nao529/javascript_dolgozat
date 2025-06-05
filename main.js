import { receptLista } from "./recept.js";
import ReceptElonezet from "./ReceptElonezet.js";
import UjReceptek from "./UjReceptek.js";

const TAROLO = document.getElementById("tarolo");
const RECEPTEKGOMB = document.getElementById("publicRecept");
const receptekelonezet = new ReceptElonezet(receptLista, TAROLO);
//const ujreceptek = new UjReceptek(TAROLO);

RECEPTEKGOMB.addEventListener("click", () => {
    const receptTarolo = document.getElementById("tarolo");
    receptekelonezet.megjelenit(receptTarolo);
    //ujreceptek.megjelenit(receptTarolo);
});
