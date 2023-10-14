const MainImage=document.querySelector(".main_image img")
const ChooseImages=document.querySelectorAll(".choose_images img")
// for (let i = 0; i < ChooseImages.length; i++) {
//    ChooseImages[i].addEventListener("click",(e)=>{
//       const NewSrc=e.target.getAttribute('src')
//       MainImage.setAttribute('src',`${NewSrc}`)
//    })
// }
ChooseImages.forEach(e => {
   e.addEventListener("click",(item)=>{
            const NewSrc=item.target.getAttribute('src')
            MainImage.setAttribute('src',`${NewSrc}`)
         })
});
