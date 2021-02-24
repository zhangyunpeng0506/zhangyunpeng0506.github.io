export const code0 =
`<div class="parent">
  <div class="child">
    额外标签法
  </div>
  <div style="clear:both"/>
</div>`

export const code1 =
`<div class="parent" style="overflow:hidden">
  <div class="child">
    BFC
  </div>
</div>`

export const code2 =
`<div class="parent1">
  <div class="child1">
    伪元素
  </div>
</div>

.parent1::after{
  content: '';
  display: table;
  clear: both;
}

.parent1{
  *zoom: 1  /*ie6清除浮动的方式，*只用ie6-ie7执行，其他浏览器不执行*/
}`
