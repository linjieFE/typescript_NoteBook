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

// 接口的继承
interface Iprinter{
    getMsg():string;
}

interface colorPrinter extends Iprinter{
    printer():string;
}

interface HpPrinter implements colorPrinter{
    printer():string{
       return '打印成功'
        //console.log('打印成功')
    }
    getMsg():string{
        return 'HP2000'
    }
}
