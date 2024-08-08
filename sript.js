let bulb=document.querySelector("#Bulbpic");
let btn=document.querySelector("#On");
let flag=0;
btn.addEventListener("click",function(){
    if(flag==0){
        bulb.style.backgroundColor="yellow";
        btn.innerHTML="Off";
       // bulb.innerHTML=<img src="Picture1_js_intt.png"></img>;
        flag=1;
    }
    else{
        bulb.style.backgroundColor="transparent";
        btn.innerHTML="On";
        //bulb.innerHTML=<img src="f1078b1e8c536ce4c52fe8bc61675764_t.jpg"></img>
        flag=0;
    }
})