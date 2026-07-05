window.addEventListener("load", function () {

    VANTA.NET({
        el: "#background",

        mouseControls: true,
        touchControls: true,
        gyroControls: false,

        color: 0x8b5cf6,
        backgroundColor: 0x090909,

        points: 10,
        maxDistance: 25,
        spacing: 32,

        showDots: true
    });

});

window.addEventListener("scroll", function(){

    const nav = document.querySelector("nav");

    if(window.scrollY > 50){

        nav.style.background = "rgba(15,15,20,.9)";

    }else{

        nav.style.background = "rgba(15,15,20,.55)";

    }

});