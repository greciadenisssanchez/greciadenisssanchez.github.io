// JavaScript Document
function calcular(){
var lado1= document.getElementById("lado1");
var lado2= document.getElementById("lado2");
var lado3= document.getElementById("lado3");
lado1=parseFloat(lado1.value);
lado2=parseFloat(lado2.value);
lado3=parseFloat(lado3.value);
var perimetro=lado1+lado2+lado3;
var s=perimetro/2;
var area=Math.sqrt(s*(s-lado1)*(s-lado2)*(s-lado3));
var labelarea=document.getElementById("area");
labelarea.innerText= "Area:" + area;
var labelperimetro=document.getElementById("perimetro");
labelperimetro.innerText="perimetro:" + perimetro;
}