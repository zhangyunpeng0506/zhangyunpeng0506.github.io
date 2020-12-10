export const code0 =
`//数组解构
const arr = [1,2,3]
const [a,b,c] = arr

//对象解构
const obj = {
  x:1,
  y:2,
  z:3
}
const {x,y,z} = obj //注意：左边括号里要与右边的key值一样，顺序可以不一样`

export const code1 =
`const multiV = [[7,8],{m:142,n:12},0,'hello world']
const [[n1,n2],{m,n},num,str] = multiV
const [arr,obj,otherNum,otherStr]`
