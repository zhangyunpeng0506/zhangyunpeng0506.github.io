export const code0 =
`var a=1
var a=2
console.log(a)  //2`

export const code1 =
`{
  var name='zyp'
  console.log(name) //zyp
}
console.log(name) //zyp

if(true){
  var str='a'
}
console.log(str)  //a

for(var i=0;i<5;i++){
  console.log(i)
}
//0 1 2 3 4
//因为立即执行了

for(var i=0;i<5;i++){
  setTimeout(()=>console.log(i),0)
}
//5 5 5 5 5`

export const code2 =
`{
  let a='lalalala'
  console.log('----',a) //lalalala
}
console.log(a); //报错

let b=1
{
  b=2
  setTimeout(()=>console.log(b),0)  //3
}
{
  b=3
  setTimeout(()=>console.log(b),0)  //3
}

const obj={
  name:'zyp',
  ary:[]
}
console.log(obj);
// obj={}  //报错
obj.name='abc';
obj.age=25;
obj.ary=['1']
console.log(obj);

const objstr='123';
console.log(objstr);
// objstr='234'; //报错

const ary = [1,2,3];
// ary=[]  //报错
ary.push(4);

let n = 1
function fn(){
  // console.log(n); //error(如果没有底下的n定义，这段代码输出的是1)
  let n = 10;
  if(true) {
    // console.log(n);  //error(如果没有底下的n定义，这段代码输出的是10)
    // 作用域链的查找规则
    let n = 100;
  }
  console.log('函数内块级作用域:'+n);
}
fn(); //函数内块级作用域:10`
