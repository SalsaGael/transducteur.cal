import data from "./data.js";

const renderTens = () => {
  container.innerHTML = `
<div class="bloccalc" id="bloccalc">
    <p class="mb-1">
        <a>Calcul des valeurs</a>
    </p>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-danger input-ant">Triphasé HT</label>
        </div>
        <input type="number" id="uHT" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
        <span class="input-group-text text-light bg-danger input-post">kV</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-primary input-ant">Monophasé HT</label>
        </div>
        <input type="number" id="vHT" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-primary input-post">kV</span>
        </div>
    </div>
            <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-secondary input-ant">Triphasé BT</label>
        </div>
        <input type="number" id="uBT" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-secondary input-post">V</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-info input-ant">Monophasé BT</label>
        </div>
        <input type="number" id="vBT" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-info input-post">V</span>
        </div>
    </div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-success input-ant">Sortie procédé</label>
        </div>
            <input type="number" id="vsma" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
            <span class="input-group-text text-light bg-success input-post">mA</span>
        </div>
    </div>
</div>

<div class="blocset" id="blocset">
    <p class="mb-1">
        <a>Transformateur de tension</a>
    </p>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
        <label for="KU" class="input-group-text input-ant">Rapport TT</label>
        </div>
        <select id="KU" class="custom-select" value="">
            <option value="150">15 kV / 100 V</option>
            <option value="200">20 kV / 100 V</option>
            <option value="450">45 kV / 100 V</option>
            <option value="600">60 kV / 100V</option>
            <option value="630">63 kV / 100V</option>
            <option value="900">90 kV / 100 V</option>
            <option value="1500">150 kV / 100V</option>
            <option value="2200">220 kV / 100V</option>
            <option value="2250">225 kV / 100V</option>
            <option value="4000">400 kV / 100V</option>
        </select>
    </div>

    <p class="mb-1">
     <a>Paramètres du capteur</a>
    </p>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text input-ant" for="fuHT">Famille BT</label>
        </div>
           <select id="fuHT" class="custom-select" value="">
            <option value="0">Plage réglée</option>
            <option value="1">U1 - 0 à 124 V</option>
            <option value="2">U2 - 78 à 121,25 V</option>
            </select>
        </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text input-ant" for="uMin">Plage HT</label>
        </div>
        <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="uMin" type="number" value=""/>
        <span class="input-group-text input-group-middle">à</span>
        <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id="uMax" type="number" value=""/>
        <div class="input-group-append">
            <span class="input-group-text input-post">kV</span>
        </div>
    </div>
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label for="smaMinU" class="input-group-text input-ant">Sortie procédé</label>
        </div>
        <select id='smaMinU' class="custom-select" value="">
            <option value="0">0</option>
            <option value="4">4</option>
        </select>
        <span class="input-group-text input-group-middle">à</span>
        <select id='smaMaxU' class="custom-select" value="">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="20">20</option>
        </select>
        <div class="input-group-append">
            <span class="input-group-text input-post">mA</span>
        </div>
    </div>
</div>
`;
};

export default renderTens;
