$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
    })
});


// typing Animation script

var typed = new Typed('.typing',{
    strings: [
        "CSE Student",
        "Web Developer",
        "Programmer"
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});

var typed = new Typed('.typing-2',{
    strings: ["CSE Student","Web Developer","Programmer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed('.typing-3',{
    strings: ["Thank You For Invading My Space"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
    
});