
const navMenu=document.getElementById("nav-menu");
const navToggle=document.getElementById("nav-open");
const navClose=document.getElementById("nav-close");

// menu show
if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}

// close Menu

if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}



// remove menu with Icons

const navLinks=document.querySelectorAll(".nav_link");

function closeMenu(){
    navMenu.classList.remove('show-menu')
}

navLinks.forEach(e=>e.addEventListener('click',closeMenu))


// Sneaker Swiper

let swiperImage = new Swiper('.home-swiper', {
    // Optional parameters
    loop: true,
    spaceBetween: 64,
    centeredSlide: true,
    grabCursor: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: "fraction",
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

  let swiperTitle = new Swiper('.home-titles', {
    // Optional parameters
    loop: true,
    spaceBetween: 64,
    centeredSlide: true,
    grabCursor: true,

  })
  swiperImage.controller.control = swiperTitle;
  swiperTitle.controller.control = swiperImage;


  // Header Scroll

  window.addEventListener("scroll",scrollheader)



function scrollheader(){
    let header1=document.getElementById("header")
    this.scrollY>= 50 ? header1.classList.add("bg-header")
    :header1.classList.remove("bg-header")

    
}
