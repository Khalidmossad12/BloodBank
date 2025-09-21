let Val;
// For Header Close
$('.show-blood').click(function(){

    $('.show-cities').removeClass('active');
    $('.show-blood').addClass('active');

    $('#Cities').fadeOut(300); 
    $('#blood-list').removeClass('d-none');
    $('#blood-list').fadeIn(300);
})
 
$('.show-cities').click(function(){

  $('.show-cities').addClass('active');
  $('.show-blood').removeClass('active');

  $('#blood-list').fadeOut(300);
  $('#blood-list').addClass('d-none');
  $('#Cities').fadeIn(300);
})


/*************************************** Volunteers ****************************************/
const spinner = document.querySelector(".spinner");

function showSpinner() {
    spinner.classList.add('show');
}
function hideSpinner() {
    spinner.classList.remove('show')
}

// For Get Volunteers
let Volunteers = [];
async function GetVolunteers(){
    showSpinner()
    let Response = await fetch(`https://blood-bank.life/api/api/v1/all_patients_donners_info/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Volunteers =  results.data.slice(0,30);
        hideSpinner()
        d_volunteer();  
    } 
}
GetVolunteers();

function d_volunteer(){
    
    let AllVolunteers = document.querySelector('#Volunteer');
    let volunteers=``;
    for (let i = 0 ; i < Volunteers.length ; i++) {

        volunteers += `
                        <tr>
                            <th scope="row">${i + 1}</th>
                            <td>
                                <div class="info d-flex  align-items-center">
                                    <img src="img/imgs/khalid.jpg" alt="khalid" >
                                    <span class="me-2">${Volunteers[i].p_first_name} ${Volunteers[i].p_last_name}</span>
                                </div>
                            </td>
                            <td><span>${Volunteers[i].city_name} , محافظة ${Volunteers[i].governorate_name}</span></td>
                            <td><span>${Volunteers[i].blood_type}</span></td>
                        </tr>
        `
    }
    AllVolunteers.innerHTML = volunteers;
    
// <img id="b_type" src="img/imgs/a+.svg" alt="a+" >
}

/*************************************** End Volunteers ****************************************/


/*************************************** Cities ****************************************/

// For Get Cities
let Cities = [];
async function GetCities(){
    showSpinner();
    let Response = await fetch(`https://blood-bank.life/api/api/v1/cities/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Cities =  results.data;
        hideSpinner();
        d_Cities_data();
    } 
}
GetCities();

function d_Cities_data(){

    let All_Cities = document.querySelector('#Cities');
    let cities=``;
    for (let i = 0 ; i < Cities.length ; i++) {

        
            cities += `<li>${Cities[i].name}</li>`
    }
    All_Cities.innerHTML = cities;

}

/*************************************** End Cities ****************************************/

/*************************************** BloodTypes ****************************************/

// For Get BloodTypes
let BloodTypes = [];
async function GetBloodTypes(){
    showSpinner();
    let Response = await fetch(`https://blood-bank.life/api/api/v1/blood_type/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        BloodTypes =  results.data;

        hideSpinner();
        displayBloodData();  
        d_Volunteer_blood_type_in_Filter();
    } 

    
}

function displayBloodData(){

    let AllBloodTypes = document.querySelector('#blood-type');
    let bloodTypes=``;
    for (let i = 0 ; i < BloodTypes.length ; i++) {

            bloodTypes += `
            
                <option value="${BloodTypes[i].name}">${BloodTypes[i].name}</option>
            
            `
    }
    let all= `<option value="الكل">الكل</option>`;
    AllBloodTypes.innerHTML = all + bloodTypes ;

}

function d_Volunteer_blood_type_in_Filter(){

    let d_Volunteer_blood_type = document.querySelector('#blood-list');
    let d_Volunteer_bloodTypes=``;
    for (let i = 0 ; i < BloodTypes.length ; i++) {

            d_Volunteer_bloodTypes += `

            <li>  المتبرعين بالدم ${BloodTypes[i].name}</li>
            
            `
    }
    d_Volunteer_blood_type.innerHTML = d_Volunteer_bloodTypes;

}

/*************************************** End BloodTypes ****************************************/



async function print(){
    await GetBloodTypes();

    // To Filter Volunteers Blood Type
    $('.blood-list li').click((e)=>{
        $(e.target).addClass('active-color').siblings().removeClass('active-color');
        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                FilterVol_BloodType(e);
            
            },1500)
        
    });

    // To Filter Volunteers  Cities
    $('.city-list li').click((e)=>{
        $(e.target).addClass('active-color').siblings().removeClass('active-color');
        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                FilterVol_Cities(e);
            
            },1500)
        
        
    })
}
print();

// Function To Filter Volunteers Blood Type
function FilterVol_BloodType(e) {
    let b_type = e.target.innerHTML.split(' ')[4];


        let AllVolunteers = document.querySelector('#Volunteer');
        let volunteers=``;

        for (let i = 0 ; i < Volunteers.length ; i++) {
    
            if(b_type == Volunteers[i].blood_type){
    
                volunteers += `
                                <tr>
                                    <th scope="row">${i + 1}</th>
                                    <td>
                                        <div class="info d-flex  align-items-center">
                                            <img src="img/imgs/khalid.jpg" alt="khalid" >
                                            <span class="me-2">${Volunteers[i].p_first_name} ${Volunteers[i].p_last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>${Volunteers[i].city_name} , محافظة ${Volunteers[i].governorate_name}</span></td>
                                    <td><span>${Volunteers[i].blood_type}</span></td>
                                </tr>
                `
            }
            
        }

        if(volunteers == ''){
            AllVolunteers.innerHTML = ``;
            document.querySelector('.No_bloodTypes').innerHTML = `لايوجد متطوعين فصائل دمهم بهذه الفصيلة ${b_type}`;
        }
        else{
            AllVolunteers.innerHTML = volunteers;
            document.querySelector('.No_bloodTypes').innerHTML = ``;
        }
}

// Function To Filter Volunteers Cities
function FilterVol_Cities(e) {
    

    let v_city = e.target.innerHTML;
    

        let AllVolunteers = document.querySelector('#Volunteer');
        let volunteers=``;

        for (let i = 0 ; i < Volunteers.length ; i++) {
    
            if(v_city == Volunteers[i].city_name){
    
                volunteers += `
                                <tr>
                                    <th scope="row">${i + 1}</th>
                                    <td>
                                        <div class="info d-flex  align-items-center">
                                            <img src="img/imgs/khalid.jpg" alt="khalid" >
                                            <span class="me-2">${Volunteers[i].p_first_name} ${Volunteers[i].p_last_name}</span>
                                        </div>
                                    </td>
                                    <td><span>${Volunteers[i].city_name} , محافظة ${Volunteers[i].governorate_name}</span></td>
                                    <td><span>${Volunteers[i].blood_type}</span></td>
                                </tr>
                `
            }
            
        }

        if(volunteers == ''){
            AllVolunteers.innerHTML = ``;
            document.querySelector('.No_bloodTypes').innerHTML = `لايوجد متطوعين من هذه المدينة ${v_city}`;
        }
        else{
            AllVolunteers.innerHTML = volunteers;
            document.querySelector('.No_bloodTypes').innerHTML = ``;
        }
}

/*************************************** Datalist ****************************************/

// To Get Blood Type Value From Datalist
document.querySelector('input[list]').addEventListener('keyup', function(e) {
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

});

// To Search About Volunteers Their blood Type Equal Value Of Datalist
document.querySelector('#search').addEventListener('click', function() {

    if(Val == 'الكل')
    {
        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                d_volunteer();
            
            },1500)
        
    }
    else{

        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
            
                let AllVolunteers = document.querySelector('#Volunteer');
                let volunteers=``;
        
                for (let i = 0 ; i < Volunteers.length ; i++) {
            
                    if(Val == Volunteers[i].blood_type){
            
                        volunteers += `
                                        <tr>
                                            <th scope="row">${i + 1}</th>
                                            <td>
                                                <div class="info d-flex  align-items-center">
                                                    <img src="img/imgs/khalid.jpg" alt="khalid" >
                                                    <span class="me-2">${Volunteers[i].p_first_name} ${Volunteers[i].p_last_name}</span>
                                                </div>
                                            </td>
                                            <td><span>${Volunteers[i].city_name} , محافظة ${Volunteers[i].governorate_name}</span></td>
                                            <td><span>${Volunteers[i].blood_type}</span></td>
                                        </tr>
                        `
                    }
                    
                }
                if(volunteers == ''){
                    AllVolunteers.innerHTML = ``;
                    document.querySelector('.No_bloodTypes').innerHTML = `لايوجد متطوعين فصائل دمهم بهذه الفصيلة ${Val}`;
                }
                else{
                    AllVolunteers.innerHTML = volunteers;
                    document.querySelector('.No_bloodTypes').innerHTML = ``;
                }
            },1500)
    }

});

/*************************************** End Datalist ****************************************/


