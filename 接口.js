//实例定义接口 -“colorprinter”
// 1。colorprinter 类名 
// 2。通过 implements 实例类似继承 
// 3。从Ipinter里
var colorprinter = /** @class */ (function () {
    function colorprinter() {
    }
    colorprinter.prototype.Printing = function (msg) {
        return "打印" + msg + "成功";
    };
    colorprinter.prototype.getMsg = function () {
        return 'HP20000';
    };
    return colorprinter;
}());
var p1 = new colorprinter();
var api = p1.Printing('简历');
console.log(api);
console.log(p1.getMsg());
var fun1; //==let fun1=function(){...}
fun1 = function (a, b) {
    return true;
};
var arr1;
arr1 = ['aaa', 'bb'];
console.log(arr1[0]); //=>'aaa'
function showData(n) {
    // n.age=18;加上readonly只读属性这里会报错，不可修改，
    console.log(JSON.stringify(n));
}
showData({ name: 'jenny', age: 19, open: true });
