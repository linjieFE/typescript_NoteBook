//1，类的定义
//2。类的继承
//3。访问修饰符
//4。静态属性和表态方法
//5。抽象类和多态
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.print = function () {
        return this.name + " \u4ECA\u5E74" + this.age;
    };
    return Person;
}());
var p = new Person('jenny', 18);
console.log(p.print()); //=>jenny 今年18
//2类的继承
var student = /** @class */ (function (_super) {
    __extends(student, _super);
    function student(carNumber, school) {
        var _this = _super.call(this, 'linjie', 20) || this;
        _this.carNumber = carNumber;
        _this.school = school;
        return _this;
    }
    student.prototype.print = function () {
        return this.name + "\u4ECA\u5E74" + this.age + ",\u5C31\u8BFB\u4E8E" + this.school + ",\u7F16\u53F7\uFF1A" + this.carNumber;
    };
    return student;
}(Person));
// var stu1=new student('linjie',18)
// console.log(stu1.dohomework())//=>linjiefe 就读于undefied...
var stu1 = new student(1001, '清华大学');
// stu1.carNumber=1001
// stu1.school='清华大学'
console.log(stu1.print()); //linjie今年18岁 就读于清华大学  编号1001
