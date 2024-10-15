let str = "Hello, World";

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

console.log(str.padStart(18, "*"));
// console.log(str.);

console.log(str.padEnd(18, "*"));
console.log(str);

// let text = "I love JS and Node.JS";
// console.log(text.replace("JAVASCRIPT", "Python")); //I love JavaScript
// console.log(text.replace("JavaScript", "Python")); //I love Python

// console.log(text.replaceAll("JS", "C"));

let text = "a,b,c,d,e,null";
console.log(text.split(",")); //['a', 'b', 'c', 'd', 'e', 'f']
text2 = text.split(",");
console.log(text2[6]);

let xx = [1, 2, 3, null, "f"];

console.log(history.length);
console.clear();
console.log("Hello");

let num1 = 3.14;
let num2 = 34;
let num3 = 123e5;
let num4 = 123e-5;

console.log("num1= " + num1);
console.log("num2= " + num2);
console.log("num3= " + num3);
console.log("num4= " + num4);

let num = "dddd";
console.log(num.constructor === String);

let num5 = 100;
console.log(num5.EPSILON); //undefined
console.log(Number.EPSILON); //2.220446049250313e-16

let num6 = 345.12645;
console.log(typeof num6.toString()); //string

console.log(num6.toExponential(2)); //3.45e+2
console.log(num6.toExponential(4)); //3.4512e+2
console.log(num6.toExponential(6)); //3.451200e+2

let demo = "123.456";
console.log(num6.toFixed()); //四捨五入到小數第2位
console.log(typeof demo.valueOf());

let num7 = 123.456;
console.log(num7.toPrecision(5));

let inTemp1 = "Kitty";
let age = 16;
let template = `Hello 
World 
${inTemp1}, I'm ${age + 1} years old.`;
console.log(template);

let texts = "I love JavaScript and you love JavaScript, too.";
console.log(texts.indexOf("Java")); //7
console.log(texts.indexOf("JavaScript")); //7
console.log(texts.indexOf("JavaScript", 10)); //31(從索引10開始)
console.log(texts.indexOf(1)); //-1(沒找到回傳-1 Number)
console.log(texts.lastIndexOf("JavaScript")); //31
console.log(texts.lastIndexOf("JavaScript", 6)); //由右向左搜尋
console.log(texts.search("JavaScript")); //7
console.log(texts.search(/JavaScript4/)); //7

let dd = texts.match(/Java/g); //2
console.log(dd);
// console.log());

const arr = [123, "Tony"];
console.log(arr);
console.log(arr[0]); //123
console.log(typeof arr[0]); //Number
console.log(typeof arr[1]); //String
console.log(arr.toString()); //123,Tony
console.log(arr.length); //2
console.log(arr.length - 1); //1
console.log(arr[arr.length - 1]); //Tony
console.log((arr[0] = 5));

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324
console.log(Number.MAX_SAFE_INTEGER); //9007199254740991
console.log(Number.MIN_SAFE_INTEGER); //-9007199254740991
console.log(Number.POSITIVE_INFINITY); //Infinity
console.log(Number.NEGATIVE_INFINITY); //-Infinity
console.log(Number.NaN); //NaN
console.log(typeof Number.NaN); //number

let xxx = 100 / "Tony";
console.log(xxx);

