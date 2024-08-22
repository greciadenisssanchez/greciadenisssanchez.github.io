// JavaScript Document
function calcular(){
var lado= document.getElementById("lado");
lado=parseFloat(lado.value);
var area=lado*lado;
var perimetro=4*lado;
var labelarea=document.getElementById("area");
labelarea.innerText= "Area:" + area;
var labelperimetro=document.getElementById("perimetro");
labelperimetro.innerText="perimetro:" + perimetro;
}