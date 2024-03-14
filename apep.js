let gameseq=[];
let userseq=[];
let btns=["yellow","red","purple","green"];
let started=false;
let level=0;
let score=0;
let h2=document.querySelector("h2");
let h3=document.querySelector("h3");
document.addEventListener("keypress",function(){
    if(started==false){
        console.log("game started");
        started=true;
    }
    levelup();
}); 

function gameFlash(btn){
 btn.classList.add("flash");
 setTimeout(function(){
    btn.classList.remove("flash");

 },250) ;
}

function userflash(btn){
    btn.classList.add("userflash");
    setTimeout(function(){
       btn.classList.remove("userflash");
   
    },250)   ;
}
function levelup(){
    userseq=[];
    level++;
    h2.innerText=`Level ${level}`;

    let randIndx=Math.floor(Math.random()*3);
    let randColor=btns[randIndx];
    let randBtn=document.querySelector(`${randColor}`);
    gameseq.push(randColor);
    console.log(gameseq);
    gameFlash(randBtn);
}

function checkAns(idx){
    //console.log("curr level:",level);
    //let idx=level-1;
    if(userseq[idx]===gameseq[idx]){
        if(userseq.length==gameseq.length){
            setTimeout(levelup,1000);
        }
        console.log("same value");
    }
    else{
        h2.innerHTML=`Game Over!<b>${level}</b> <br>press any key to start`;
        if(score<level){
            score=level;
        }
        h3.innerHTML= `high score is <b>${score}</b>`;
        document.querySelector("body").style.backgroundColor="red";
        setTimeout(function(){
            document.querySelector("body").style.backgroundColor="white";
        },150);
        
        
        level=0; 
        
        reset();


    }

}

function btnPress(){
    let btn=this;
    userflash(btn);
    let  userColor=btn.getAttribute("id");
    console.log(userColor);
    userseq.push(userColor);
    checkAns(userseq.length-1);
}

let allBtns=document.querySelectorAll(".btn");
for(btn of allBtns){
    btn.addEventListener("click",btnPress);
}

function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];

}

