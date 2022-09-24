let all = document.querySelectorAll("main div");
let dots = document.querySelectorAll(".dot");
let mark = document.getElementById("mark");
let markDiv = document.getElementById("mark-div");
let angelaDiv = document.getElementById("angela-div");
let jacobDiv = document.getElementById("jacob-div");
let angela = document.getElementById("angela");
let jacob = document.getElementById("jacob");
let clear = document.querySelector(".toggle");
let alertt = document.querySelector(".num");
let boxess = document.querySelectorAll(".boxes");
clear.addEventListener("click", () => {
  alertt.innerHTML = "0";
  for (a of all) {
    a.style.backgroundColor = "white";
    //  a.querySelector(".dot").style.display = "none"
  }
})
function counter() {
   if (alertt.innerHTML > 0) {
    alertt.innerHTML = alertt.innerHTML - 1;
  } else {
    alertt.innerHTML = 0;
  } 
  /*const c = boxess.length - document.querySelectorAll(".read").length
  console.log(c)
  //console.log(boxess.length)
  //console.log(document.querySelectorAll(".read").length)
  alertt.textContent = c */
}
markDiv.addEventListener("click", () => {
  markDiv.style.backgroundColor = "white";
  mark.style.display = "none";
  counter();
});
angelaDiv.addEventListener("click", () => {
  angelaDiv.style.backgroundColor = "white";
  angela.style.display = "none";
  counter();
});
jacobDiv.addEventListener("click", () => {
  jacobDiv.style.backgroundColor = "white";
  jacob.style.display = "none";
  counter();
});
