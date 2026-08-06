document.addEventListener("DOMContentLoaded", () => {

const pages = document.querySelectorAll(".page");

function showPage(id){

    pages.forEach(page=>{
        page.classList.add("hidden");
    });

    const target = document.getElementById(id);

    if(target){
        target.classList.remove("hidden");
    }

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}


const music = document.getElementById("bgMusic");

const startBtn = document.getElementById("startBtn");


if(startBtn){

startBtn.addEventListener("click",()=>{

  music.volume = 0.5;

music.play().then(() => {
    console.log("Music started");
}).catch(err => {
    console.error(err);
});

    showPage("honeypots");

});

}

const pots = document.querySelectorAll(".pot");

const potMessage = document.getElementById("potMessage");


const messages=[

"🍯 Every adventure is sweeter because you are part of it.",

"💛 August may bring storms, but somehow it also brought one of my favorite people.",

"🐻 Someone like you makes ordinary days special.",

"✨ If this month insists on being cloudy, just remember that some people still look forward to the day you were born."

];


pots.forEach((pot,index)=>{

pot.addEventListener("click",()=>{

    potMessage.innerHTML = messages[index];

});

});


const continueLetters =
document.getElementById("continueLetters");


if(continueLetters){

continueLetters.addEventListener("click",()=>{

    showPage("letters");

});

}

const hiddenItems =
document.querySelectorAll(".hiddenItem");


const letterMessage =
document.getElementById("letterMessage");


let found = 0;


const letters=[

"💌 Thank you for being you.",

"🌼 Thank you for making ordinary conversations feel like something worth remembering.",

"🐝 You're one of my favorite people, and I hope today reminds you how loved you are",

"🍯 I hope you never forget how much joy, comfort, and kindness you bring into other people's lives just by being yourself."

];


hiddenItems.forEach((item,index)=>{


item.addEventListener("click",()=>{


    letterMessage.innerHTML =
    letters[index];


    item.style.opacity="0.5";


    found++;


});

});


const continuePuzzle =
document.getElementById("continuePuzzle");


if(continuePuzzle){

continuePuzzle.addEventListener("click",()=>{

showPage("puzzle");

});

}


});

document.addEventListener("DOMContentLoaded",()=>{


const pages=document.querySelectorAll(".page");


function showPage(id){

pages.forEach(page=>{
page.classList.add("hidden");
});


document.getElementById(id)
.classList.remove("hidden");

}


const correct =
document.getElementById("correct");


const answerMessage =
document.getElementById("answerMessage");


if(correct){

correct.addEventListener("click",()=>{


answerMessage.innerHTML=
"Correct! 🍯 Pooh is proud of you!";


setTimeout(()=>{

showPage("birthdayLetter");

},1000);


});


}



const wrong =
document.querySelectorAll(".wrong");


wrong.forEach(button=>{


button.addEventListener("click",()=>{


answerMessage.innerHTML=
"Not quite! Try again 😊";


});


});


const wishButton =
document.getElementById("wishButton");


if(wishButton){


wishButton.addEventListener("click",()=>{


showPage("wish");


});


}


const cakeButton =
document.getElementById("cakeButton");


if(cakeButton){


cakeButton.addEventListener("click",()=>{


showPage("cakeSection");


});


}



});


document.addEventListener("DOMContentLoaded",()=>{


const candles =
document.querySelectorAll(".candle");


const blowButton =
document.getElementById("blowButton");


let count = 0;



if(blowButton){

blowButton.style.display="none";

}



candles.forEach(candle=>{


candle.addEventListener("click",()=>{


if(!candle.classList.contains("lit")){


candle.classList.add("lit");


count++;


}



if(count===19){


blowButton.style.display="inline-block";


}



});


});


if(blowButton){


blowButton.addEventListener("click",()=>{


candles.forEach(candle=>{


candle.classList.remove("lit");



let smoke=document.createElement("div");


smoke.className="smoke";


candle.appendChild(smoke);



setTimeout(()=>{

smoke.remove();

},2000);



});



setTimeout(()=>{


const message =
document.getElementById("birthdayMessage");


if(message){

message.style.display="block";

}


},1500);



confetti();



});

}



// CONFETTI


function confetti(){


const container =
document.getElementById("confettiContainer");



for(let i=0;i<80;i++){


let piece=document.createElement("div");


piece.className="confetti";


piece.style.left=
Math.random()*100+"vw";


piece.style.animationDuration=
(2+Math.random()*3)+"s";


container.appendChild(piece);



setTimeout(()=>{

piece.remove();

},5000);



}


}



});