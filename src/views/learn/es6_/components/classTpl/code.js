export const code0 =
`//ES5写法
function User(name, psd) {
  this.name = name
  this.psd = psd
}
User.prototype.showName = function() {
  console.log(this.name)
}
User.prototype.showPsd = function() {
  console.log(this.psd)
}
let user = new User('zyp', '123456')
user.showName()
user.showPsd()

//继承
function VipUser(name, psd, level) {
  User.call(this, name, psd)
  this.level = level
}
VipUser.prototype = new User()
VipUser.constructor = VipUser //注意，一定要重新指定构造器指向
VipUser.prototype.ShowLev=function(){
  console.log(this.level)
}

let vipUser=new VipUser('zyp+fj','666',999)
vipUser.ShowName()
vipUser.ShowPsd()
vipUser.ShowLev()`

export const code1 =
`//ES6写法
class Person {
  constructor(name, psd) {
    this.name = name
    this.psd = psd
  }
  showName() {
    console.log(this.name)
  }
  showPsd() {
    console.log(this.psd)
  }
}
let person = new Person('admin', 'admin')
person.showName()
person.showPsd()

//继承
class VipPerson extends Person {
  constructor(name, psd, level) {
    super(name, psd)
    this.level = level
  }
  showLev() {
    console.log(this.level)
  }
}
let vipPerson = new VipPerson('superAdmin', '123456', '99')
vipPerson.showName()
vipPerson.showPsd()
vipPerson.showLev()`

export const code2 =
`class Example {
  c = 2 //实例属性：定义在实例对象（this）上的属性
  constructor(){
    console.log(this.c)
    this.sum3 = (h,i) => {
      console.log(h+i)
    }
  }

  //静态方法
  static sum(a, b) {
    console.log(a+b)
  }

  //原型方法
  sum2(d, e) {
    console.log(d+e)
  }
}
//目前静态属性可行写法
Example.a = 2
//公共属性
Example.prototype.b = 2`
