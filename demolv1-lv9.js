//lv1 三元运算符
var a= 10;
var b= 8;
var result = a > b ? 'b = a' : 'b = a - 2';
console.log (result);
//lv2循环语句实现输出1-100中3的倍数
let sum = 3;
    for(let i = 1; i <= 33; i++){
        let sum = 3;
        sum = sum * i;
        console.log(sum);
    }
//lv3 一个接收两个参数，交换两个参数的值并返回的函数
let exchang = function(c,d){
    let none = c;
    c = d;
    d = none;
    console.log(c,d);
}
exchang(1,9)
//lv4 一个返回两个参数平方和的函数
function sumOfSquares(x,y) {
    x*=x;
    y*=y;
    return x + y;
}
let res = sumOfSquares(1,2);
console.log(res);
//lv5 补充代码，实现控制台输出的时候打印一下效果
const num = [ ['a', 0], ['b', 3], ['c', 6], ['d', 9] ];
        list = [ ['b', 3], ['c', 6], ['d', 9] ];
        list[0]= ["b",3];
        list[1]= ["c",6];
        list[2]= ["d",9];
console.log(list);
//lv6 选择器
//lv7 一个函数---接收带有重复项的数组，返回去重后的数组
let arr = [1, 1, 1, 2, 2, 3, 4, 4, 5, 5, 5];
const uniq = arr => [...new Set(arr)];
console.log(uniq(arr));
//lv8 一个函数filterRange(arr, a, b)获得一个数组arr，查找a和b之间的元素并返回它们的数组
//lv9 对象数组
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id:3 };
let users = [ john, pete, mary ];
let usersMapped = Object.assign( {}, users);
console.log(users, usersMapped);



