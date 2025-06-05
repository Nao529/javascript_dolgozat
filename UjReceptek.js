export default class UjReceptek {
  #tarolo;

  constructor(tarolo) {
    this.#tarolo = tarolo;
    this.#megjelenit();
  }

  #megjelenit() {
    this.#tarolo.innerHTML = `
      <article class="col-lg-12">
        <h2>Új recept hozzáadása</h2>
        <form id="ujrecept" novalidate>
          <div class="mb-3">
            <label for="nev" class="form-label">Recept neve</label>
            <input type="text" class="form-control" id="receptnev" required placeholder="" />
          </div>

          <div class="mb-3">
            <label for="hozzavalok" class="form-label">Hozzávalók:</label>
            <textarea class="form-control" id="hozzavalok" rows="3" required></textarea>
          </div>
          <button type="submit" class="btn btn-primary">Hozzáad</button>
        </form>
      </article>
    `;
  }
}