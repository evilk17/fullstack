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
