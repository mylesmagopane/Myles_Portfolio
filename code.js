// tabs link

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents")

var typed = new Typed('#typed',{
    strings : ["UI/IX Design","Web Development","Mobile Applications" +"","Software Development","Full Stack Development"],
    typeSpeed: 150,
    backSpeed : 150,
    loop : true}   
);     

function opentab (tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");                          
    }

    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");                          
    }
    
   event.currentTarget.classList.add("active-link");   
   document.getElementById(tabname).classList.add("active-tab"); 
}




