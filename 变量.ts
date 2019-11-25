//1.字符串类型
let mailbox:string = "zzz@163.com"
// console.log(mailbox)
//node 变量.js 输入出（zzz@163.com）

//模板字符串
let msg:string=`my email is ${mailbox}`
// console.log(msg)

//2、布尔
let isshow:boolean=false

//3、数字
let age:number=20

//4、数组
let list:number[]=[1,2,3,4]//只能是指定类型  如[1,2,3,'str']会报错
// console.log(list)

//5、元组
let arr:[string,number]=['str',10]//第一个指定字符串，第二指定数字

//6、枚举
enum Sex{man,woman}//定议枚举只能固定范围内的值
let person:Sex=Sex.man
console.log(`他的性别是${person}`)
console.log(`[]里写下标得到值：${Sex[0]}`)
console.log(`[]里写值得到下标：${Sex["man"]}`)

//7、Any  x指定任意类型
let x:any="aaa"
x=false
x=10
x={}
x=[]

//8、void 没有任何类型 函数返回值
function hello():void{ //没有return 的时候说明函数没有返回值，指定函数没有返回值的时候设定类型为 :void
    console.log('hi')
}

// function hello1():void{
//     return "hi"//return 会飘红报错
// }

function hello1():string{
    return "hi"
}

//9.undefined null
let x1:undefined
let x2:null

//联合类型 设定指定范围内的类型
let x3:number | string | boolean
x3="hi"
x3=12
x3=true

//类型推论 声明时不指定类型，用默认值，程序跟据默认值，自动推论类型

let x4 =4 //默认推论为数字
// x4="12" //报错
// x4 = 12//正常

//类型断言
// let x6:any='hello world';
let x5:number | string | boolean='hello world';//给x5 默认值‘hello world’, hello world不会指定到数字或boolean，自动指定到有length属性的类型 string
//let strLength:number=x5.length //没有默认值hello world时会报错

let strLength:number=(<string>x5).length //规范的写法
let strLength1:number=(x5 as string).length //规范的写法
