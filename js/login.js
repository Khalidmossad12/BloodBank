// Transition for SignIn SignUp by using display:none opacitiy:0
let sign_up_click = document.querySelector('.sign-up-click');
let sign_In_box = document.querySelector('.sign-In-box');

let sign_in_click = document.querySelector('.sign-in-click');
let sign_Up_box = document.querySelector('.sign-Up-box');

sign_up_click.addEventListener('click',()=>{
    sign_Up_box.classList.remove('hidden');
    setTimeout(function () {
        sign_Up_box.classList.remove('visuallyhidden');
    }, 10);
    sign_In_box.classList.add('hidden');
    sign_In_box.classList.add('visuallyhidden');
});

sign_in_click.addEventListener('click',()=>{
    sign_In_box.classList.remove('hidden');
    setTimeout(function () {
        sign_In_box.classList.remove('visuallyhidden');
    }, 10);
    sign_Up_box.classList.add('hidden');
    sign_Up_box.classList.add('visuallyhidden');
});

// For signIn and Forget Password
$('.login-slide .forgot-password-click').click(function(){
    $('.login-slide').css({left:'-100%'});
    $('.forget-slide').css({left:0});
});
$('.forget-slide .sign-up-click').click(function(){
    $('.login-slide').css({left:'0'});
    $('.forget-slide').css({left:'100%'});
});

// For signUp and Next Values
$('.signUp-slide .btn-next').click(function(){
    $('.signUp-slide-next-values').css({left:0});
    $('.signUp-slide').css({left:'100%'});
});
$('.signUp-slide-next-values .btn-prev').click(function(){
    $('.signUp-slide').css({left:'0'});
    $('.signUp-slide-next-values').css({left:'-100%'});
});


// For Verify 
let send = document.querySelector('.send');
let next = document.querySelector('.next');

// to go to code slide page
send.addEventListener('click',()=>{
    $('.login-slide').css({left:'-200%'});
    $('.forget-slide').css({left:'-100%'});
    $('.code-slide').css({left:'0'});
    $('.changePass-slide').css({left:'100%'});
});

// to go to change password page
next.addEventListener('click',()=>{
    $('.login-slide').css({left:'-300%'});
    $('.forget-slide').css({left:'-200%'});
    $('.code-slide').css({left:'-100%'});
    $('.changePass-slide').css({left:'0'});
});

// to comeback to login page
$('.changePass-slide .sign-up-click').click(function(){
    $('.login-slide').css({left:'0'});
    $('.forget-slide').css({left:'100%'});
    $('.code-slide').css({left:'200%'});
    $('.changePass-slide').css({left:'300%'});
});



let  Val;
let gov_id;
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

            cities += `
    
                <option value="${AllCities[i].name}">${AllCities[i].name}</option>
            
            `
        }

    }
    All_Cities.innerHTML = cities;

}
// End

// For Get BloodTypes
let BloodTypes = [];
async function GetBloodTypes(){
    
    let Response = await fetch(`https://blood-bank.life/api/api/v1/blood_type/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        BloodTypes =  results.data;

        displayBloodData();  
    } 
    
}
function displayBloodData(){

    let AllBloodTypes = document.querySelector('#blood');
    let bloodTypes=``;
    for (let i = 0 ; i < BloodTypes.length ; i++) {

            bloodTypes += `
            
                <option value="${BloodTypes[i].name}">${BloodTypes[i].name}</option>
            
            `
    }
    AllBloodTypes.innerHTML =  bloodTypes ;

}
GetBloodTypes();


// For Get Gender
let Gender = [];
async function GetGender(){
    
    let Response = await fetch(`https://blood-bank.life/api/api/v1/gender/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Gender =  results.data;

        displayGenderData();  
    } 
    
}
function displayGenderData(){

    let AllGender = document.querySelector('#gendar');
    let gender=``;
    for (let i = 0 ; i < Gender.length ; i++) {

        gender += `
            
                <option value="${Gender[i].type}">${Gender[i].type}</option>
            
            `
    }
    AllGender.innerHTML =  gender ;

}
GetGender();
// End
