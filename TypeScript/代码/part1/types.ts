// 也可以直接使用字面量进行类型声明
let a: 10;
// a = 11; //会报错，相当于定义了常量10给a

// 可以使用 | 来连接多个类型（联合类型）
let b: "male" | "female";
b = "male";
b = "female"

let c: boolean | string;
c = true;
c = "hello";

// any 表示的是任意类型，一个变量设置类型为 any 后相当于对该变量改变了关闭了TS的类型检测
// 使用TS时，不建议使用any类型
// let d: any;

//声明变量如果不指定类型，则TS解析器会自动判断变量类型为 any（隐式的any）
let d;
d = 10;
d = "hello";
d = true

// unknow 表示未知类型的值
let e: unknown;
e = 10;
e = "hello";
e = true;

let s: string;
// d的类型是any，它可以赋值给任意变量
s = d;

// e 的类型是unknow，它不可以赋值给其他变量
e = "hello world";
s = e;
if(typeof e === "string"){
  s = e;
}

// 类型断言，可以告诉解析器变量的实际类型
/*
  语法：
    变量 as 类型
    <类型> 变量
*/
s = e as string;
s = <string> e;

// void 用来表示空，以函数为例，就表示没有返回值的函数
function fn1() : void {
  return;  // 默认
}

// never 表示永远不会返回结果
function fn2() : never {
  throw new Error("报错了！");
}

// object 表示一个js对象
let obj: object;
obj = {};
obj = function() {};

// {}用来指定对象中可以包含哪些属性
// 语法：{属性名: 属性值,属性名: 属性值}
// 在属性名后边加上 ? 表示属性是可选的
let obj2: {name: string, age?:number};
obj2 = {name: "张三",age: 40};

// [propName:string]:any 表示任意类型的属性
let obj3: {name: string, [propName: string]: any};
obj3 = {name: "李四",age: 23,phone: "123456789"};

/*
    设置函数结构的类型声明
      语法：(形参:类型，形参:类型 ...) => 返回值
*/
let obj4: (a: number, b: number) => number;
obj4 = function(n1,n2):number {
  return 10;
}


// string[] 表示字符串数组
let arr1: string[];
arr1 =["1","2"];

// number[] 表示数值数组
let arr2: number[];

let arr3: Array<number>;
arr3 =[1,3,5];

/*
  元组，元组就是固定长度的数组
    语法： [类型，类型。类型]
*/
let arr4: [string,string];
arr4 = ["hello","world","12"];

/*
  enum 枚举
*/
enum Gender{
  Male = 0,
  Female = 1
}
let i: {name: string,gender: Gender};
i = {
  name: '孙悟空',
  gender: Gender.Male
}

// & 表示同时
let j: {name: string} & {age: number};
j ={name: "王五", age: 18};

// 类型的别名
type myType = 1 | 2 | 3 | 4;
let k: myType;
let l: myType;
k = 6;