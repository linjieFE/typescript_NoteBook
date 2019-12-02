//本节内容
//1。函数的定义
//2。参数（可选参数/默认参数/剩余参数）
//3。方法的重载

//js方法
// function add(x,y){
//     return x+y
// }

//2)匿名函数
// let add1=function(x,y){return x+y}

//-------ts 方法
function add(x:number,y:number):number{
    return x+y
}
//2) ts匿名函数
let add1=function(x:number,y:number):number{return x+y}

//3)参数为可选? 可传可不传 
  //(1)*age 不加问号调用时则必传age
  //(2)*void 没有return 返回
function show(name:string,age?:number):void{
    console.log(name,age)
}
// （3）带默认参数
function show1(name:string,age:number=20):void{
    console.log(name,age)
}

// （3）乖余参数

function show2(x:number,y:number,...z:number[]):number{
    var sum=0
    for(let i=0;i<z.length;i++){
      sum+=z[i]
    }
    return x+y+sum
}

show('jenny')//=》不传age也可不会报错
show1('jenny')//=>jenny，20 后面有默认值 不传默认输入默认值
show1('jenny',19)//=>jenny，19 有默认值 不传输入出默认值，传则以传为准
var sum = show2(1,2,3,4,5,6,7,8)
//例中 1对应x,2->y ,x=>[3,4,5,6,7,8]
console.log(sum)//=>36
//3.函数的重载
function getInfo(name:string):void
function getInfo(name:number):void
function getInfo(str:any):void{
    if(typeof str==='string'){
        console.log("我的英文名叫："+str)
    }
    if(typeof str==='number'){
        console.log("年龄"+str+'岁')
    }
}
getInfo("jenny")
getInfo(18)