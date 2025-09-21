
const Months = ['01','02','03','04','05','06','07','08','09','10','11','12'];

let C_Date , Day , Month , Year; 

C_Date = new Date();

Day = C_Date.toString().split(' ')[2];
Month = Months[C_Date.getMonth()];
Year = C_Date.toString().split(' ')[3];

C_Day = Year + '-' + Month + '-' + Day ;

// Function To Get Specific Day
function CalcSpecificDay(C_Day , countDays){

  let date = new Date(C_Day);
  date.setDate(date.getDate() - countDays);

  let Day = date.toString().split(' ')[2];
  let Month = Months[date.getMonth()];
  let Year = date.toString().split(' ')[3];

  return  Year + '-' + Month + '-' + Day ;

}
// End


const spinner = document.querySelector(".spinner");

function showSpinner() {
    spinner.classList.add('show');
}
function hideSpinner() {
    spinner.classList.remove('show');
}

// Filter

$(".list1 a").click(function(e) { 

    $(".list1 a").removeClass("filter-active")
    $(e.target).addClass("filter-active")
});

$(".list2 a").click(function(e) { 

    $(".list2 a").removeClass("filter-active_2")
    $(e.target).addClass("filter-active_2")

});


// for Like
$('.contact .contact-like').click(function(){
  if($(this).hasClass('contact-like-active') && $('.contact .contact-like i').hasClass('contact-like-active')){
    $(this).removeClass('contact-like-active');
    $('.contact .contact-like i').removeClass('contact-like-active');
    $('.contact .contact-like i.fa-thumbs-up').removeClass('i-d-none');
    $('.contact .contact-like i.fa-heart').addClass('i-d-none');

  }
  else{
    $(this).addClass('contact-like-active');
    $('.contact .contact-like i').addClass('contact-like-active');
    $('.contact .contact-like i.fa-thumbs-up').addClass('i-d-none');
    $('.contact .contact-like i.fa-heart').removeClass('i-d-none');
  }
});


let Posts = [];

async function GetPosts(){
    
    showSpinner();
    let Response = await fetch(`https://blood-bank.life/api/api/v1/all_quick_requests_info/530504012422/all`);
    if(Response.ok && Response.status != 400){
        let results = await Response.json();
        Posts =  results.data;
        hideSpinner();
        
        displayData();  
    } 
}

GetPosts();

function displayData(){
    
    let Day = new Date();
    let AllPosts = document.querySelector('#Posts');
    let posts=``;
    for (let i = 0 ; i < Posts.length ; i++) {

        
      posts += `
        <div class="col-12">
            <div class="post text-end bg-white">

                <div class="person p-3 d-flex justify-content-end align-items-center">
                    <a href="#">
                        <div class="per-inf">
                            <h3>${Posts[i].first_name} ${Posts[i].last_name}</h3>
                            <p class="mb-0"><b>فى  ${Posts[i].hospital_name}</b> ${Posts[i].blood_type}  يبحث عن  </p>
                            <small class="text-secondary">${(Posts[i].time.split(' ')[0])}</small>
                        </div>
                    </a>
                    <div class="per-img">
                        <img src="img/testimonials/mohammad.svg" alt="Mohamed Image">
                    </div>
                </div>

                <p class="p-3">طفل يبلغ من العمر 14 عاما يخضع لعملية جراحية خطيرة في العمود الفقري ويحتاج إلى ${Posts[i].blood_bags_number}  أكياس من النوع ${Posts[i].blood_type}</p>

                <div class="details d-flex justify-content-end align-items-center">
                    <div class="details-inf me-3">
                        <h3>مطلوب متبرعين بالدم</h3>
                        <p class="mb-0 ">محافظة ${Posts[i].governorate_name}،  ${Posts[i].hospital_name}<i class="fas fa-map-marker-alt ms-2 text-secondary"></i></p>
                    </div>
                    <div class="details-img">
                        <span>${Posts[i].blood_type}</span>
                    </div>
                </div>

                <div class="num-comments d-flex justify-content-end py-1 px-3">
                    <small class="text-secondary"><span  class="me-2">0</span>متطوعون</small>
                    <span id="emoj"></span>
                </div>

                <div class="contact py-2 px-3 ">
                    <ul class="list-unstyled mb-0 d-flex flex-row-reverse flex-wrap position-relative justify-content-center">
                        <li class="contact-like ms-3">
                            <button>حفظ<i class="far fa-bookmark ms-1 "></i></button>
                        </li>
                        
                        <li class="contact-share">
                            <button data-bs-toggle="modal" data-bs-target="#Share">تلبية الطلب<i class="far fa-thumbs-up ms-1 "></i></button>
                        </li>
                    </ul>

                </div>

            </div>
        </div>
        `
    }
    AllPosts.innerHTML = posts;
    document.querySelector('.No_Posts').innerHTML = ``;
}

// Function To Get Posts Today And Yesterday
function GetDatePosts(D){
  let Day = new Date();
  let AllPosts = document.querySelector('#Posts');
  let posts=``;
  for (let i = 0 ; i < Posts.length ; i++) {

    if(D == Posts[i].time.split(' ')[0]){
      posts += `
        <div class="col-12">
            <div class="post text-end bg-white">
  
                <div class="person p-3 d-flex justify-content-end align-items-center">
                    <a href="#">
                        <div class="per-inf">
                            <h3>${Posts[i].first_name} ${Posts[i].last_name}</h3>
                            <p class="mb-0"><b>فى مستشفى ${Posts[i].hospital_name}</b> ${Posts[i].blood_type}  يبحث عن  </p>
                            <small class="text-secondary">${(Posts[i].time.split(' ')[0])} يوم</small>
                        </div>
                    </a>
                    <div class="per-img">
                        <img src="img/testimonials/mohammad.svg" alt="Mohamed Image">
                    </div>
                </div>
  
                <p class="p-3">طفل يبلغ من العمر 14 عاما يخضع لعملية جراحية خطيرة في العمود الفقري ويحتاج إلى ${Posts[i].blood_bags_number}  أكياس من النوع ${Posts[i].blood_type}</p>
  
                <div class="details d-flex justify-content-end align-items-center">
                    <div class="details-inf me-3">
                        <h3>مطلوب متبرعين بالدم</h3>
                        <p class="mb-0 ">محافظة ${Posts[i].governorate_name}، مستشفى ${Posts[i].hospital_name}<i class="fas fa-map-marker-alt ms-2 text-secondary"></i></p>
                    </div>
                    <div class="details-img">
                        <span>${Posts[i].blood_type}</span>
                    </div>
                </div>
  
                <div class="num-comments d-flex justify-content-end py-1 px-3">
                    <small class="text-secondary"><span  class="me-2">0</span>متطوعون</small>
                    <span id="emoj"></span>
                </div>
  
                <div class="contact py-2 px-3 ">
                    <ul class="list-unstyled mb-0 d-flex flex-row-reverse flex-wrap position-relative justify-content-center">
                        <li class="contact-like ms-3">
                            <button>حفظ<i class="far fa-bookmark ms-1 "></i></button>
                        </li>
                        
                        <li class="contact-share">
                            <button data-bs-toggle="modal" data-bs-target="#Share">تلبية الطلب<i class="far fa-thumbs-up ms-1 "></i></button>
                        </li>
                    </ul>
  
                </div>
  
            </div>
        </div>
        `
    }

  }

  if(posts == ''){
    AllPosts.innerHTML = ``;
    document.querySelector('.No_Posts').innerHTML = `لايوجد بوستات يوم ${D}`;
  }
  else{
      AllPosts.innerHTML = posts;
      document.querySelector('.No_Posts').innerHTML = ``;
  }
}

// Function To Get Posts Last Week
function LW_L2W_GetDatePosts(specificDate){

    let AllPosts = document.querySelector('#Posts');
    let posts=``;

    let start = new Date(specificDate);
    let end = new Date(C_Day);
    let loop = new Date(start);

    for( loop ; loop < end ; loop.setDate(loop.getDate() + 1)){

        let Day = loop.toString().split(' ')[2];
        let Month = Months[loop.getMonth()];
        let Year = loop.toString().split(' ')[3];
        let Curr_Date = Year + '-' + Month + '-' + Day;

        for (let i = 0 ; i < Posts.length ; i++) {

            let post_Day = new Date();
                
            if(Curr_Date == Posts[i].time.split(' ')[0]){
                    posts += `
                    <div class="col-12">
                        <div class="post text-end bg-white">
              
                            <div class="person p-3 d-flex justify-content-end align-items-center">
                                <a href="#">
                                    <div class="per-inf">
                                        <h3>${Posts[i].first_name} ${Posts[i].last_name}</h3>
                                        <p class="mb-0"><b>فى مستشفى ${Posts[i].hospital_name}</b> ${Posts[i].blood_type}  يبحث عن  </p>
                                        <small class="text-secondary">${(Posts[i].time.split(' ')[0])} يوم</small>
                                    </div>
                                </a>
                                <div class="per-img">
                                    <img src="img/testimonials/mohammad.svg" alt="Mohamed Image">
                                </div>
                            </div>
              
                            <p class="p-3">طفل يبلغ من العمر 14 عاما يخضع لعملية جراحية خطيرة في العمود الفقري ويحتاج إلى ${Posts[i].blood_bags_number}  أكياس من النوع ${Posts[i].blood_type}</p>
              
                            <div class="details d-flex justify-content-end align-items-center">
                                <div class="details-inf me-3">
                                    <h3>مطلوب متبرعين بالدم</h3>
                                    <p class="mb-0 ">محافظة ${Posts[i].governorate_name}، مستشفى ${Posts[i].hospital_name}<i class="fas fa-map-marker-alt ms-2 text-secondary"></i></p>
                                </div>
                                <div class="details-img">
                                    <span>${Posts[i].blood_type}</span>
                                </div>
                            </div>
              
                            <div class="num-comments d-flex justify-content-end py-1 px-3">
                                <small class="text-secondary"><span  class="me-2">0</span>متطوعون</small>
                                <span id="emoj"></span>
                            </div>
              
                            <div class="contact py-2 px-3 ">
                                <ul class="list-unstyled mb-0 d-flex flex-row-reverse flex-wrap position-relative justify-content-center">
                                    <li class="contact-like ms-3">
                                        <button>حفظ<i class="far fa-bookmark ms-1 "></i></button>
                                    </li>
                                    
                                    <li class="contact-share">
                                        <button data-bs-toggle="modal" data-bs-target="#Share">تلبية الطلب<i class="far fa-thumbs-up ms-1 "></i></button>
                                    </li>
                                </ul>
              
                            </div>
              
                        </div>
                    </div>
                    `
                }
            
        }
    }
    
    if(posts == ''){
        AllPosts.innerHTML = ``;

        if(c_d - day_Of_specificDate == 14 ){
            document.querySelector('.No_Posts').innerHTML = `لايوجد بوستات اخر أسبوعين `;
        }
        else{
            document.querySelector('.No_Posts').innerHTML = `لايوجد بوستات اخر 7 أيام`;
        }
    }
    else{
        AllPosts.innerHTML = posts;
        document.querySelector('.No_Posts').innerHTML = ``;
    }
}

// To Filter Posts
$('.list2 li a').click((e)=>{
    e.preventDefault();
    if(e.target.innerHTML == 'كل'){
        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                displayData();
            
            },1500)
        
    }
    else if(e.target.innerHTML == 'اليوم'){
        
        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                GetDatePosts(C_Day);
            
            },1500)
        
        
    }
    else if(e.target.innerHTML == 'الأمس'){
        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                let SpecificDay = CalcSpecificDay(C_Day,1);
                GetDatePosts(SpecificDay);
            
            },1500)
        
        
    }
    else if(e.target.innerHTML == 'اخر ٧ ايام'){

        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                let SpecificDay = CalcSpecificDay(C_Day,7);
                LW_L2W_GetDatePosts(SpecificDay);
            
            },1500)
        

    }
    else if(e.target.innerHTML == 'اخر اسبوعين'){
        const spin = setInterval(showSpinner,0);

        setTimeout(()=>{
                clearInterval(spin);
                hideSpinner();
                let SpecificDay = CalcSpecificDay(C_Day,14);
                LW_L2W_GetDatePosts(SpecificDay);
            
            },1500)
        
    
    }

});









