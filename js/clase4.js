console.log("Buenos dias");



function f1(){
  console.log("El valor de tu texto es "+document.getElementById('text').value);

}

var obj = {
  att1:"Atributo 1",
  att2:"Atributo 2",
  funcion : function(){
    return "mensaje de funcion";
  }
};


console.log(obj.att1);
console.log(obj.funcion());


var name_destrunting = ["string","numbre","string"];
var [var1,var2,var3]=name_destrunting;
var array =[1,2,3];
array['h']="hola";
array['j']="hola";
console.log (array);
console.log(array['j']);
console.log(var1);
//Destruccion arreglos
var planets =["mercurio","venus","tierra","marte","pluton","Saturno"];
var [primero,segundo,...rest]=planets;

var num = [1,2,3,4,"Hola","Mundo"]
console.log(num);
var [...nuevoArreglo]=[...num,...planets];


//
const x = (x,y) =>x*y;

console.log(nuevoArreglo);

document.getElementById('btn').addEventListener("click",func1);

document.getElementById('p1').addEventListener("copy",func2);

function func1(){

document.getElementById('btn').innerHTML= "Me presionaron";

}

function func2(){

console.log("Copiaron el texto");

}
