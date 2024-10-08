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

// async function fetchData() {
//   try {
//     let response = await fetch("https://www.google.com");
//     if (response.ok) {
//       let data = await response.json();
//       console.log(data);
//     } else {
//       console.log("伺服器回傳錯誤", response.status);
//     }
//   } catch (error) {
//     console.log("請求失敗", error);
//   }
// }

//fetchData();

let result = "";
for (let i = 0; i < 5; i++) {
  result += i + " ";
}
console.log(result.trim());

obj = { man: "tony", women: "Mary" };

console.log(obj["man"]);

//String Methods
let str = "Hello, World";
console.log("str= " + str.length); //有幾個字元。空白也算
console.log(str.length - 1); //最後一個字元的索引
console.log(str.charAt(0)); //索引值的內容
console.log(str.charAt(str.length - 1)); //索引值取最後一個數
console.log(str.charCodeAt(0)); //取字元的ASCII
console.log(str.slice(0, 5)); // 索引 0~5 但不包含5
console.log(str.slice(-1)); // 顯示最後一個值
console.log(str.slice(-12, -7)); // 最後一個數值為 -1
console.log(str.slice(-5)); // 顯示 World
console.log(str.at(-2)); //支援負數
console.log(str.charAt(-2)); //不支援負數（與 at()不同的地方）
console.log(str.substring(-1, -5)); // 用法與slice相似，但substring不支援負數（換轉正）

let mystr = "Hello, World";
mystr[2] = "t";
console.log(mystr[2]);

console.log(mystr.toUpperCase()); //轉大寫
console.log(mystr.toLowerCase()); //轉小寫

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];
let xyz = arr1 + arr2 + arr3;
let xxx = arr1.concat(arr2, arr3);
console.log(typeof xyz); // string
console.log(arr1.concat(arr2, arr3)); //object
console.log(xxx.push(10));
console.log(xxx);

let str1 = "Hello";
let str2 = "lastName";
let str3 = " MidName ";

// console.log(str1.push(3));
console.log(str3);

console.log(str3.trimStart());
// console.log(str3.padStart());
console.log(str1.charAt(3));
console.log(str1.charCodeAt(3));
console.log(str3.repeat(5)); //重複5次
console.log(str3.padStart(10, "*")); //補足元素值，若小於length，則無法顯示

// let ax = str1.concat(str2,str3);
let ax = str1 + str2 + str3;
console.log(ax);

// console.log(str3.eplace());

// console.log(str3.padEnd(18,"-"))

console.log(str1.split(","));

let obj1 = { name: "Lily", age: 14 };
let addobj1 = { ...obj, eye: "blue" };
console.log(addobj1.eye);

console.log(str1.replace());

let ww = "0";
let www = 10;

console.log(ww / www);
console.log(ww == www);
console.log(ww === www);
//  console.log(typeof );

let xxxx = "Hello,Kitty,Hello KiKi";
console.log(xxxx.replaceAll("Ki", "JOJO"));
let xxxxx = undefined;
console.log(typeof xxxxx);
console.log(xxxx.split(","));

console.log(typeof ww / www);

let by2 = "John";
let by = new String("John");
console.log(by === by2);

console.log("fdf");

let bby = new String("John"); // y is an object
let bbx = "John"; // x is a string
console.log(bbx == bby);

let theString = "Hello Woo, Hello all, Hello";
console.log('fdsf '+theString.indexOf("Hello",2)); //第一個出現Hello的索引值
console.log(theString.lastIndexOf("Hello")); //最後一個出現 Hello 的索引值
console.log(theString.search("all"));

const app =  {
  name: "Anger Bird",
  type: "game",
  version: 1.0,
}

console.log(app);

// const rr = document.getElementById("de").innerText; 
// const rr = document.getElementById("de").innerHTML
const rr  = document.getElementById("de").textContent;
console.log("rr= "+rr);



