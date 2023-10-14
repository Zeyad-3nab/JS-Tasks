const images=document.querySelectorAll(".images img")
const contaier=document.querySelector(".container")
const text=document.querySelector(".text h1");
let NewSrc;
images.forEach(e => {
e.addEventListener("click",(item)=>{
NewSrc=item.target.getAttribute('src')
    contaier.style.backgroundImage=`url(${NewSrc})` 
})
});