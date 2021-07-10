// 声明一个变量a，同时指定它的类型为number
let a:number;

// a='hello' //此行代码会报错，因为变量a的类型时number，不能赋值字符串

// 如果变量的声明和赋值同时进行，TS可以自动对变量进行类型检测
let c = false;
c ="123";

// JS中的函数不考虑参数的类型和个数的
function sum(a:number,b:number):number {
  return a+b;
}