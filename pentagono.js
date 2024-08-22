// JavaScript Document
function calcular(){
var lado= document.getElementById("lado");
var apotema= document.getElementById("apotema");	
lado=parseFloat(lado.value);
apotema=parseFloat(apotema.value);
var perimetro=5*lado;
var area=(perimetro*apotema)/2;
var labelarea=document.getElementById("area");
labelarea.innerText= "Area:" + area;
var labelperimetro=document.getElementById("perimetro");
labelperimetro.innerText="perimetro:" + perimetro;
}