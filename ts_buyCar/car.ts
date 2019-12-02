//1。假数据
const cartGoodsList=[
    {
        id:'1',
        name:'iphone 7',
        desc:'aaaaa',
        price:2900,
        count:1,
        isChecked:true
    },
    {
        id:'2',
        name:'vivo',
        desc:'bbbbb',
        price:1180,
        count:2,
        isChecked:false
    },
    {
        id:'3',
        name:'oppo',
        desc:'cccccc',
        price:2100,
        count:1,
        isChecked:true
    }
]
//2。设计购物车类
class Cart{
    cartGoodsList=cartGoodsList//购物车的列表
    cartdom:HTMLElement=document.querySelector("#box");//页面中的列表dom
    sumdom:HTMLElement=document.querySelector("#sumPrice");//总价dom
    //1）渲染购物车
    renderCart(){
        let cartDom='';
        this.cartGoodsList.forEach(item=>{
            cartDom+=`<ul>
                <li><input type="checkbox" ${item.isChecked? "checked" : ""} id="${item.id}"></li>
                <li>${item.name}</li>
                <li>${item.desc}</li>
                <li>${item.price}</li>
                <li>${item.count}</li>
            </ul>`
        })
        this.cartdom.innerHTML=cartDom
    }
    //2）渲染计算总价
    renderTotalPrice(){
        let total=0;
        this.cartGoodsList.forEach((item)=>{
            if(!item.isChecked) return//如果没有被选中 return掉
            total+=item.price * item.count
        })
        this.sumdom.innerHTML=`RMB ${total}`
    }
    //3）勾选/取消勾选 总价变化
    checkGoods(id:any){
        this.cartGoodsList.forEach((item,index)=>{
            if(item.id===id){
                // this.cartGoodsList[index].isChecked=!item.isChecked
                item.isChecked=!item.isChecked//如果选中的商品Id等于列表中某商品ID 值取反
            }
        })
        this.renderTotalPrice()
    }
    //4）给复选框加一个点击事件
    checkBoxEvent(){
        document.querySelectorAll("input").forEach(item=>{
            item.addEventListener('click',()=>{
                this.checkGoods(item.id)
            })
        })
    }
    //5.入口 初始化
    init(){
        this.renderCart();//渲染购物车
        this.renderTotalPrice();//渲染总价格
        this.checkBoxEvent();//绑定复选框加一个点击事件
    }  
}
let car=new Cart()
car.init();


