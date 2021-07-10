class Dog {
  name:string;
  age:number;

  constructor(name:string,age:number){
    // 在实例方法中，this就表示当前的实例
    this.name = name;
    this.age = age;
  }

  say(){
    // 在方法中可以通过 this 来表示当前调用方法的对象
    console.log(`${this.name}say hello`);
  }
}

const dog1 = new Dog("小花",6);
const dog2 = new Dog("小黑",3);
