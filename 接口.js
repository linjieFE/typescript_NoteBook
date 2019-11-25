//接口：行为抽象
//实现接口
// 1。colorprinter 类名 
// 2。通过 implements 实现类似继承 
// 3。从Ipinter里
var colorprinter = /** @class */ (function () {
    function colorprinter() {
    }
    colorprinter.prototype.Printing = function (msg) {
        return "打印" + msg + "成功";
    };
    return colorprinter;
}());
var p1 = new colorprinter;
var api = p1.Printing('简历');
console.log(api);
//1。实现接口的时候，要实现里面的内容
