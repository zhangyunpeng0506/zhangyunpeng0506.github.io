export const code0 =
`const obj={
  test(){
    setTimeout(() => {  //作为回调函数this指向一层一层往外找
      console.log(this);  //test
    }, 1000);
    setTimeout(function() { //作为回调函数，所以this指向window
      console.log(this);  //window
    }, 1000);
  }
}`

export const code1 =
`let fn = function(){
  console.log(arguments); //用箭头函数会报错，箭头函数没有arguments类数组
}
let fn2=(...args)=>{
  console.log(args);
}
fn(1,2,3) //[1,2,3]
fn2(1,2,3)  //[1,2,3]`

export const code2 =
`function Fn(){}
let obj = new Object()  //1.创建一个空对象
obj.__proto__ = Fn.prototype  //2.链接到原型   
Fn.call(obj)  //3.绑定this指向，执行构造函数
fn = obj //4.确保返回的是对象`
