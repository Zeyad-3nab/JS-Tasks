const right=document.querySelector(".container i:nth-child(3)")
const left=document.querySelector(".container i:nth-child(1)")
const container=document.querySelector(".container")
// const arr=[{urlImage:'./assits/style/images/1.jpg'},{urlImage:'./assits/style/images/2.jpg'},{urlImage:'./assits/style/images/3.jpg'}];
const content=document.querySelector(".container .b_g h1")
let Count=0;
function RightSlider(){
   Count++;
   if(Count>2){
      Count=0
   }
   //هنا بدل م اعملهم في اراي خليت الصور بتاعتي تبقي ارقام واتعاملت اني اجيبه بالكونت
   container.style.backgroundImage=`url(./assits/style/images/${Count+1}.jpg)`
   content.textContent=`Slider ${Count+1}`
}
function LeftSlider(){
   Count--;
   if(Count<0){
      Count=2
   }
   container.style.backgroundImage=`url(./assits/style/images/${Count+1}.jpg)`
   content.textContent=`Slider ${Count+1}`
}
right.addEventListener("click",RightSlider)
left.addEventListener("click",LeftSlider)
