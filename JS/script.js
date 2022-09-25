let all = document.querySelectorAll("main div");
let dots = document.querySelectorAll(".dot");
let mark = document.getElementById("mark");
let markDiv = document.getElementById("mark-div");
let angelaDiv = document.getElementById("angela-div");
let jacobDiv = document.getElementById("jacob-div");
let angela = document.getElementById("angela");
let jacob = document.getElementById("jacob");
let clear = document.querySelector(".toggle");
let count = document.querySelector(".num");
let  unread = document.querySelectorAll(".boxes");
clear.addEventListener("click", () => {
  count.innerHTML = "0";
  for (a of all) {
    a.style.backgroundColor = "white";
    //  a.querySelector(".dot").style.display = "none"
  }
})
function counter() {
  /* if (count.innerHTML > 0) {
    count.innerHTML = count.innerHTML - 1;
  } else {
    count.innerHTML = 0;
  }  */
 const c = unread.length - document.querySelectorAll(".read").length
  console.log(c)
  //console.log(boxess.length)
  //console.log(document.querySelectorAll(".read").length)
  var number = count.textContent
  var answer = number - c 
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
  counter()
});
