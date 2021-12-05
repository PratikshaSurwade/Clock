

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
        setTime();
    }
}



function setTime(){
    flag=true;
    console.log(" flag=true");
    let today = new Date();

    let hours=document.getElementById('hours');

    hours=today.getHours();
   
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


    //Displaying Block

    document.querySelector(".gridItem4").style.display = "block";

    //Displaying Info submitted
    document.getElementById('msg1').innerHTML=` Wakeup Time :  ${wakeUpMsgSelected}`;
    document.getElementById('msg2').innerHTML=`Lunch Time :  ${lunchMsgSelected}`;
    document.getElementById('msg3').innerHTML=`Dinner Time :  ${napMsgSelected}`;
                    
 

    // console.log(wakeUpMsgSelected);
    // console.log(lunchMsgSelected);
    // console.log(napMsgSelected);


    // console.log(wakeUpTimeSelected);
    // console.log(lunchTimeSelected);
    // console.log(napTimeSelected);

    
        if ( wakeUpTimeSelected== hours) {
            document.getElementById('textGreeting').innerHTML="Hey, Lets Have some BreakFast !!";
            document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="images/breakFastTime.png"></img>`;
            // console.log("Hey, Lets Have some BreakFast !!")
        }
        
        else if ( lunchTimeSelected== hours) {
            document.getElementById('textGreeting').innerHTML="Hey, Lets Have some Lunch !!";
            document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="./images/lunch.png">`;
            // console.log("Hey, Lets Have some Lunch !!")
        }

         else if ( napTimeSelected== hours) {
            document.getElementById('textGreeting').innerHTML="Hey, Lets Have some Dinner !!";
            document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="./images/dinnertime.png">`;
            // console.log("Hey, Lets Have some Dinner !!")
        }
        else{
            document.getElementById('textGreeting').innerHTML="Hii , Have a Good Day !!";
            document.getElementById('pictureGreeting').innerHTML=`<img class="WelCome" src="./images/ballonImg.png">`;
        }


}