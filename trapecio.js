// JavaScript Document
function calcular(){
var basemayor= document.getElementById("basemayor");
var basemenor= document.getElementById("basemenor");
var ladolateral1= document.getElementById("ladolateral2");
var ladolateral2= document.getElementById("ladolateral1");
var altura= document.getElementById("altura");	
basemayor=parseFloat(basemayor.value);
basemenor=parseFloat(basemenor.value);
ladolateral1=parseFloat(ladolateral1.value);
ladolateral2=parseFloat(ladolateral2.value);
altura=parseFloat(altura.value);
var perimetro=basemayor+basemenor+ladolateral1+ladolateral2;
var area=(basemayor+basemenor)*altura/2;
var labelarea=document.getElementById("area");
labelarea.innerText= "Area:" + area;
var labelperimetro=document.getElementById("perimetro");
labelperimetro.innerText="perimetro:" + perimetro;
}