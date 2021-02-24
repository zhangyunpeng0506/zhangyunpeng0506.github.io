# 盒子模型
  标准盒子模型，IE盒子模型;
  box-sizing: border-box, content-box;
  width/height的值指的是什么;
# 清除浮动
  浮动元素后（可以不是紧跟着浮动元素）添加额外标签，设置clear:both;
  设置父元素使其形成一个BFC（body，float设置none以外的值，overflow设置除visible以外的值，position:fixed/absolute，display:inline-block/flex/inline-flex/table-cell/table-caption）;
  父元素设置伪元素 ::after:{ content:'';display:table;clear:both };
# margin越界
  父元素 border;
  父元素 padding;
  前置额外标签;
  设置父元素使其形成一个BFC（body，float设置none以外的值，overflow设置visible以外的值，position:fixed/absolute，display:inline-block/flex/inline-flex/table-cell/table-caption）;
  前置伪元素 ::before:{ content:''; display:table };
# BFC
  特点：
  1.BFC内子元素垂直方向上自上而下依次排列
  2.不会出现margin越界，浮动导致父元素塌陷
  3.子元素之间margin相互叠加，谁大取谁，一正一负取和
  4.容器内子元素不会影响到外面的元素
  创建：
  1.body
  2.float设置none以外的值
  3.overflow设置visible以外的值
  4.position:absolute/fixed
  5.display:inline-block/flex/inline-flex/table-cell/table-caption
# JavaScript全局函数
  encodeURI/encodeURIComponent/decodeURI/decodeURIComponent/escape(对字符串进行编码)/unescape
  eval
  Number/String
  isNaN/isFinite/parseInt/parseFloat
  getClass
# this指向
  普通函数的this指向直接调用它的对象，回调函数的this指向全局函数
  箭头函数没有自己的this，它的this是向外层作用域一层一层查找this
# apply/call/bind
  改变this指向
  第一个参数都是this要指向的对象，如果是null则指向全局
  apply/call直接执行了，bind返回的是一个函数
  apply第二个参数是一个数组，call/bind是将参数依次传入，bind也可以在执行时再传入
# nth-child/nth-type-of
  nth-child(odd/even/数字) 当前元素父元素的子元素样式
  nth-type-of(odd/even/数字) 和当前元素相同的兄弟元素样式
# xxs/csrf
  xxs: 通过恶意注入代码来达到窃取用户信息的目的
  csrf: 跨站请求攻击
# 性能优化
  js放在底部，css放在头部
  减少http请求
  使用字体图标/css样式代替图片图标
  减少重绘重排
  使用事件委托
  降低css选择器的复杂度
  压缩代码
  降低图片质量
  根据屏幕大小加载合适的图片
# requestAnimationFrame
# 数据类型判断
  <!-- 基本数据类型：Number/String/Null/Undefined/Boolean/Symbol 存放在栈中，数据大小确定，内存空间大小可分配-->
  <!-- 引用数据类型：Object 存放在堆中，每个空间大小不一样，要根据情况进行特定的配置。在栈内存中保存的实际上是对象在堆内存中的引用地址-->
  typeof  可以判断除null以外的基本数据类型，引用数据类型除了function和object外都不能正确检测
  constructor 除了null/undefined 可以判断所有类型
  instanceof  null/undefined报错，不能判断基本类型字面量，可以判断引用类型，可以判断new出来的基本类型
  Object.prototype.toString.call  可以判断所有类型
# 请求头响应头