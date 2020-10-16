//executes if a different color selection is made
const changeColor = value => {
  if (value == "blue"){
    document.getElementById("header").style.backgroundColor =  "#5ECAFB"; //header color change
    document.getElementById("body").style.backgroundColor =  "#D5F1FE";   //body color change
    document.getElementById("color-message").style.color =  "#2f90bd";    //meesage color change
    document.getElementById("location").style.color =  "#2f90bd";    //location color change
    document.getElementById("date").style.color =  "#2f90bd";    //date color change
    document.getElementById("submit").style.backgroundColor =  "#2f90bd";    //submit color change
  } else if (value == "red"){
    document.getElementById("header").style.backgroundColor =  "#FF5555";  //header color change
    document.getElementById("body").style.backgroundColor =  "#FAA8A8";  //body color change
    document.getElementById("color-message").style.color =  "#E91818";  //meesage color change
    document.getElementById("location").style.color =  "#E91818";    //location color change
    document.getElementById("date").style.color =  "#E91818";    //date color change
    document.getElementById("submit").style.backgroundColor =  "#E91818";    //submit color change
  } else if (value == "green"){
    document.getElementById("header").style.backgroundColor =  "#52D549"; //header color change
    document.getElementById("body").style.backgroundColor =  "#A5F6A0";   //body color change
    document.getElementById("color-message").style.color =  "#18970F";  //meesage color change
    document.getElementById("location").style.color =  "#18970F";    //location color change
    document.getElementById("date").style.color =  "#18970F";    //date color change
    document.getElementById("submit").style.backgroundColor =  "#18970F";    //submit color change
  } else {
    document.getElementById("header").style.backgroundColor =  "grey";    //header color change
    document.getElementById("body").style.backgroundColor =  "#C9CBC9";    //body color change
    document.getElementById("color-message").style.color =  "grey";   //meesage color change
    document.getElementById("location").style.color =  "grey";    //location color change
    document.getElementById("date").style.color =  "grey";    //date color change
    document.getElementById("submit").style.backgroundColor =  "grey";    //submit color change
  }
}

// date value change
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth() + 1; 
let yyyy = today.getFullYear();
if(dd < 10) {
  dd ='0'+ dd;
} 

if(mm < 10) {
  mm ='0'+ mm;
}

today = mm + '/' + dd + '/' + yyyy;
document.getElementById("date").innerHTML = today;