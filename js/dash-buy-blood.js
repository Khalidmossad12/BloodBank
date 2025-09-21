let Val;
let blood_type_id;
let blood_price;
let blood_amount;
// For Get BloodTypes
let BloodTypes = [];
async function GetBloodTypes(){
    
    let Response = await fetch(`https://blood-bank.life/api/api/v1/blood_type/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        BloodTypes =  results.data;
        displayBloodType();  
    } 
    
}

function displayBloodType(){

    let AllBloodTypes = document.querySelector('#blood-type');
    let blood=``;
    for (let i = 0 ; i < BloodTypes.length ; i++) {

        blood += `
            
                <option data-id="${BloodTypes[i].id}" value="${BloodTypes[i].name}">${BloodTypes[i].name}</option>
            
            `
    }
    AllBloodTypes.innerHTML =  blood ;

}
GetBloodTypes();




/********************** Start To Gether ***********************/
// To Get Id About Blood Type
document.querySelector('input[list]').addEventListener('keyup', function(e) {
    let input = e.target,
        list = input.getAttribute('list'),
        options = document.querySelectorAll('#' + list + ' option');
        inputValue = input.value;

    for(let i = 0; i < options.length; i++) {
        let option = options[i];

        if(option.innerText === inputValue) {
            blood_type_id = option.getAttribute('data-id');
            break;
        }
    }

    GetAvailableBlood();

});
// For Get AvailableBlood
let AvailableBlood = [];
async function GetAvailableBlood(){
    
    let Response = await fetch(`https://blood-bank.life/api/api/v1/avilable_blood/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        AvailableBlood =  results.data;

        DisplayBloodPrice();  
    } 
    
}
// Function Display Blood Price
function DisplayBloodPrice(){

    for (let i = 0; i < AvailableBlood.length; i++) {
        if(blood_type_id == AvailableBlood[i].id){
            
            document.querySelector('#priceOfBlood').setAttribute('value',`جنية ${AvailableBlood[i].price}`);
            blood_price = AvailableBlood[i].price;
            blood_amount = AvailableBlood[i].amount;
        }

    }

}
/********************** End To Gether ***********************/


// To Calc the Total Price of Blood Bags
document.querySelector('#numOfBlood').addEventListener('keyup', function(e) {
    let input = e.target,
        list = input.getAttribute('list'),
        options = document.querySelectorAll('#' + list + ' option'),
        hiddenInput = document.getElementById(input.getAttribute('id') + '-hidden'),
        inputValue = input.value;

        hiddenInput.value = inputValue;

    for(let i = 0; i < options.length; i++) {
        let option = options[i];

        if(option.innerText === inputValue) {
            hiddenInput.value = option.getAttribute('value');
            Val = hiddenInput.value ;
            break;
        }
    }

    document.querySelector('#totalPriceOfBlood').setAttribute('value',`جنية ${blood_price * Val}`);

});


// To Check The Amount Of Blood  Bags
let Req = document.querySelector('#request');
let fail = `هذا اللقاح غير متوافر حاليا و سيتم تقديم طلبك و الرد عليك لاحقا`;
let success = `طلبك قيد التنفيذ`;

Req.addEventListener('click',() => {
    Request();
})
function Request() {
    // console.log(blood_amount)
    if(blood_amount == 0){
        document.querySelector('.modal-body').innerHTML = fail;
    }
    else{
        document.querySelector('.modal-body').innerHTML = success;
    }
}

