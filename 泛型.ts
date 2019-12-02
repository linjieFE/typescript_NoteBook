//本节内容
//1。泛型函数
//2。泛型类
//3。泛型接口

//泛：（即：不明确，泛指，不指向具体）

//一、 泛型函数 start-----------------------------------//

//** before */
function printArr(arr:number[]):void{
    //for /for in(=>得到下标索引)/ for of（得到具体元素）
    for(var item of arr){
        console.log(item)
    }
}
printArr([1,2,3,4])//=>1,2,3,4
function printArr1(arr:string[]):void{
    //for /for in(=>得到下标索引)/ for of（得到具体元素）
    for(var item of arr){
        console.log(item)
    }
}
printArr1(['a','b','c','d'])//=>a,b,c,d

//** after */
function printArr2<T>(arr:T[]):void{//间括号+字母+间括号<T>代表使用泛型 T 也可以 替换为其它字母，T比较代表性=》type
    for(var item of arr){
        console.log(item)//得到具体元素
    }
}
printArr2<number>([0,1,2])
printArr2<string>(['0','1','2'])
//一、 泛型函数 end-----------------------------------//

//二、 泛型类 start-----------------------------------//
class myArrayList<T>{
    public name:T;
    public list:T[]=[]
    add(val:T):void{
        this.list.push(val)
    }
}
var arr=new myArrayList<number>()//=>指定是个number
arr.add(1)
arr.add(2)
console.log(arr.list)//=>[1,2]

//泛型接口
interface Iadd<T>{
    //(参数)：返回
    (x:T,y:T):T
}

var add:Iadd<number>

add =function(x:number,y:number){
    return x+y
}

console.log(add(1,5))//=>6