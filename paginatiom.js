let div1=document.createElement('div');
div1.setAttribute('id','buttons');
document.body.append(div1);




let parent=document.getElementById('buttons');

let p=document.createElement('p');
p.setAttribute('id','changePage');
p.textContent="Change:1";
parent.appendChild(p);

let data=document.createElement('div');
data.setAttribute('id','datacontent')
data.innerText=`{
    "id": "1",
    "name": "Lura Senger",
    "email": "Xander_Collier@yahoo.com"
  },
  {
    "id": "2",
    "name": "Wilburn Weber",
    "email": "Bennett_Kreiger11@yahoo.com"
  },
  {
    "id": "3",
    "name": "Tyrique Hahn",
    "email": "Juston.Altenwerth@yahoo.com"
  }`;
  parent.append(data);



//let content=

let buttons=['First','Previous']
let buttonnumber=['one','two','three','four','five','six','seven','eight','nine','ten'];
buttons.forEach(btn=>{
 let buttn=document.createElement('button');
 buttn.setAttribute('id',`${btn}`);
 buttn.innerText=btn;
 div1.appendChild(buttn);
});

let btnNumber=0;
buttonnumber.forEach(btn=>{
    btnNumber=btnNumber+1;
    let buttn=document.createElement('button');
    buttn.setAttribute('id',`${btn}`);
    buttn.innerText=btnNumber;
    div1.appendChild(buttn);
   });

var currentStep=0;
function function1(){
  currentStep=1;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('one');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:1";
  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "1",
    "name": "Lura Senger",
    "email": "Xander_Collier@yahoo.com"
  },
  {
    "id": "2",
    "name": "Wilburn Weber",
    "email": "Bennett_Kreiger11@yahoo.com"
  },
  {
    "id": "3",
    "name": "Tyrique Hahn",
    "email": "Juston.Altenwerth@yahoo.com"
  }`;
}

function function2(){
  currentStep=2;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('two');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';
  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:2";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "4",
    "name": "Lenny Bailey",
    "email": "Guiseppe_Hegmann@yahoo.com"
  },
  {
    "id": "5",
    "name": "Vladimir Keeling",
    "email": "Louisa_Walsh18@hotmail.com"
  },
  {
    "id": "6",
    "name": "Kellie Crona",
    "email": "Chandler_Abernathy@yahoo.com"
  },`;
}

function function3(){
  currentStep=3;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('three');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:3";
  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "7",
    "name": "Carolina White",
    "email": "Royal50@hotmail.com"
  },
  {
    "id": "8",
    "name": "Alfredo Conn",
    "email": "Clarabelle34@hotmail.com"
  },
  {
    "id": "9",
    "name": "Stan Shanahan",
    "email": "Lamar.McClure@hotmail.com"
  },`;
}

function function4(){
  currentStep=4;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('four');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:4";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "10",
    "name": "Marvin Fay",
    "email": "Osbaldo58@hotmail.com"
  },
  {
    "id": "11",
    "name": "Torrance Rau",
    "email": "Orin45@gmail.com"
  },
  {
    "id": "12",
    "name": "Harold Gutmann MD",
    "email": "Alyce.Stracke37@yahoo.com"
  },`;
}

function function5(){
  currentStep=5;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('five');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:5";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "13",
    "name": "Taryn Torphy",
    "email": "Dean_Breitenberg71@hotmail.com"
  },
  {
    "id": "14",
    "name": "Bryana Lang",
    "email": "Tatum.Ullrich@yahoo.com"
  },
  {
    "id": "15",
    "name": "Nyasia Green DDS",
    "email": "Dino83@gmail.com"
  },`;
}

function function6(){
  currentStep=6;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('six');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:6";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "16",
    "name": "Nasir Gerhold",
    "email": "Lilian_Bashirian8@hotmail.com"
  },
  {
    "id": "17",
    "name": "Raymundo Ritchie PhD",
    "email": "Antwan.Schoen15@yahoo.com"
  },
  {
    "id": "18",
    "name": "Delmer Marvin",
    "email": "Kiera62@yahoo.com"
  },`;
}

function function7(){
  currentStep=7;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('seven');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:7";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "19",
    "name": "Rachel Wilkinson",
    "email": "Foster_Conroy@gmail.com"
  },
  {
    "id": "20",
    "name": "Gladys Howell",
    "email": "Constance.Labadie10@yahoo.com"
  },
  {
    "id": "21",
    "name": "Ciara Klocko",
    "email": "Harvey76@yahoo.com"
  },`;
}

function function8(){
  currentStep=8;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('eight');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:8";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "22",
    "name": "Quentin O'Kon",
    "email": "Amely_Cummings2@yahoo.com"
  },
  {
    "id": "23",
    "name": "Ms. Gabriella Kunde",
    "email": "Lorenza_Cummerata@hotmail.com"
  },
  {
    "id": "24",
    "name": "Gerald Reilly",
    "email": "Lia_Konopelski@gmail.com"
  },`;
}

function function9(){
  currentStep=9;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('nine');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:9";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "25",
    "name": "Brody Carter I",
    "email": "Colten.Wilderman90@hotmail.com"
  },
  {
    "id": "26",
    "name": "Alanis Klocko",
    "email": "Johathan.Champlin69@gmail.com"
  },
  {
    "id": "27",
    "name": "Caroline Miller",
    "email": "Delaney.Kozey74@gmail.com"
  },`;
}

function function10(){
  currentStep=10;
  let bttns=document.querySelectorAll('button');
  for(i=0; i<bttns.length;i++){
  //bttns[i].setAttribute('style',' color: rgb(53,121,182),background-color: rgb(255,255,253)'); 
  bttns[i].style.color='rgb(53,121,182)';
  bttns[i].style.backgroundColor='rgb(255,255,253)'; 
  bttns[i].style.border='1px solid rgb(203, 203, 214)'; 
  }

  let bttwo=document.getElementById('ten');
  //bttwo.setAttribute('style',' color:rgb(252,252,252),background-color: rgb(51,122,184),border: none)');
  bttwo.style.color='rgb(252,252,252)';
  bttwo.style.backgroundColor='rgb(51,122,184)';
  bttwo.style.border='none';

  let changePara=document.getElementById('changePage');
  changePara.innerText="Change:10";

  let dataContent=document.getElementById('datacontent');
  dataContent.innerText=`{
    "id": "28",
    "name": "Ms. Merritt McClure",
    "email": "Wendy.Zieme@gmail.com"
  },
  {
    "id": "29",
    "name": "Jovani Schoen",
    "email": "Norval_Zieme@hotmail.com"
  },
  {
    "id": "30",
    "name": "Berniece Bradtke",
    "email": "Okey.Fisher39@hotmail.com"
  },`;
}

let first=document.getElementById('First');
let previous=document.getElementById('Previous');
let oneButton=document.getElementById('one');
let twoButton=document.getElementById('two');
let threeButtonre=document.getElementById('three');
let fourButton=document.getElementById('four');
let fiveButton=document.getElementById('five');
let sixButton=document.getElementById('six');
let sevenButton=document.getElementById('seven');
let eightButton=document.getElementById('eight');
let nineButton=document.getElementById('nine');
let tenButton=document.getElementById('ten');

//Button One
oneButton.addEventListener('click',function1);

//Button two
twoButton.addEventListener('click',function2);

//button three
threeButtonre.addEventListener('click',function3);

// button four
fourButton.addEventListener('click',function4);

//button five
fiveButton.addEventListener('click',function5);

//button six
sixButton.addEventListener('click',function6);

//button seven
sevenButton.addEventListener('click',function7);

//button eight
eightButton.addEventListener('click',function8);


//button nine
nineButton.addEventListener('click',function9);


//button ten
tenButton.addEventListener('click',function10);

first.addEventListener('click',function1);

previous.addEventListener('click',function(){
  currentStep=currentStep-1;
  if(currentStep==1){
    function1();
  }
  else if(currentStep==2){
    function2();
  }
  else if(currentStep==3){
    function3();
  }
  else if(currentStep==4){
    function4();
  }
  else if(currentStep==5){
    function5();
  }
  else if(currentStep==6){
    function6();
  }
  else if(currentStep==7){
    function7();
  }
  else if(currentStep==8){
    function8();
  }
  else if(currentStep==9){
    function9();
  }
  else if(currentStep==10){
    function10();
  }
});

// let currentPage = 1;
//         const itemsPerPage = 10; // Change this to set how many items you want per page
//         const totalItems = buttonnumber.length;
//    console.log(totalItems);
//         function showPage(page) {
//             const startIndex = (page - 1) * itemsPerPage;
//             const endIndex = Math.min(startIndex + itemsPerPage, totalItems);

//             for (let i = 0; i < totalItems; i++) {
//                 const btn = document.getElementById(buttonnumber[i]);
//                 if (i >= startIndex && i < endIndex) {
//                     //alert(btn);
//                 } else {
//                     btn.style.display = 'none';
//                 }
//             }
//         }

//         showPage(currentPage);

//         let firstButton = document.getElementById('First');
//         let previousButton = document.getElementById('Previous');
//         let oneButton = document.getElementById('one');
//         let twoButton = document.getElementById('two');

//         firstButton.addEventListener('click', function () {
//             currentPage = 1;
//             showPage(currentPage);
//         });

//         previousButton.addEventListener('click', function () {
//             if (currentPage > 1) {
//                 currentPage--;
//                 showPage(currentPage);
//             }
//         });

