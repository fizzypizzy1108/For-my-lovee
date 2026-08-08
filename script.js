const screens=[...document.querySelectorAll(".screen")];
let current=0;
let wishIndex=0;
const wishes=[
"May you always have the courage to chase the life you want.",
"May your hard work turn into the success you deserve.",
"May you always have people around you who genuinely love you.",
"May you find peace on the days when life feels heavy.",
"May you keep becoming the man you dream of being.",
"And may one day, all the beautiful things we talk about become our reality."
];

function show(n){
  screens[current].classList.remove("active");
  current=n;
  screens[current].classList.add("active");
  window.scrollTo({top:0,behavior:"smooth"});
}
function next(){show(current+1)}
function wish(){
  const box=document.getElementById("wishBox");
  if(wishIndex<wishes.length){
    box.textContent=wishes[wishIndex];
    wishIndex++;
  }
  if(wishIndex===wishes.length){
    setTimeout(()=>document.querySelector("#s3 button").textContent="Continue →",300);
    document.querySelector("#s3 button").onclick=next;
  }
}
function finale(){
  const burst=document.createElement("div");
  burst.textContent="♡";
  burst.style.cssText="position:fixed;inset:0;display:flex;align-items:center;justify-content:center;font:10rem 'Cormorant Garamond';color:#fff;opacity:0;pointer-events:none;animation:fadeHeart 1.6s ease forwards;z-index:20";
  document.body.appendChild(burst);
  const st=document.createElement("style");
  st.textContent="@keyframes fadeHeart{0%{opacity:0;transform:scale(.5)}35%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.35)}}";
  document.head.appendChild(st);
  setTimeout(()=>{burst.remove();show(6)},1200);
}
function toggleMusic(){
  const audio=document.getElementById("audio");
  const btn=document.getElementById("musicBtn");
  const text=document.getElementById("musicText");
  if(audio.paused){
    audio.play().then(()=>{btn.textContent="Ⅱ";text.textContent="Pause our song"}).catch(()=>{text.textContent="Add those-eyes.mp3 first"});
  }else{
    audio.pause();btn.textContent="♫";text.textContent="Play our song";
  }
}
