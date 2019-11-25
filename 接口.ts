//接口：行为抽象
//********
//一、对class类的约束*******
// 接口定义 
// 用interface 定义接口
interface Ipinter{
    //1。定义一个方法- Printing 
    //2。传一个string类型的参数- msg ,
    //3。-返回 一个string类型
    Printing(msg:string):string;
}
//2） 定义另一个方法 打印信息
interface Imassage{
    getMsg():string;
}

//实例定义接口 -“colorprinter”
// 1。colorprinter 类名 
// 2。通过 implements 实例类似继承 
// 3。从Ipinter里
class colorprinter implements Ipinter,Imassage{
    Printing(msg:string):string{
        return "打印"+msg+"成功"
    }
    getMsg():string{
        return 'HP20000'
    }
}
let p1 = new colorprinter()
let api = p1.Printing('简历') 
console.log(api)
console.log(p1.getMsg())

//1。实现接口的时候，要实例里面的内容
//2.定义接口的时候，只定义声明即可，不包含具体内容

//二、对函数的约束
interface Imyfunction{
    (a:string,b:number):boolean;
}

let fun1:Imyfunction;//==let fun1=function(){...}

fun1=function(a:string,b:number):boolean{
    return true
}

//三、对数组的约束
interface Istutent{
    [index:number]:string;//数组的下标索引只能是字符串类型
}

let arr1:Istutent;
arr1=['aaa','bb']
console.log(arr1[0])//=>'aaa'

//四、json
interface Idata{
    name:string,
    readonly age:number,//可以标记只读 ，一般用于定义后不再修改的值，如一些常量const
    open?:boolean //可以标记，可选属性 这样下面不定议也不会报错
}
function showData(n:Idata){
    // n.age=18;加上readonly只读属性这里会报错，不可修改，
    console.log(JSON.stringify(n))
}
showData({name:'jenny', age:19, open:true})

