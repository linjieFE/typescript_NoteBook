//1。假数据
var cartGoodsList = [
    {
        id: '1',
        name: 'iphone 7',
        desc: 'aaaaa',
        price: 2900,
        count: 1,
        isChecked: true
    },
    {
        id: '2',
        name: 'vivo',
        desc: 'bbbbb',
        price: 1180,
        count: 2,
        isChecked: false
    },
    {
        id: '3',
        name: 'oppo',
        desc: 'cccccc',
        price: 2100,
        count: 1,
        isChecked: true
    }
];
//2。设计购物车类
var Cart = /** @class */ (function () {
    function Cart() {
        this.cartGoodsList = cartGoodsList; //购物车的列表
        this.cartdom = document.querySelector("#box"); //页面中的列表dom
        this.sumdom = document.querySelector("#sumPrice"); //总价dom
    }
    //1）渲染购物车
    Cart.prototype.renderCart = function () {
        var cartDom = '';
        this.cartGoodsList.forEach(function (item) {
            cartDom += "<ul>\n                <li><input type=\"checkbox\" " + (item.isChecked ? "checked" : "") + " id=\"" + item.id + "\"></li>\n                <li>" + item.name + "</li>\n                <li>" + item.desc + "</li>\n                <li>" + item.price + "</li>\n                <li>" + item.count + "</li>\n            </ul>";
        });
        this.cartdom.innerHTML = cartDom;
    };
    //2）渲染计算总价
    Cart.prototype.renderTotalPrice = function () {
        var total = 0;
        this.cartGoodsList.forEach(function (item) {
            if (!item.isChecked)
                return; //如果没有被选中 return掉
            total += item.price * item.count;
        });
        this.sumdom.innerHTML = "RMB " + total;
    };
    //3）勾选/取消勾选 总价变化
    Cart.prototype.checkGoods = function (id) {
        this.cartGoodsList.forEach(function (item, index) {
            if (item.id === id) {
                // this.cartGoodsList[index].isChecked=!item.isChecked
                item.isChecked = !item.isChecked; //如果选中的商品Id等于列表中某商品ID 值取反
            }
        });
        this.renderTotalPrice();
    };
    //4）给复选框加一个点击事件
    Cart.prototype.checkBoxEvent = function () {
        var _this = this;
        document.querySelectorAll("input").forEach(function (item) {
            item.addEventListener('click', function () {
                _this.checkGoods(item.id);
            });
        });
    };
    //5.入口 初始化
    Cart.prototype.init = function () {
        this.renderCart(); //渲染购物车
        this.renderTotalPrice(); //渲染总价格
        this.checkBoxEvent(); //绑定复选框加一个点击事件
    };
    return Cart;
}());
var car = new Cart();
car.init();
