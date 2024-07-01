//================navigation bar hambberger icon pop up=======================
const hamberger=document.querySelector(".Hamberger");
const NavM=document.querySelector(".Navigation");

hamberger.addEventListener("click",()=>{
    hamberger.classList.toggle("active");
    NavM.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n=>n.addEventListener("click",()=>{
    hamberger.classList.remove("active");
    NavM.classList.remove("active");
}));
//=============================================================================

//=========================== Scroll Event================================
