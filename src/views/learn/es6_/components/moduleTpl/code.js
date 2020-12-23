export const code0 =
`export { main } from './main'
//等同于
import { main } from './main' //导入main中的main变量
export { main }

export { default as otherMain } from './otherMain'
//等同于
import main from './otherMain'  //otherMain向外暴露成员时使用export default，因此导入时可以使用任意值接收
export { main }`
