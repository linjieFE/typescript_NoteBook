//1.待办的类
var Todo = /** @class */ (function () {
    function Todo(content, status) {
        this.content = content;
        this.status = status;
    }
    return Todo;
}());
//2 初始化待办的信息
var todolist = [
    new Todo('第一条待办', false),
    new Todo('第二条待办', true)
];
//3。渲染待办列表
var todoListDom = document.querySelector("#todoList");
function renderList() {
    var listDom = '';
    if (todolist.length > 0) {
        todolist.forEach(function (item) {
            //Es6拼接
            listDom += "<li class=\"" + (item.status ? 'item-ok' : '') + "\">" + item.content + "</li>";
        });
    }
    else {
        listDom += '暂时还没有待办';
    }
    todoListDom.innerHTML = listDom; //=>把拼接的内容放到dom中
}
//4。添加待办
var inputContent = document.querySelector('#textContent'); //dom input 这里要给变量名提定是input，否则在inputContent.value时，会报错。
var addBtn = document.querySelector('#btnAdd'); //dom 按钮
function addTodo() {
    var content = inputContent.value.trim().toString(); //得到input框里的值
    if (!content) {
        alert("请输入待办");
        return false;
    }
    todolist.push(new Todo(content, false)); //调用todo类添加一条，新增内容状态未完成，所以为false
    inputContent.value = ''; //把input框中的内容清空
    renderList(); //重新渲染
}
//绑定点击事件添加待办
addBtn.addEventListener('click', function () {
    addTodo();
});
window.onload = function () {
    renderList();
};
