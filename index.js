
let flag=false;

setInterval(currentTime, 1000);

function currentTime(){
    //Setting Current time

    let today = new Date();

    let hours=document.getElementById('hours');
    hours.innerHTML=`${today.getHours()}`
    hours=today.getHours();
   
    let mins=document.getElementById('mins');
    mins.innerHTML=`${today.getMinutes()}`

    let secs=document.getElementById('secs');
    secs.innerHTML=`${today.getSeconds()}`

    //Considering Am - Pm 
    if (hours==0 || hours==12){
        let Hours=12;
        
        document.getElementById('hours').innerHTML=Hours;
    }

    else if(hours<12){
        let amPm=document.getElementById('amPm');
  
        amPm.innerHTML=`AM`;
        if(hours<10){
            document.getElementById('hours').innerHTML="0"+ hours;
        }
        else{
            document.getElementById('hours').innerHTML=hours; 
        }
    console.log("Time < 12 >>> Am");
    
    }

    else if (hours > 12){
        let amPm=document.getElementById('amPm');
        let Hours = hours - 12 ;
        
        amPm.innerHTML=`PM`;
        if(Hours<10){
            document.getElementById('hours').innerHTML="0"+ Hours;
        }
        else{
            document.getElementById('hours').innerHTML=Hours; 
        }
        
    }

    //Checking for Values of Wakeup time , lunch time and Dinner time

    if(flag==true){
        getTime();
    }
}



function setTime(){
    flag=true;
    console.log(" flag=true");
    
   
    //Selecting Wakeup time

    let wakeUpTime = document.getElementById('wakeupTimeSelector');
    let wakeUpTimeSelected = wakeUpTime.options[wakeUpTime.selectedIndex].value;
    let wakeUpMsgSelected = wakeUpTime.options[wakeUpTime.selectedIndex].text;

    //Selecting Lunch Time

    let lunchTime = document.getElementById('lunchTimeSelector');
    let lunchTimeSelected = lunchTime.options[lunchTime.selectedIndex].value;
    let lunchMsgSelected = lunchTime.options[lunchTime.selectedIndex].text;

    //Selecting Dinner Time


    let napTime = document.getElementById('napTimeSelector');
    let napTimeSelected = napTime.options[napTime.selectedIndex].value;
    let napMsgSelected = napTime.options[napTime.selectedIndex].text;


    displayBlock(wakeUpMsgSelected,lunchMsgSelected,napMsgSelected);

    document.getElementById('msg_1').innerHTML = `${wakeUpTimeSelected}`;

    document.getElementById('msg_2').innerHTML = `${lunchTimeSelected}`;

    document.getElementById('msg_3').innerHTML = `${napTimeSelected}`;


}


function displayBlock(wakeUpMsgSelected,lunchMsgSelected,napMsgSelected){
     
    //Displaying Block

    document.querySelector(".gridItem4").style.display = "block";

    //Displaying Info submitted
    document.getElementById('msg1').innerHTML=` Wakeup Time :  ${wakeUpMsgSelected}`;
    document.getElementById('msg2').innerHTML=`Lunch Time :  ${lunchMsgSelected}`;
    document.getElementById('msg3').innerHTML=`Dinner Time :  ${napMsgSelected}`;
         
}

function getTime(){

    //Getting selected time

     const time1 =  document.getElementById('msg_1');
     const time2 = document.getElementById('msg_2');
     const time3  =  document.getElementById('msg_3');
    console.log(time1.innerText);
    console.log(time2.innerText);
    console.log(time3 .innerText);

    const finalwakeupTime =  time1.innerText;
    const finallunchTime = time2.innerText;
    const finaldinnerTime  = time3 .innerText;


    //reaaranging hours

    let today = new Date();

    let hours=document.getElementById('hours');

    hours=today.getHours();

    //Setup for change in image as  per set time

    if ( finalwakeupTime == hours) {
        document.getElementById('textGreeting').innerHTML="Hey, Lets Have some BreakFast !!";
        document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="images/breakFastTime.png"></img>`;
    }
    
    else if ( finallunchTime == hours) {
        document.getElementById('textGreeting').innerHTML="Hey, Lets Have some Lunch !!";
        document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="./images/lunch.png">`;
    }

     else if ( finaldinnerTime == hours) {
        document.getElementById('textGreeting').innerHTML="Hey, Lets Have some Dinner !!";
        document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="./images/dinnertime.png">`;
    }
    else{
        document.getElementById('textGreeting').innerHTML=" Hii !! ..";
        document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="./images/ballonImg.png">`;
    }
}