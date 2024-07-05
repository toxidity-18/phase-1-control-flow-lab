function scuberGreetingForFeet(distanceInFeet){
  if (distanceInFeet <= 400) {
    return 'This one is on me!';
  } else if(distanceInFeet<=199) {
    return 'Your Scuber ride is ready!';
  }else if(distanceInFeet<=2000){
    return'Your Scuber ride i ready! That will be 20 dollars.';
  }else if(distanceInFeet<=2500){
    return'Your scuber ride is ready! That will be 30 dollars.';
  }else (distanceInFeet>2500){
    return'No can do.';
  }
}

function ternaryCheckCity(city ){
  if (city===NYC){
    return("ok,sounds,good.")
  }else{
    return("No go.")
  }
}

function switchOnCharmFromTip(Tip){
switch(tip){
  case"generous":return "Thnak you so much.";
  case"not generous":return"Thank you.";
  default:return "GoodBye."
}
}
