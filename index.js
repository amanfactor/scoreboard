let userName=prompt("What the  name ,You have?",'Jaani');
console.log(userName,typeof userName);

if( userName === null){
    userName='Guest';
}
document.getElementById('user-name').textContent=userName;

let countHome=0;
let countGuest=0;
let boardElHome=document.getElementById('board-home');
let boardElGuest=document.getElementById('board-guest');
function addOneHome(){
    countHome+=1;
    boardElHome.textContent=countHome;
}
function addOneGuest(){
     countGuest+=1;
    boardElGuest.textContent=countGuest;
}
function addTwoHome(){
    countHome+=2;
    boardElHome.textContent=countHome;
}
function addTwoGuest(){

    countGuest+=2;
    boardElGuest.textContent=countGuest;
}
function addThreeHome(){
    countHome+=3;
    boardElHome.textContent=countHome;
}
function addThreeGuest(){

    countGuest+=3;
    boardElGuest.textContent=countGuest;
}
