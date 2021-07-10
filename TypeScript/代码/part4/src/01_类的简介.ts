// 使用 class 关键字来定义类
/*
  属性
  方法
*/
class Person {

  // readonly 开始的属性表示一个只读的属性
  // 定义实例属性
  name: string = '张三';
  readonly age: number = 18;

  // 在属性前使用 static 关键字可以定义静态属性
  // 再加上 readonly 表示只读的静态属性
  static readonly phone: number = 13754899632;

  // 定义方法
  // 如果以 static 开头则可以定义类方法
  sayHello(){
    console.log("Hello world");
  }
  


}

const per = new Person();