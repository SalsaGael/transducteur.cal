import data from "./data.js";

const renderPuisAct = () => {
    container.innerHTML = `
<div class="bloccalc" id="bloccalc">
    <p class="mb-1">
        <a>Calcul des valeurs pour 100/√3 V φ=0°</a>
    </p>
    
    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-secondary input-ant">Puissance HT</label>
        </div>
        <input type="number" id="paHT" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
    <span class="input-group-text text-light bg-secondary input-post">MW</span>
        </div>
    </div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
           <label class="input-group-text text-light bg-info input-ant">Courant BT</label>
        </div>
            <input type="number" id="iaBT" placeholder="Entrez la valeur" class="form-control" aria-label="Small"
        aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
           <span class="input-group-text text-light bg-info input-post">A</span>
        </div>
    </div>

    <div class="input-group mb-2">
        <div class="input-group-prepend">
            <label class="input-group-text text-light bg-success input-ant">Sortie procédé</label>
        </div>
            <input type="number" id="sma" placeholder="Entrez la valeur" class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm">
        <div class="input-group-append">
        <span class="input-group-text text-light bg-success input-post">mA</span>
        </div>
    </div>
</div>

<div class="blocset" id="blocset">
<p class="mb-1">
    <a>Transformateurs de mesure</a>
</p>

<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label for="KU" class="input-group-text input-ant">Rapport TT</label>
    </div>
      <select id="KU" class="custom-select" value="">
            <option value="150">15000 / 100</option>
            <option value="200">20000 / 100</option>
            <option value="450">45000 / 100</option>
            <option value="600">60000 / 100</option>
            <option value="630">63000 / 100</option>
            <option value="900">90000 / 100</option>
            <option value="1500">150000 / 100</option>
            <option value="2200">220000 / 100</option>
            <option value="2250">225000 / 100</option>
            <option value="4000">400000 / 100</option>
        </select>
         <div class="input-group-append">
            <span class="input-group-text input-post">V</span>
        </div>
</div>

<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label class="input-group-text input-ant" for="pTC">Rapport TC</label>
    </div>
    <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='pTC' type="number" value="" />
    <span class="input-group-text input-group-middle">/</span>
    <select class="custom-select" id='sTC'>
        <option value="1">1</option>
        <option value="5">5</option>
    </select>
    <div class="input-group-append">
        <label class="input-group-text input-post" for="pTC">A</label>
    </div>
</div>
 <p class = "mb-1">
    <a> Paramètres du capteur </a>
</p>
<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label class="input-group-text input-ant" for="fpaHT">Famille BT</label>
    </div>
    <select id="fpaHT" class="custom-select" value="">
        <option value="0">Plage réglée</option>
        <option value="1">P1 - ± 606,2</option>
        <option value="2">P2 - ± 744,8</option>
        <option value="3">P3 - ± 866</option>
        <option value="4">P4 - ± 1039,2</option>
        <option value="5">P5 - ± 1212,4</option>
        <option value="6">P6 - ± 1463,6</option>
        <option value="8">P8 - ± 1732</option>
        <option value="9">P9 - ± 2148</option>
    </select>
    <div class="input-group-append">
        <span class="input-group-text input-post">W</span>
    </div>
</div>
<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label class="input-group-text input-ant" for="paMaxHT">Plage HT ±</label>
    </div>
    <input class="form-control" aria-label="Small" aria-describedby="inputGroup-sizing-sm" id='paMaxHT' type="number" value="" />
    <div class="input-group-append">
        <span class="input-group-text input-post">MW</span>
    </div>
</div>

<div class="input-group mb-2">
    <div class="input-group-prepend">
        <label for="smaMin" class="input-group-text input-ant">Sortie procédé</label>
    </div>
    <select id='smaMin' class="custom-select" value="">
    <option value="-20">-20</option>
    <option value="-10">-10</option>
    <option value="-5">-5</option>
    <option value="0">0</option>
    <option value="4">4</option>
    </select>
    <span class="input-group-text input-group-middle">à</span>
    <select id='smaMax' class="custom-select" value="">
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

export default renderPuisAct;