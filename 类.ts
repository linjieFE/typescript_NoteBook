//1，类的定义
//2。类的继承
//3。访问修饰符
//4。静态属性和表态方法
//5。抽象类和多态

//js
// function person(name){
//     this.name=name
//     this.say=function(){
//         return `hello ${this.name}`
//     }
// }
// var p=new person('jenny')
// p.say()//=>hello jenny

//ts
class Person{
    name:string;
    age:number;
    constructor(name:string,age:number){//传过来的参数
        this.name=name;
        this.age=age;
    }
    print(){
        return `${this.name} 今年${this.age}`
    }
}
let p = new Person('jenny', 18)
console.log(p.print())//=>jenny 今年18

//2类的继承
class student extends Person{
    carNumber:number;
    school:string;
    constructor(carNumber:number,school:string){
        super('linjie',20)
        this.carNumber=carNumber
        this.school=school
    }
    print(){
        return `${this.name}今年${this.age},就读于${this.school},编号：${this.carNumber}`
    }
}
// var stu1=new student('linjie',18)
// console.log(stu1.dohomework())//=>linjiefe 就读于undefied...
var stu1=new student(1001,'清华大学')
// stu1.carNumber=1001
// stu1.school='清华大学'
console.log(stu1.print())//linjie今年18岁 就读于清华大学  编号1001

// 二、接口的继承
// interface Iprinter{
//     getMsg():string
// }

// interface colorPrinter extends Iprinter{
//     printing():string
// }

// class HpPrinter implements colorPrinter{
//     printing():string{
//        return '打印成功'
//         //console.log('打印成功')
//     }
//     getMsg():string{
//         return 'HP2000'
//     }
// }

// var hp=new HpPrinter()
// hp.getMsg()
// hp.printing()

//三、访问修饰符
// public(公开的 不定义默认) / private（私有的,外部不能访问）/ protected（受保护，外部不可用 子类可以继承）

class Person01{
    public name:string;
    private age:number;
    protected emal:string;
    constructor(name:string,age:number,emal:string){//传过来的参数
        this.name=name;
        this.age=age;
        this.emal=emal
    }
    print(){
        return `${this.name} 今年${this.age}`
    }
}
var p1= new Person01('joy',20,'111@qq.com')
console.log(p1.name)
//console.log(p1.age)//报错 私有不可访问
//console.log(p1.emal)//报错 私有不可访问

class student01 extends Person01{
    show(){
        //console.log(this.name, this.emal, this.age)//age报错，私有，外部|子类不可用
    }
}

// 4。静态属性和表态方法
// 静态属性和方法不能够被实例化，只能在原型链中访问
//------- js写法 ------------
// function Person03(){
//     this.name="joe"//这个方法为实例属性
//     this.print=function(){//这个方法为实例方法
//         // 。。。
//     }
// }

// Person03.age=19//静态属性
// //静态方法
// Person03.print1=function(){
//     //...
// }
// Person03.print1()//调用静态方法
// console.log(Person03.age)
// var p2 =new Person03()
//p2.print()//调用实例方法
//---------- ts写法 ----------------
class Person03{
    //实例属性
    name:string;
    static age:number;
    isEmail:string;
    constructor(name:string,age:number,isEmail:string){
        this.name=name;
        Person03.age=age;
        this.isEmail=isEmail;
    }

    //实例方法
    print(){
        return this.name+':'+Person03.age
    }

    //静态方法
    static show(){
        console.log("show 方法")
    }
}
Person03.show()//静态方法的调用方法
let p3 = new Person03('ziyao',19,'1@1.111')
p3.print()
//p3.show() //这钟报错不能访问

//============4，多态
// class Animal{
//     eat(){
//         console.log('animal eat')
//     }
// }

// class Cat extends Animal{
//     eat(){
//         console.log('猫吃鱼')
//     }
// }

// class Dog extends Animal{
//     eat(){
//         console.log('狗吃骨头')
//     }
// }

// let an1=new Cat()
// an1.eat() //=> 猫吃鱼
// let an2=new Dog()
// an1.eat() //=> 狗吃骨头
//-------------------------------------

//6。抽象类/抽象方法
//6.1 抽象类是提供其他类继承的基类（父类），不能直接被实例化
//6.2 抽象方法只能包含在抽象类中，抽象类可以包含抽象方法和非抽像方法
//6.3 子类继承抽象类，实现抽象方法

//定义抽像类
abstract class Animal{
    abstract eat()
    run(){
        console.log('run run run !!')
    }
}
class Cat extends Animal{
    eat(){
        console.log('猫吃鱼')
    }
}

class Dog extends Animal{
    eat(){
        console.log('狗吃骨头')
    }
}

let an1=new Cat()
an1.eat() //=> 猫吃鱼
let an2=new Dog()
an1.eat() //=> 狗吃骨头