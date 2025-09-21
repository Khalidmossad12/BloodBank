
var swiper = new Swiper(".mySwiper", {
     spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


// Type Request Modal
let Type_Request = document.getElementById("Type_Request");
let Btn_Type_Request = document.getElementById("Btn_Type_Request");

Btn_Type_Request.onclick = function(e)
{
  if($(".modal-req input[type='radio'].form-check-input").is(':checked')) {

    let card_type = $(".modal-req input[type='radio'].form-check-input:checked").val()
    Type_Request.innerHTML= card_type;
    
  } 
}
// End

// Blood Type Modal
let Blood_Type = document.getElementById("Blood_Type");
let Btn_Blood_Type = document.getElementById("Btn_Blood_Type");

Btn_Blood_Type.onclick = function(e)
{
  if($(".modal-blood input[type='radio'].form-check-input").is(':checked')) {
      let card_type = $(".modal-blood input[type='radio'].form-check-input:checked").val();
      Blood_Type.innerHTML= card_type;
  }
}
// End

// Start Reason
let Type_Reason = document.getElementById("Type_Reason");
let Btn_Type_Reason = document.getElementById("Btn_Type_Reason");

Btn_Type_Reason.onclick = function(e)
{
  if($(".modal-reason input[type='radio'].form-check-input").is(':checked')) {
      let card_type = $(".modal-reason input[type='radio'].form-check-input:checked").val();
      Type_Reason.innerHTML= card_type;
  }
}
// End


// Start Type_Hospital
let Type_Hospital = document.getElementById("Type_Hospital");
let Btn_Type_Hospital = document.getElementById("Btn_Type_Hospital");

Btn_Type_Hospital.onclick = function(e)
{
  if($(".modal-hospital input[type='radio'].form-check-input").is(':checked')) {
      let card_type = $(".modal-hospital input[type='radio'].form-check-input:checked").val();
      Type_Hospital.innerHTML= card_type;
  }
}
// End
