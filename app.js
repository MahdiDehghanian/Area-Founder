//VARS
const selectOp = document.querySelector(".seler");
const paras = document.querySelector(".paras");
const firstIn = document.querySelector(".num1");
const secondIn = document.querySelector(".num2");
const thirdIn = document.querySelector(".num3");
const no1 = document.querySelector(".no1");
const no2 = document.querySelector(".no2");
const no3 = document.querySelector(".no3");
const err1 = document.querySelector("#err1");
const err2 = document.querySelector("#err2");
const err3 = document.querySelector("#err3");
const resid = document.querySelector("#result");
const calButton = document.querySelector(".calbtn");

//EVENT 
 selectOp.addEventListener("click" , selec);
 calButton.addEventListener("click" , cali);
 



//FUNCTION
function cali(e) {
  //ERRORS

  if (firstIn.value < 0 ) {
    err1.style.display = "flex";
    resid.style.display = "none";
    document.querySelector("#wrong").innerText = "Somthing Wrong!";
  }
  if (secondIn.value.value < 0 ) {
    err2.style.display = "flex";
    resid.style.display = "none";
    document.querySelector("#wrong").innerText = "Somthing Wrong!";

  }
  if (thirdIn.value < 0 ) {
    err3.style.display = "flex";
    resid.style.display = "none";
    document.querySelector("#wrong").innerText = "Somthing Wrong!";

  }
  //METHODES

  if (selectOp.value == "Triangle") {
    var pa = Number(firstIn.value) +Number(secondIn.value)+Number(thirdIn.value);
    var vaq = pa/2 ;
    const semis = vaq*(vaq-firstIn.value)*(vaq-secondIn.value)*(vaq-thirdIn.value);
    const hello = Math.sqrt(semis);
    document.querySelector("#result").innerText = hello;
    firstIn.value = "";
    secondIn.value = "";
    thirdIn.value = "";
  }else if (selectOp.value == "Squar") {
    var re1 = firstIn.value*firstIn.value;
    document.querySelector("#result").innerText = re1;
    firstIn.value = "";
    secondIn.value = "";
    thirdIn.value = "";

  }else if (selectOp.value == "Rectangle") {
    var re1 = (firstIn.value*secondIn.value);
    document.querySelector("#result").innerText = re1;
    firstIn.value = "";
    secondIn.value = "";
    thirdIn.value = "";

  }else if (selectOp.value == "Circle") {
    var re1 = (firstIn.value*firstIn.value)*Math.PI;
    document.querySelector("#result").innerText = re1;
    firstIn.value = "";
    secondIn.value = "";
    thirdIn.value = "";

  }



}

function selec(e){
  const todos = paras.childNodes ;
  todos.forEach(function(){
    switch(e.target.value){
      case "-----":
        no1.style.display = 'flex' ;
        no2.style.display = 'flex' ;
        no3.style.display = 'flex' ;
        break;
      case "Triangle":
        no1.style.display = 'flex' ;
        no2.style.display = 'flex' ;
        no3.style.display = 'flex' ;
      break;
      case "Squar":
        no1.style.display = 'flex' ;
        no2.style.display = 'none' ;
        no3.style.display = 'none' ;
        break;
        case "Rectangle":
          no1.style.display = 'flex' ;
          no2.style.display = 'flex' ;
          no3.style.display = 'none' ;
            break;
         case "Circle":
          no1.style.display = 'flex' ;
          no2.style.display = 'none' ;
          no3.style.display = 'none' ;
            break;
        default:
        firstIn.style.display = 'flex' ;
        secondIn.style.display = 'flex' ;
        thirdIn.style.display = 'flex' ;
        break;
  }  
  });
}
