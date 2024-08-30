const imgs=document.querySelectorAll(".header-slide ul img")
const prv_btn=document.querySelector(".control-previes")
const next_btn=document.querySelector(".control-next")

let n=0;

function changeSlide(){

for (let i = 0; i < imgs.length; i++) {
     imgs[i].style.display='none';
}
imgs[n].style.display='block';
    
}
changeSlide()
 
prv_btn.addEventListener("click",(e)=>{
    if(n > 0){
        n--;
    }else{
        n=imgs.length-1;
    }
    changeSlide()
})

next_btn.addEventListener("click",(e)=>{
    if(n < imgs.length-1){
        n++;
    }else{
        n=0;
    }
    changeSlide()
})


//products slider
const ScrollContainer = document.querySelectorAll(".products");

for (const item of ScrollContainer) {
    item.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}
