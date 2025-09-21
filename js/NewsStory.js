
const spinner = document.querySelector(".spinner");

function showSpinner() {
    spinner.classList.add('show');
}
function hideSpinner() {
    spinner.classList.remove('show')
}

let Blogs = [];

async function GetBlogs(){
    showSpinner()
    let Response = await fetch(`https://blood-bank.life/api/api/v1/blog/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Blogs =  results.data;
        hideSpinner()
        displayData();  
    } 
}

GetBlogs();



function displayData(){
    
    let AllBlogs = document.querySelector('#Blogs');
    let blogs=``;
    


    // let x = ``;
    // <img src = ${Blogs[i].img ? x+Blogs[i].img :  'img/imgs/newStories/${randomNumber}.jpg'} ></img>
    for (let i = 0 ; i < Blogs.length ; i++) {

        let randomNumber = Math.floor(Math.random() * (Blogs.length));
        let value_of_day = (Blogs[i].time.split(' ')[0]);
        blogs += `
            <div class="card">
                <div class="blurring dimmable image">
                    <div class="inner">
                        <div class="content">
                            <div class="center">
                                <a href="NewsStory_1.html?id=${Blogs[i].id}" target="_blank">
                                    <div class="ui inverted button" >عرض</div>
                                </a>  
                            </div>
                        </div>
                    </div>

                    
                    <img  src='img/imgs/newStories/${Blogs[i].img == 0 ? Blogs[i].img : `${randomNumber}.jpg`}' >

                </div>
                <div class="content">
                    <div class="meta">
                        <p class=" text-dark">${Blogs[i].title}</p>
                        <span class="date">  تم الإنشاء منذ : ${value_of_day}</span>
                    </div>
                </div>
                <div class="extra content">
                    <a class=" d-flex">
                        <i class="fas fa-users fs-4 text-danger"></i>
                        <span class=" px-2">3 مشاهدات</span>
                    </a>
                </div>
            </div>
        `
    }
    AllBlogs.innerHTML = blogs;
    

}