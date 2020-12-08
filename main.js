daynight=2
step=2

let counter=setInterval(function(){
    
   if (daynight<0 || daynight>12){
    if (daynight +=step *=-1){
      
    }
  
  }
  else if (daynight<8){
    console.log("on")
  }
  else if (daynight>=8){
    console.log("of")
  }
console.log(`${daynight}\u00b0 Time is 12:00`)


  daynight+=step

},2000)

