
const spinner = document.querySelector(".spinner");

function showSpinner() {
    spinner.classList.add('show');
}
function hideSpinner() {
    spinner.classList.remove('show')
}

let Vaccines = [];

async function GetVaccines(){
    showSpinner()
    let Response = await fetch(`https://blood-bank.life/api/api/v1/vaccines/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Vaccines =  results.data.slice(0,8);
        hideSpinner()
        displayData();  
    } 
}

GetVaccines();


function displayData(){
    
    let AllVaccines = document.querySelector('#Vaccines');
    let vaccines=``;
    for (let i = 0 ; i < Vaccines.length ; i++) {

        randomNumber = Math.floor(Math.random() * (Vaccines.length));
        
        vaccines += `
            <div class="col-lg-3 col-sm-6">
                <div class="card border-0">
                    <div class="card-body text-center">
                        <div id="Img">
                            <img style="border-radius:10px"  src="img/samar/vaccines/${randomNumber}.jpg"  alt="virus">
                        </div>
                        <div class="in">
                            <h5 class="card-title fw-bold">${Vaccines[i].scientific_name}</h5>
                            <p class="card-text pb-3 fw-bold">${Vaccines[i].trade_name}</p>
                            <a href="dash-buy-vacine.html?id=${Vaccines[i].id}" class="btn-buy">شراء</a>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    AllVaccines.innerHTML = vaccines;
    

}