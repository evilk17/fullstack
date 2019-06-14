
var bandera = true;
function f1(){
  if (bandera){
  document.getElementById('p1').classList.add("cssDiv");
}
else{
  document.getElementById('p1').classList.remove("cssDiv");
}
bandera=!bandera;

}


function f2(){
  document.getElementById('p1').classList.add("cssDiv");

}

function f3(){
  document.getElementById('p1').classList.remove("cssDiv");

}
