/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  //declarando las variables de los arrays
  let who = ["The dog", "My grandma", "The mailman", "My bird"];
  let action = ["ate", "peed", "crushed", "broke"];
  let what = ["my homework", "my phone", "the car"];
  let when = [
    "before the class",
    "when I was sleeping",
    "while I was exercising",
    "during my lunch",
    "while I was praying"
  ];
  //declarando la funcion para generar aleatoriamente los arrays
  function randomGenerator(array) {
    let result = Math.floor(Math.random() * array.length);
    return array[result];
  }
  console.log("Hello Rigo from the console!");
  //declarando una variable para llamar a la funcion
  let randomExcuse =
    randomGenerator(who) +
    " " +
    randomGenerator(action) +
    " " +
    randomGenerator(what) +
    " " +
    randomGenerator(when);
  //Actualizando el contenido html de id=excuse por el contenido de la variable randomExcuse
  document.getElementById("excuse").innerHTML = randomExcuse;
};
