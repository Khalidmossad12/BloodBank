
/* To Get Id From Url */ 
const url = window.location.href;
const str = url.split('=');
let v_id = str[1];
/* End */

// Main Variables
let av_Vaccines = [];
let Vaccines = [];
let Vac_Country = [];
let Vac_Places = [];
let Vac;
let Vac_Scientific_Trade;
let Country;
let Place;
let country_id;
let vaccine_place_id;


// Function To Get Available Vaccines
async function GetAvailableVaccines(){

    // To Get Available Vaccines
    let Response = await fetch(`https://blood-bank.life/api/api/v1/avilable_vaccines/530504012422/all`);
    if(Response.ok && Response.status != 400){

        let results = await Response.json();
        av_Vaccines =  results.data;

        for (let i = 0; i < av_Vaccines.length; i++) {
            if(v_id == av_Vaccines[i].vaccine_id){

                Vac = av_Vaccines[i];
                country_id = Vac.country_id;
                vaccine_place_id = Vac.vaccine_place_id;
            }
        }
        vac_Amount_Price();
    } 
}

// Function To Get scientific_name and trade_name
async function Get_Vac_Scientific_Trade() {
    // To Get scientific_name and trade_name
    let Response = await fetch(`https://blood-bank.life/api/api/v1/vaccines/530504012422/all`);
    if(Response.ok && Response.status != 400){

        let results = await Response.json();
        Vaccines =  results.data;

        for (let i = 0; i < Vaccines.length; i++) {
            if(v_id == Vaccines[i].id){

                Vac_Scientific_Trade = Vaccines[i];
                
            }
        }
        
        vac_Scientific();
        vac_Trade();
    } 
}

// Function To Get Vaccine Countries
async function GetCountry() {
    // To Get Country Vaccine Data
    let Response = await fetch(`https://blood-bank.life/api/api/v1/country/530504012422/all`);
    if(Response.ok && Response.status != 400){

        let results = await Response.json();
        Countries_vacs =  results.data;

        for (let i = 0; i < Countries_vacs.length; i++) {

            if(country_id == Countries_vacs[i].id){
                Country = Countries_vacs[i];
            }
        }
        vac_Country();
    } 
}

// Function To Get  Vaccine Places
async function GetVacPlace() {
    // To Get Vaccine Places
    let Response = await fetch(`https://blood-bank.life/api/api/v1/donate_places/530504012422/all`);
    if(Response.ok && Response.status != 400){

        let results = await Response.json();
        Vac_Places =  results.data;

        for (let i = 0; i < Vac_Places.length; i++) {

            if(vaccine_place_id == Vac_Places[i].id){
                Place = Vac_Places[i];
            }
        }
        
        vac_Place();
    } 
}


async function Get(){
    await Get_Vac_Scientific_Trade();
    await GetAvailableVaccines();
    await GetCountry();
    await GetVacPlace();
}
Get();


// Set Vac_Scientific
function vac_Scientific() {
    let Vac_Scientific = document.querySelector('#Vac_Scientific');
    let Data = `
            <div class="d-flex justify-content-between align-items-center">
                <p class="card__exit"><i class="fas fa-bolt"></i></p>
                <div class="card__icon"><i class="fas fa-viruses"></i></div>
            </div>
            <h4 class="card__title mb-2"> اسم اللقاح العلمي</h4>
            <p class="card-reply">${Vac_Scientific_Trade.scientific_name}</p>

            `
            Vac_Scientific.innerHTML = Data;
    // End
}

// Set Vac_Trade
function vac_Trade() {
    let Vac_Trade = document.querySelector('#Vac_Trade');
    let Data = `
            <div class="d-flex justify-content-between align-items-center">
                <p class="card__exit"><i class="fas fa-bolt"></i></p>
                <div class="card__icon"><i class="fas fa-viruses "></i></div>
            </div>
            <h4 class="card__title mb-2">الأسم التجارى</h4>
            <p class="card-reply">${Vac_Scientific_Trade.trade_name}</p>
            `
            Vac_Trade.innerHTML = Data;
    // End
}

// Set Vac_Country
function vac_Country() {
    let Vac_Country = document.querySelector('#Vac_Country');
    let Data = `
                <div class="d-flex justify-content-between align-items-center">
                    <p class="card__exit"><i class="fas fa-bolt"></i></p>
                    <div class="card__icon"><i class="fas fa-viruses "></i></div>
                </div>
                <h4 class="card__title mb-2">بلد النمشأ</h4>
                <p class="card-reply">${Country.name}</p>
            `
            Vac_Country.innerHTML = Data;
    // End
}

// Set Vac_Place
function vac_Place() {
    let Vac_Place = document.querySelector('#Vac_Place');
    let Data = `
                <div class="d-flex justify-content-between align-items-center">
                    <p class="card__exit"><i class="fas fa-bolt"></i></p>
                    <div class="card__icon"><i class="fas fa-viruses "></i></div>
                </div>
                <h4 class="card__title mb-2">المكان</h4>
                <p class="card-reply">${Place.place_name}</p>
            `
            Vac_Place.innerHTML = Data;
    // End
}

// Function To Get Amount and Price
function vac_Amount_Price(){

    let B_Vaccine = document.querySelector('#buyVaccine');

    // Buy Vaccine
    let buyVaccine =`
        <div class="col-12">
            <label for="priceOfvaccine">سعر العبوه</label>
            <div class="form-group mb-0">
                <input type="text" class="form-control"
                    id="priceOfvaccine" name="priceOfvaccine" value="جنية ${Vac.price} " disabled>
                <div class="field-icon"><i class="fas fa-money-bill-wave"></i></div>
                
            </div>
        </div>

        <div class="col-12">
            <label for="numOfvaccine">عدد العبوات</label>
            <div class="form-group mb-0">
                <input list="num-Of-vaccine" type="text" class="form-control"
                    id="numOfvaccine" name="numOfvaccine" placeholder="1">
                <div class="field-icon"><i class="fas fa-list-ol"></i></div>
                <datalist id="num-Of-vaccine">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </datalist>
            </div>
        </div>

        <div class="col-12">
            <div>
                <label for="totalPriceOfvaccine">السعر الكلى</label>
                <div class="form-group mb-0">
                    <input type="text" class="form-control total-price"
                        id="totalPriceOfvaccine" name="totalPriceOfvaccine"
                        value="٤٠٠ جنية" disabled>
                    <div class="field-icon"><i class="fas fa-money-check"></i></div>
                </div>
            </div>
        </div>
    
    `
    B_Vaccine.innerHTML = buyVaccine
    // End

}



