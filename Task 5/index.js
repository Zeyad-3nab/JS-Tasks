const menu=document.querySelector(".menu")
const list=document.querySelector(".list")
menu.addEventListener("click",()=>{
   
   if(list.style.display=="flex"){
      list.style.display="none";
   }
   else{
      //هنا حاولت اعملها ب اف ايلس ضربت معايا في الميديا كويري
      list.style.display="flex";
      list.style.position="absolute";
      list.style.right="0";
      list.style.top="60px";
      list.style.background="black";
      list.style.width="100%";
      list.style.flexDirection="column";  
   }
})