//接口：行为抽象

// 接口定义 
// 用interface 定义接口
interface Ipinter{
    //1。定义一个方法- Printing 
    //2。传一个string类型的参数- msg ,
    //3。-返回 一个string类型
    Printing(msg:string):string;
}

//实现定义接口 -“colorprinter”
// 1。colorprinter 类名 
// 2。通过 implements 实现类似继承 
// 3。从Ipinter里
class colorprinter implements Ipinter{
    Printing(msg:string):string{
        return "打印"+msg+"成功"
    }
}
let p1 = new colorprinter
let api = p1.Printing('简历') 
console.log(api)

//1。实现接口的时候，要实现里面的内容
