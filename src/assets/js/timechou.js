const publicMethod = { 
 
    getTimestamp(times) { //把时间日期转成时间戳
     return (new Date(times)).getTime() / 1000
    }
   
  }
  const yeardate={
    timestampToTime (cjsj) {
        var date = new Date(cjsj) //时间戳为10位需*1000，时间戳为13位的话不需乘1000
        var Y = date.getFullYear() + '/'
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) 
        return Y+M
    },
  }
  export {
    publicMethod,
    yeardate
  }



