const ShowBtn=document.querySelector(".button button");
const Message=document.querySelector(".message")
const OkButton=document.querySelector(".message button")
const container=document.querySelector(".container")
 const ShowMessage=()=>{
  container.style.display="flex";
  ShowBtn.style.opacity=".4"
 }
 const HideMessage=()=>{
  container.style.display="none";
  ShowBtn.style.opacity="1"
    }
ShowBtn.addEventListener("click",()=>{
  ShowMessage();
})
container.addEventListener("click",()=>{
  HideMessage();
})
OkButton.addEventListener("click",()=>{
  HideMessage();
})
    
