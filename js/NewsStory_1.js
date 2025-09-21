/* To Get Id From Url */ 
const url = window.location.href;
const str = url.split('=');
let blog_id = str[1];
/* End */

let News = [];
let Blo;

const spinner = document.querySelector(".spinner");

function showSpinner() {
    spinner.classList.add('show');
}
function hideSpinner() {
    spinner.classList.remove('show')
}

// Function To Get All News
async function GetNews(){
    showSpinner()
    // To Get All News
    let Response = await fetch(`https://blood-bank.life/api/api/v1/all_news_info/530504012422/all`);
    if(Response.ok && Response.status != 400){

        let results = await Response.json();
        News =  results.data;
        // Get Specific New to get its data  
        for (let i = 0; i < News.length; i++) {
            if(blog_id == News[i].id){

                Blo = News[i];
            }
        }
        hideSpinner()
        // Display New Data
        DisplayNewData();
    } 
}

GetNews();


// Function Display New Data
function DisplayNewData(){

    let New = document.querySelector('#New');
    let value_of_day = (Blo.time.split(' ')[0]);
        
    let In_New =  ` 
        <div class="container">
            <div class="row">
                <div class="col-12 ">
                    <div class="head text-center pt-3 pb-4">
                        <h1>${Blo.title}</h1>
                    </div>
                    <div class="image text-center">
                        <img src="img/imgs/newStories/0.jpg" alt="photo">
                    </div>
            
                    <div class="row justify-content-center">
                        <div class="col-md-10">
                            <div class="text-center py-3">
                                <div class="info-header">
                                    <div class="info d-flex justify-content-between ">
                                        <div class="profile">
                                            <img src="img/imgs/ahsen.svg" alt="ahsen">
                                            <span>${Blo.admin_first_name} ${Blo.admin_last_name}</span>
                                        </div>
                    
                                        <div class="time py-3">فى يوم :-  ${value_of_day}</div>
                                    </div>
                                </div>
                                <hr class="wavy-line">
                                <div class="paragraph pt-3">
                                    <p class="child-paragraph">
                                        ${Blo.content}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

                    `;
    New.innerHTML = In_New;
    // End

    

}
