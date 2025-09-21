

// let donate_time = document.querySelector('#donate_time');


// document.querySelector('#send').addEventListener('click',(e)=>{
//     e.preventDefault();
//     console.log(donate_time.value);
// });




let  Val;
let gov_id;
let city_id;
// For Get Cities And Gov
let Govs = [];
async function GetGov(){

    let Response = await fetch(`https://blood-bank.life/api/api/v1/governorate/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Govs =  results.data;

        d_Gov_data();
    } 
}
function d_Gov_data(){

    let All_Gov = document.querySelector('#Gov');
    let gov=``;
    for (let i = 0 ; i < Govs.length ; i++) {

            gov += `

                <option data_id=${Govs[i].id} value="${Govs[i].name}">${Govs[i].name}</option>
            
            `
    }
    All_Gov.innerHTML = gov;

}
GetGov();

// To Get  Cities that belongs to Gov From Datalist
document.querySelector('#gov').addEventListener('keyup', function(e) {
    let input = e.target,
        list = input.getAttribute('list'),
        options = document.querySelectorAll('#' + list + ' option'),
        inputValue = input.value;

    for(let i = 0; i < options.length; i++) {
        let option = options[i];

        if(option.innerText === inputValue) {
            gov_id = option.getAttribute('data_id');
            break;
        }
    }
    GetCities();

});

// For Get Cities
let AllCities = [];
async function GetCities(){

    let Response = await fetch(`https://blood-bank.life/api/api/v1/cities/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        AllCities =  results.data;

        d_Cities_data();
    } 
}
function d_Cities_data(){

    let All_Cities = document.querySelector('#City');
    let cities=``;
    for (let i = 0 ; i < AllCities.length ; i++) {
        if(gov_id == AllCities[i].gov_id){

            // I need to show api to check city_id is true syntax or not
            cities += `
    
                <option data_id=${AllCities[i].id} value="${AllCities[i].name}">${AllCities[i].name}</option>
            
            `
        }

    }
    All_Cities.innerHTML = cities;

}
// End
// To Get  Places that belongs to Cities From Datalist
document.querySelector('#city').addEventListener('keyup', function(e) {
    let input = e.target,
        list = input.getAttribute('list'),
        options = document.querySelectorAll('#' + list + ' option'),
        inputValue = input.value;

    for(let i = 0; i < options.length; i++) {
        let option = options[i];

        if(option.innerText === inputValue) {
            city_id = option.getAttribute('data_id');
            break;
        }
    }
    GetHospitals();

});
// For Get Hospitals belongs to specific City
let Hosp = [];
async function GetHospitals(){

    let Response = await fetch(`https://blood-bank.life/api/api/v1/all_donate_places_info/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Hosp =  results.data;
        d_Hospital_data();
    } 
}
function d_Hospital_data(){

  let All_Hospital = document.querySelector('#donate_place');
  let hospital=``;
  for (let i = 0 ; i < Hosp.length ; i++) {
   
      if(city_id == Hosp[i].city_id){
          hospital += `
          <option  value="${Hosp[i].place_name}"> ${Hosp[i].place_name} </option>
        `
          
      }

  }
  console.log(hospital)
  if(hospital == ''){
    All_Hospital.innerHTML = `<option  value="لا يوجد مستشفيات">لا يوجد مستشفيات</option>`
  }
  else{
    All_Hospital.innerHTML = hospital;
  }

}
// End