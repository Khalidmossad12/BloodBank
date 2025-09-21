
/* Start Media */
$('.media').click(function(){
    //for h3
    $(this).children('.media-heading').find('h3').addClass('media-h3-active');
    $(this).siblings('.media').children('.media-heading').find('h3').removeClass('media-h3-active');
    $(this).parent('.col-md-4').siblings('.col-md-4').children('.media').find('h3').removeClass('media-h3-active');
    //for span
    $(this).children('.media-heading').find('span').addClass('media-span-active');
    $(this).siblings('.media').children('.media-heading').find('span').removeClass('media-span-active');
    $(this).parent('.col-md-4').siblings('.col-md-4').children('.media').find('span').removeClass('media-span-active');
    //for image
    let srcImg = $(this).find('img').attr('src');
    $(this).parent('.col-md-4').siblings('.col-md-4').find('.imgs').children('.main-img').hide().attr('src',srcImg).fadeIn(500);
    // for brdr
    $(this).children('.brdr').find('.brdr-ball').addClass('ball-active');
    $(this).siblings('.media').children('.brdr').find('.brdr-ball').removeClass('ball-active');
    $(this).parent('.col-md-4').siblings('.col-md-4').children('.media').find('.brdr-ball').removeClass('ball-active');
});

/* End Media */

/* For Select Language */
$('.btn-group .dropdown-item').click(function(){
    $('.btn-sm').text($(this).text());
});
/* End Select Language */

/* brand-owl */
$(document).ready(function(){
    $('.brand-owl').owlCarousel({
        loop:true,
        margin:10,
        autoplay:true,
        autoplaySpeed:1000,
        dots:false,
        nav:true,
        responsive:{
            0:{
                items:1
            }
        }
    });
})

const spinner = document.querySelector(".spinner");

function showSpinner() {
    spinner.classList.add('show');
}
function hideSpinner() {
    spinner.classList.remove('show')
}

let Stories = [];

// Function Get All Stories
async function GetStories(){
    showSpinner();
    let Response = await fetch(`https://blood-bank.life/api/api/v1/all_stories_info/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Stories =  results.data.slice(0,6);
        hideSpinner()
        displayStories();  
    } 
}

GetStories();


function displayStories(){
    let AllStories = document.querySelector('#Stories');
    let stories=``;

    for (let i = 0 ; i <Stories.length ; i++) {

        stories += `
                <div class="col-md-4">
                    <div class="testimonials-item ">
                        <div class="person">
                            <div class="info">
                                <h3>${Stories[i].first_name} ${Stories[i].last_name}</h3>
                                <small>${Stories[i].governorate_name} , ${Stories[i].city_name}</small>
                            </div>
                            <div class="image ms-3">
                                <img  src="img/testimonials/hamza.svg" alt="hamza_photo">
                            </div>
                        </div>
                        <p>${Stories[i].content}.</p>
                    </div>   
                </div> 
            
                    `
        AllStories.innerHTML = stories;
    }

}