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
});
function changeNum() {
  if (alertt.innerHTML > 0) {
    alertt.innerHTML = alertt.innerHTML - 1;
  } else {
    alertt.innerHTML = 0;
  }
}
markDiv.addEventListener("click", () => {
  markDiv.style.backgroundColor = "white";
  mark.style.display = "none";
  changeNum();
});
angelaDiv.addEventListener("click", () => {
  angelaDiv.style.backgroundColor = "white";
  angela.style.display = "none";
  changeNum();
});
jacobDiv.addEventListener("click", () => {
  jacobDiv.style.backgroundColor = "white";
  jacob.style.display = "none";
  changeNum();
});
