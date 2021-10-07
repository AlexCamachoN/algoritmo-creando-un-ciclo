//----------------------DESAFIO 3--------------------
//-------USANDO FORD-------------
//pedir al usuario la carga de 8 materiales de arte para adquirir
//8 Materiales de arte:pincel,lienzo,oleo,espatula,carbon,linaza,paleta,pastel.
//usar alert con la lista de ingresos de materiales
let materialesArt = "";//variable
for (let i = 1; i <= 8; i++) {
    let art = prompt("Ingrese el nombre del material de arte nro. " + i);
    materialesArt = materialesArt + art + "\n";
    //console.log(materialesArt);
}
alert("los 8 materiales son:" + materialesArt )//se usa alert para ingresos de los materiales


//-----------DESAFIO USANDO WHILE---------------
//solicitar al usuario el ingreso de sus utiles escolares hasta que ingrese:"completo"
//luego ingresar unica salida por alert con la lista ingresada
let schoolSupplies = prompt("ingresar nombres de utiles escolares, cuando termine de ingresar su lista escribir: completo");
let ingresados = "";
while (schoolSupplies != "completo"){
    ingresados += schoolSupplies +"\n";
    schoolSupplies = prompt("ingresar nombres de utiles escolares, cuando termine escribir: completo");
}
alert("valida tu lista de utiles escolares:\n" + ingresados);