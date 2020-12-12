daynight=2
step=2

let counter=setInterval(function(){
    
   if (daynight<0 || daynight>12){
    if (daynight >=step){
   
    step *=-1
    daynight +=step    
  
     console.log(`${daynight}\u00b0 `)
    }
  
  }

  else if (daynight<8){
    console.log(`${daynight}\u00b0 on`)
  }
  else if (daynight>=8){
    console.log(`${daynight}\u00b0 off`)
  }

   daynight+=step

},500)
