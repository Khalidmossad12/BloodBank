
$('.testimonial_owlCarousel').owlCarousel({
    loop:true,
    margin:10,
    dots:false,
    nav:true,
    autoplay:false,   
    smartSpeed: 1000, 
    autoplayTimeout:4000,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
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
    showSpinner()
    let Response = await fetch(`https://blood-bank.life/api/api/v1/all_stories_info/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Stories =  results.data.slice(0,8);
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
                <div class="col-md-6">
                    <div class="testimonials " >
                        <div class="testimonial_content">
                            <div class="testimonial_caption">
                                <h6>${Stories[i].first_name} ${Stories[i].last_name} </h6>
                                <span>${Stories[i].governorate_name} ,${Stories[i].city_name}</span>
                            </div>
                            <p>${Stories[i].content}</p>
                        </div>
                        <div class="images_box">
                            <div class="testimonial_img">
                                <img class="img-center" src="img/testimonials/member-1.jpg" alt="images not found">
                            </div>
                        </div>
                    </div>   
                </div>
                    `
    }
    AllStories.innerHTML = stories;

}

