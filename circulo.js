// JavaScript Document
function calcular(){
var radio= document.getElementById("radio");
radio=parseFloat(radio.value);
var area=Math.PI*Math.pow(radio,2);
var perimetro=2*Math.PI*radio;
var labelarea=document.getElementById("area");
labelarea.innerText= "Area:" + area;
var labelperimetro=document.getElementById("perimetro");
labelperimetro.innerText="perimetro:" + perimetro;
}