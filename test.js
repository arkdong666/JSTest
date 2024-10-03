// strict mode
function showDataType() {
  let a = 5;
  let b = -8.99;
  let c = "Tommy";
  let d = true;
  let e = { firstName: "Li", lastName: "Dom" };
  let f = ["apple", "banana", "cherry", "durians", 123];
  const g = new Date("2024-10-01");
  let h = z100000000000000n;

  document.getElementById("demo").innerHTML =
    "a= " + a + ", typeof= " + typeof a;

  document.getElementById("demo1").innerHTML =
    "b= " + b + ", typeof= " + typeof b;

  document.getElementById("demo2").innerHTML =
    "c= " + c + ", typeof= " + typeof c;

  document.getElementById("demo3").innerHTML =
    "d= " + d + ", typeof= " + typeof d;

  document.getElementById("demo4").innerHTML =
    "e= " + e.lastName + " " + e.firstName + ", typeof= " + typeof e;

  document.getElementById("demo5").innerHTML =
    "f= " + f + ", typeof= " + typeof f;

  document.getElementById("demo6").innerHTML =
    "g= " + g + ", typeof= " + typeof g;

  document.getElementById("demo7").innerHTML =
    "h= " + h + ", typeof= " + typeof h;
}

function add(num1, num2) {
  return num1 + num2;
}

let theBigInt = 1000000000n;
console.log(typeof theBigInt);
console.log(typeof null); //The bug.
console.log(typeof undefined); //undefined
console.log(typeof ["Hi"]); //object
console.log(typeof add); //function
console.log(typeof add(1, 2)); //number

let sym1 = Symbol("test"); //唯一識別符，與 sym2 不相同
let sym2 = Symbol("test"); //唯一識別符，與 sym2 不相同
console.log(sym1);
console.log(sym2);
console.log(sym1 === sym2); //false
console.log(sym1 == sym2); //false

const color = {
  r: "Red",
  g: "Green",
  b: "Blue",
  "Hello-World": "Hello-Kitty",
  "1Value": "Google Shop1",
};

console.log(color.r); //靜態、有效識別符
console.log(color.g); //靜態、有效識別符
console.log(color.b); //靜態、有效識別符
console.log(color["Hello-World"]); //動態、特殊符號
console.log(color["1Value"]); //動態、數字開頭(特殊符號)

//變數寫法 使用者查詢
let userFind = "1Value";
console.log(color[userFind]);

let color2 = { r: "Red", g: "Green", b: "Blue" };
// color2 = {};
// color2.s = color2.r;
// delete color2.r;

color2 = { red: "123" };
console.log(color2);

let StudentInfo = {
  name: "tony",
  age: 18,
  show: function () {
    return "Student: " + this.name + ", age: " + this.age;
  },
};

const show = () => "Student: " + this.name + ", age: " + this.age;

// 存取相同記憶體位址
// StudentInfo["Tom"] = 20;
// StudentInfo.Tom = 100;

console.log(StudentInfo.name + ", " + StudentInfo.age);
console.log(StudentInfo["name"] + ", " + StudentInfo["age"]);

console.log("#######################################################");
StudentInfo["name"] = "Tom";
StudentInfo["age"] = 20;

StudentInfo.name = "Tom";
StudentInfo.age = 20;

console.log(StudentInfo);

// console.log(StudentInfo.show("Ruby",123));

let a = 11;
let b = 110;
let c = 110;

if (a === b) {
  console.log("a=b");
  if (a == 11) {
    // 嵌套
    console.log("a= " + a);
  }
} else if (a === c) {
  console.log("a=c");
} else {
  console.log("No match");
}

// let myNum = "3";
// switch (myNum) {
//   case 1:
//     console.log("one");
//     break;
//   case 2:
//     console.log("two");
//     break;
//   case 3:
//     console.log("three");
//     break;
//   default:
//     console.log("Not found");
//     break;
// }

let userInput = "fds  fs";

// let [x,y,z]=["10", "10",  "10"];
let [xx, y, z] = [10, 10, 10];
if (!userInput || userInput.trim() === "") {
  console.log("Input is not a null valud");
} else {
  console.log("Pass");
}

let respomseStatus = 200;
if (respomseStatus === 200) {
  console.log("請求成功");
} else if (respomseStatus === 404) {
  console.log("資源未找到");
} else {
  console.log("未知的錯誤");
}

async function fetchData() {
  try {
    let response = await fetch("https://www.google.com");
    if (response.ok) {
      let data = await response.json();
      console.log(data);
    } else {
      console.log("伺服器回傳錯誤", response.status);
    }
  } catch (error) {
    console.log("請求失敗", error);
  }
}

fetchData();
