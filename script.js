var ranNo1=Math.floor(Math.random()*6+1);
var ranNo2=Math.floor(Math.random()*6+1);

console.log(ranNo1);
console.log(ranNo2);

var imageArr=['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png'];

var img1Loc=document.querySelector('.image1');
var img2Loc=document.querySelector('.image2');

img1Loc.src=imageArr[ranNo1-1];
img2Loc.src=imageArr[ranNo2-1];

const heading=document.querySelector('.main-heading');

if(ranNo1 > ranNo2){
  heading.textContent="🏆 Player-1 Wins!"
}
else if(ranNo2 > ranNo1){
  heading.textContent="Player-2 Wins! 🏆"
}
else{
  heading.textContent="It's a Draw 🟰"
}


