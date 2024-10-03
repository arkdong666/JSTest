function changeText() {
  document.getElementById("demo").innerHTML = "World";
  document.getElementById("pic").src =
    "https://www.w3schools.com/js/pic_bulbon.gif";
}
function boxHide() {
  document.getElementById("box").style.display = "none";
}
function boxShow() {
  document.getElementById("box").style.display = "block";
}

function boxTextChange() {
  document.getElementById("box").style.fontSize = "32px";
  console.log("Hello World");
}

function showHello() {
  console.log("Hello World");
  document.write("Hello World");
  window.alert("Hello Wodld"); //alert("Hello World");
  document.getElementById("box").innerHTML = "Hello World";
}

function showLet() {
  let x = 8;
  document.getElementsById("demo");
}

function unsignShift() {
  let x = -8;
  x >>>= 2;
  document.getElementById("demo").innerHTML = x;
}
function signShift() {
  let x = -8;
  x >>= 2;
  document.getElementById("demo").innerHTML = x;
}

function showOperator() {
  let a = 3,
    b = 5;
  let c = (a &= b);
  let d = (a |= b);
  let e = (a ^= b);
  let f = (a ^= b);
  document.getElementById("demo2").innerHTML = c;
  document.getElementById("demo3").innerHTML = d;
  document.getElementById("demo4").innerHTML = e;
  document.getElementById("demo5").innerHTML = f;
}
