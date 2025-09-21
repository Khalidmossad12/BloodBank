
var swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
     allowTouchMove:false,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

// Array To Collect Questions Data
let Requests_Container = [];
let first_val,second_val,third_val,fourth_val,fifth_val,sixth_val,seven_val,eight_val;

// Type Request Modal
let Type_Request = document.getElementById("Type_Request");
let Btn_Type_Request = document.getElementById("Btn_Type_Request");

Btn_Type_Request.onclick = function(e)
{
  if($(".modal-req input[type='radio'].form-check-input").is(':checked')) {

    first_val = $(".modal-req input[type='radio'].form-check-input:checked").val()
    Type_Request.innerHTML= first_val;
    // ContainerRequests.push(first_val);
  } 
  if(Type_Request.innerHTML == ''){
    document.querySelector('#req_type_go').classList.add('dis')
  }
  else{
    document.querySelector('#req_type_go').classList.remove('dis')
  }
}
// End

// Blood Type Modal
let Blood_Type = document.getElementById("Blood_Type");
let Btn_Blood_Type = document.getElementById("Btn_Blood_Type");

Btn_Blood_Type.onclick = function(e)
{
  if($(".modal-blood input[type='radio'].form-check-input").is(':checked')) {
      second_val = $(".modal-blood input[type='radio'].form-check-input:checked").val();
      Blood_Type.innerHTML= second_val;
  }
  if(Type_Request.innerHTML == ''){
    document.querySelector('#blood_type_go').classList.add('dis')
  }
  else{
    document.querySelector('#blood_type_go').classList.remove('dis')
  }
}
// End

// Blood Packets Modal
let Blood_Packets = document.getElementById("Blood_Packets");
let Btn_Blood_Packets = document.getElementById("Btn_Blood_Packets");

Btn_Blood_Packets.onclick = function(e)
{
  if($(".modal-blood-packets input[type='radio'].form-check-input").is(':checked')) {
      third_val = $(".modal-blood-packets input[type='radio'].form-check-input:checked").val();
      Blood_Packets.innerHTML= third_val;
  }
  if(Type_Request.innerHTML == ''){
    document.querySelector('#packets_go').classList.add('dis')
  }
  else{
    document.querySelector('#packets_go').classList.remove('dis')
  }
}
// End

// Start Reason
let Type_Reason = document.getElementById("Type_Reason");
let Btn_Type_Reason = document.getElementById("Btn_Type_Reason");

Btn_Type_Reason.onclick = function(e)
{
  if($(".modal-reason input[type='radio'].form-check-input").is(':checked')) {
      fourth_val = $(".modal-reason input[type='radio'].form-check-input:checked").val();
      Type_Reason.innerHTML= fourth_val;
  }
  if(Type_Request.innerHTML == ''){
    document.querySelector('#reason_go').classList.add('dis')
  }
  else{
    document.querySelector('#reason_go').classList.remove('dis')
  }
}
// End

// Start Type_Gov
let Type_Gov = document.getElementById("Type_Gov");
let Btn_Type_Gov = document.getElementById("Btn_Type_Gov");

Btn_Type_Gov.onclick = function(e)
{
  if($(".modal-Gov input[type='radio'].form-check-input").is(':checked')) {
      fifth_val = $(".modal-Gov input[type='radio'].form-check-input:checked").val();
      Type_Gov.innerHTML= fifth_val;
  }
  if(Type_Request.innerHTML == ''){
    document.querySelector('#gov_go').classList.add('dis')
  }
  else{
    document.querySelector('#gov_go').classList.remove('dis')
  }
}
// End

// Start Type_City
let Type_City = document.getElementById("Type_City");
let Btn_Type_City = document.getElementById("Btn_Type_City");

Btn_Type_City.onclick = function(e)
{
  if($(".modal-City input[type='radio'].form-check-input").is(':checked')) {
      sixth_val = $(".modal-City input[type='radio'].form-check-input:checked").val();
      Type_City.innerHTML= sixth_val;
  }
  if(Type_Request.innerHTML == ''){
    document.querySelector('#city_go').classList.add('dis')
  }
  else{
    document.querySelector('#city_go').classList.remove('dis')
  }
}
// End

// Start Type_Hospital
let Type_Hospital = document.getElementById("Type_Hospital");
let Btn_Type_Hospital = document.getElementById("Btn_Type_Hospital");

Btn_Type_Hospital.onclick = function(e)
{
  if($(".modal-hospital input[type='radio'].form-check-input").is(':checked')) {
      seven_val = $(".modal-hospital input[type='radio'].form-check-input:checked").val();
      Type_Hospital.innerHTML= seven_val;
  }
  if(Type_Request.innerHTML == ''){
    document.querySelector('#hospital_go').classList.add('dis')
  }
  else{
    document.querySelector('#hospital_go').classList.remove('dis')
  }
}
// End

let req_message = document.getElementById("req_message");

req_message.onkeyup = ()=>{

  if(req_message.value == ''){
      document.querySelector('#finish_go').classList.add('dis')
  }
  else{
    document.querySelector('#finish_go').classList.remove('dis')
  }

}

// get Value From Textarea
document.querySelector('#req_finished').addEventListener('click',(e)=>{
  let message_val = req_message.value;
  eight_val = message_val
  let Blood_Req_Data = {

    "req_type":first_val,
    "blood_type":second_val,
    "packets_count":third_val,
    "reason":fourth_val,
    "gov":fifth_val,
    "city":sixth_val,
    "hospital":seven_val,
    "message":eight_val

  }
  
  Requests_Container.push(Blood_Req_Data);
  console.log(Requests_Container);
});
// End

/*******************************  Start Add *******************************/



// async function login() {
//   let data={
//       email:'omar@yahoo.com',
//       password:'123485',
//   }
//   let response = await fetch(`https://route-egypt-api.herokuapp.com/signin`,{
//       method:'POST',
//       headers:{'Content-Type':'application/json'},//mean that interact with json 
//       body:JSON.stringify(data)
//   });
//   let finalRe = await response.json();
//   console.log(finalRe)
//   if(finalRe.message != 'success'){
//       let z = finalRe.message;
//       console.log(z)
//   }
//   else{
//      console.log("goood")
//   }
// }
// document.querySelector('#req_finished').addEventListener('click',(e)=>{
//   e.preventDefault();
//   login()
// });


let P_ssn = document.querySelector('#ssn').value;
console.log(P_ssn);

async function Add() {
  let Blood_Req_Data = {

    request_type:1,
    blood_type:2,
    blood_bags_number:3,
    donate_reason:5,
    place_id:3,
    message:"hello pathent need blood for medical",
    p_ssn:P_ssn

  }
    let Response = await fetch(`https://blood-bank.life/api/api/v1/quick_request/530504012422/add`,
      {
        method:'POST',
        mode:"no-cors",
        headers:{'Content-Type':'application/json'}, //mean that interact with json 
        body:JSON.stringify(Blood_Req_Data)
      }
    );

    let finalRe = await Response.json();
    console.log(finalRe);
}

document.querySelector('#req_finished').addEventListener('click',function(e){
e.preventDefault();
Add();
});
/*******************************  End Add *******************************/


/********************************* Apis *********************************/
// Req_Type
let Req_Type = [];
async function GetAllData(){

    let Response = await fetch(`https://blood-bank.life/api/api/v1/request_blood_type/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Req_Type =  results.data;
        D_Req_type();  
    } 
}
function D_Req_type(){
    
    let AllData = document.querySelector('#Req_type');
    let Data=``;
    for (let i = 0 ; i < Req_Type.length ; i++) {
        
        Data += `
          <div class="form-check">
              <input class="form-check-input" type="radio" name="Typerequest" id="${Req_Type[i].id}"
                  value="${Req_Type[i].type}">
              <label class="form-check-label" for="${Req_Type[i].id}">
                  ${Req_Type[i].type}
              </label>
          </div>
        `
    }
    AllData.innerHTML = Data;
    
}
GetAllData();
// End


// Blood_Type
let blood_Type = [];

async function GetBlood_Type(){

    let Response = await fetch(`https://blood-bank.life/api/api/v1/blood_type/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        blood_Type =  results.data;
        D_blood_Type();  
    } 
}
function D_blood_Type(){
    
  let AllData = document.querySelector('#blood_Type');
  let Data=``;
  for (let i = 0 ; i < blood_Type.length ; i++) {
      
      Data += `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="BloodType" id="${blood_Type[i].name}"
                value="${blood_Type[i].name}">
            <label class="form-check-label" for="${blood_Type[i].name}">
                ${blood_Type[i].name}
            </label>
        </div>
      `
  }
  AllData.innerHTML = Data;
  
}
GetBlood_Type();
// End


// Donate_Reason
let Donate_Reason = [];

async function GetDonate_Reason(){

    let Response = await fetch(`https://blood-bank.life/api/api/v1/donate_reasons/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Donate_Reason =  results.data;
        D_Donate_Reason();  
    } 
}
function D_Donate_Reason(){
    
  let AllData = document.querySelector('#donate_reason');
  let Data=``;
  for (let i = 0 ; i < Donate_Reason.length ; i++) {
      
      Data += `
        <div class="form-check">
            <input class="form-check-input" type="radio" name="Donate_Reason" id="${Donate_Reason[i].reason}"
                value="${Donate_Reason[i].reason}">
            <label class="form-check-label" for="${Donate_Reason[i].reason}">
                ${Donate_Reason[i].reason}
            </label>
        </div>
      `
  }
  AllData.innerHTML = Data;
  
}
GetDonate_Reason();
// End

// For Get Cities , Gov and Hospitals 
let Gov_id;
let city_id;
// For Get Gov
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


              <div class="form-check">
                  <input  class="gov form-check-input" type="radio" name="gov" data-id="${Govs[i].id}" id="${Govs[i].name}"
                      value="${Govs[i].name}">
                  <label class="form-check-label" for="${Govs[i].name}">
                      ${Govs[i].name}
                  </label>
              </div>
      
                
            `
    }
    All_Gov.innerHTML = gov;

}

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

    let All_Cities = document.querySelector('#city');
    let cities=``;
    for (let i = 0 ; i < AllCities.length ; i++) {

        if(Gov_id == AllCities[i].gov_id){

            cities += `
    
              <div class="form-check">
                    <input  class="city form-check-input" type="radio" name="city" id="${AllCities[i].name}" data-id="${AllCities[i].id}"
                        value="${AllCities[i].name}">
                    <label class="form-check-label" for="${AllCities[i].name}">
                        ${AllCities[i].name}
                    </label>
                </div>
            
            `
        }

    }
    All_Cities.innerHTML = cities;

}

async function ToPreventError(){
  await GetGov();
  $('.gov').click((e)=>{
    let input = e.target;
    Gov_id = input.getAttribute('data-id');
    
    GetCities();

  });
}
ToPreventError();

// To Get City Id
document.addEventListener('click',(e)=>{
  if(e.target.classList.contains('city')){
    let input = e.target;
    city_id = input.getAttribute('data-id');
    GetHospitals();
  }
})


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

  let All_Hospital = document.querySelector('#hospital');
  let hospital=``;
  for (let i = 0 ; i < Hosp.length ; i++) {

      if(city_id == Hosp[i].city_id){
        
          hospital += `
  
            <div class="form-check">
                  <input  class="hospital form-check-input" type="radio" name="hospital" id="${Hosp[i].place_name}"
                      value="${Hosp[i].place_name}">
                  <label class="form-check-label" for="${Hosp[i].place_name}">
                      ${Hosp[i].place_name}
                  </label>
              </div>
          
          `
          
      }

  }
  if(hospital == ''){
    All_Hospital.innerHTML = '';
    document.querySelector('.No_Hospital').innerHTML = ` لايوجد مستشفى فى هذه المدينة `;
  }
  else{
    All_Hospital.innerHTML = hospital;
    document.querySelector('.No_Hospital').innerHTML = ``;
  }

}

// End