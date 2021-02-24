<template>
  <div/>
</template>

<script>
export default {
  data() {
    return {
      list: [
        // 三次握手
        '目的：连接服务器指定端口，建立TCP连接，并同步连接双方的序列号和确认号并交换TCP窗口大小信息。客户端执行connect()时，将触发三次握手',
        'SYN=1 seq=x',
        'SYN=1 ack=x+1 seq=y',
        'SYN=1 ack=y+1 seq=x+1',
        /* 四次挥手 释放连接时，被动方服务器，突然接收到主动方客户端释放连接的请求时并不能立即释放连接，因为还有必要的数据需要处理，所以服务器
           先返回ACK确认收到报文，经过clo se-wait阶段准备好释放连接之后，才能返回FIN释放连接报文
        */
        'FIN=1 seq=u', // 客户端进入半关闭状态，停止接收服务器的数据
        'FIN=1 ack=u+1 seq=v', // 服务器端进入半关闭状态
        'FIN=1 ack=u+1 seq=w',
        'FIN=1 ack=w+1 seq=h'
        // 客户端等待2MSL
      ]
    }
  }
}
</script>

<style>

</style>
