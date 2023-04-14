$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    slideBy: 2,
    responsive:{
        0:{
            items:2,
            margin:3,
        },
        600:{
            items:2,
            margin:3,
        },
        1000:{
            items:4
        }
    }
})

// Start Menu
let toggle = document.querySelector(".btn_container .toggle")
let large = document.querySelector(".pizza_content .large");
let mini = document.querySelector(".pizza_content .mini");
function animateToggle() {
    toggle.classList.toggle("active");
    if(toggle.classList.contains("active")) {
        large.style.top = "360px";
        mini.style.top = "-380px";
        toggle.parentElement.lastElementChild.textContent = "MINI"
    } else {
        large.style.top = "0px";
        mini.style.top = "0px";
        toggle.parentElement.lastElementChild.textContent = "LARGE"
    }
}
// End Menu

//Start Menu
let items = document.querySelectorAll(".content .item_content")
let btn_items = document.querySelectorAll("#d-wrapper .filter li")
btn_items.forEach(function(ele,i) {
    ele.onclick = function() {
        btn_items.forEach(function(e) {
            e.classList.remove("active")
        });
        ele.classList.add("active");
        if(i == 0) {
            items[0].parentElement.style.height = "397px";
        } else {
            items[0].parentElement.style.height = "300px";
        }
        items.forEach(function(e,j) {
            i == j ? e.classList.add("active") : e.classList.remove("active");
        });
    }
})
//End Menu
// qr code
let qr = document.querySelector(".qr")
qr.onclick = function() {
    qr.classList.toggle("active")
}