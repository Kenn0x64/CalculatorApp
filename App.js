  // setTimeout(function () {
  //   window.location.reload();
  // }, 2000);


  /////Bugs to Fix////
  //1-big numbers:::FIXED
  //2-after calculation value:::FIXED
  //3-Calculating nagative values
  //4-the dot oprand
  //5-Del button

  /////New Futures to Add///
  //1-chnageing backgroud color
  //2-Multiply calculation + Prent
  //3-Live backgroud
  //4-adding extra oprations

  //Selecting the outputs
  let Cs=document.querySelector('.current-operand');
  let Ps=document.querySelector('.previous-operand');


  //intilazing some vareabuls
  let oprand='';
  let x=0;
  let y=0;
  let z=0;
  let firstOrNot=true;
  let addNgative=true;

  //Selecting Some buttons that has diffrent functionnalty
  let Ac=document.querySelector('#AC');
  let Equal=document.querySelector('#Equal');
  let Del=document.querySelector('#Del');

  //Making Array for the buttons and Ids
  const DigitsButtonsArray=[N0,N1,N2,N3,N4,N5,N6,N7,N8,N9]
  const ButtonsOpArray=[Div,Mu,Plus,Mins,dot]
  const IdButtonsOpArray=['#Div','#Mu','#Plus','#Mins','#dot']

  for (let i = 0; i < DigitsButtonsArray.length; i++) {
    //Selecting Digts buttons
     DigitsButtonsArray[i]=document.querySelector('#N'+i);
     //Adding event
     DigitsButtonsArray[i].addEventListener('click',()=>{
        Cs.innerText+=DigitsButtonsArray[i].innerText;
    });
   }

  for (let f = 0; f < ButtonsOpArray.length; f++) {
      //Selecting operand buttons
      ButtonsOpArray[f]=document.querySelector(IdButtonsOpArray[f]);
      //Adding event Listeners to oprand buttons
      ButtonsOpArray[f].addEventListener('click',()=>{
        if (firstOrNot===true) {
          x=Number(Cs.innerText);
          firstOrNot=false
        }
        Cs.innerText+=  ButtonsOpArray[f].innerText;
        Ps.innerText+=Cs.innerText;
        Cs.innerText='';
        oprand=ButtonsOpArray[f].innerText
      })
  }
    //Adding event Listeners to AC button
    Ac.addEventListener('click',()=>{
      firstOrNot=true;
      x=0
      y=0
      Ps.innerText='';
      Cs.innerText='';
      oprand='';
      })

      //Adding Event Listeners to Equal Button
      Equal.addEventListener('click',()=>{
      y=Number(Cs.innerText)
      if(oprand==='-'){
        z=x-y
        Cs.innerText=String(x-y);
      }
      else if (oprand==='+') {
        z=x+y
        Cs.innerText=String(z);
      }
      else if (oprand==='÷') {
        z=x/y
        Cs.innerText=String(z);
      }
      else if (oprand==='*') {
        z=x*y
        Cs.innerText=String(z);
      }
      x=z
        Ps.innerText='';
    })
