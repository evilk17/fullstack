var mensaje = "Hola Mundo";
var i1=30
function f1(){
  var x= 12;
  var y="Junio";
  var z= 2018;

  return mensaje+" hoy es "+x+" de "+y+" del "+z;

}

function f2 (){
  var x=100;
  var y=200;
  return x*y;
}

function f3(nombre){
  for (var i =0;i<=10;i++){
    console.log(nombre+" "+i);
  }
}

var i=10;
var u="11";
if(i>=u){
    console.log("i es mayor o igual a u");
}else{
  console.log("u es mayor");
}


for (var i = 10; i>0;i--){
  console.log(i);

}
j=20;
while(j<=15){
  j-=1;
  console.log(j);
}


var nombre="Gerardo";
if (nombre == "Gerardo1"){
  console.log("Ingresa al if");
  f3(nombre);


}


function f4 (){
  var x ="Ya son las 11:"+(i1%60);
  document.getElementById('test').innerHTML=x;
  i1++;

}
function f5 (){
  var x ="Ya son las 11:"+(i1%60);
  document.getElementById('prueba').innerHTML=x;
i1++;
}
