const menulist=document.querySelector(".menu-list");
const menubtn=document.querySelector(".menu-btn");
const closebtn=document.querySelector(".close-btn");

menubtn.onclick=()=>{
    menulist.classList.add("active");
    closebtn.classList.remove("hide");
    menubtn.classList.add("hide");
}
closebtn.onclick=()=>{
    menulist.classList.remove("active");
    closebtn.classList.add("hide");
    menubtn.classList.remove("hide");
}
var v1=setInterval(counter1, 30);
var v2=setInterval(counter2, 300);
var v3=setInterval(counter3, 50);
 let count1=0;
 let count2=0.4;
 let count3=0;
function counter1(){
    count1++;
    document.querySelector("#s-1").innerHTML=count1;
    if(count1==153){
        clearInterval(v1)
    }
}
function counter2(){
    count2=count2+.5;
    document.querySelector("#s-2").innerHTML=count2+"K";
    if(count2==3.4){
        clearInterval(v2)
    }
}
function counter3(){
    count3++;
    document.querySelector("#s-3").innerHTML=count3;
    if(count3==33){
        clearInterval(v3)
    }
}