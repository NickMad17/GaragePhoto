let logo = document.getElementById('logo');
let nav = document.getElementById('nav');

document.addEventListener("DOMContentLoaded",(e)=>{
    logo.addEventListener("click",(e) =>{
        if(nav.style.display = "none"){
            nav.style.display = "flex";
        }else if(nav.style.display = "flex"){
            nav.style.display = "none";
        };
    });
});