 // 默认  fetch("url") 的话， 发起的是 Get 请求
 fetch(URL="https://my.58.com/persondata",mode="no cors")
 .then(response => {
     //这个 response  就是 服务器返回的可读数据流， 内部存储的是二进制数据
     // .json() 的作用，就是 读取 response 这个二进制数据流，并把 读取到的数
     //  据,转为 JSON 格式的Promise 对象
     return response.text
  })
  .then(data => {
           //这离  第二个 .then 中拿到的 data, 就是最终的数据
     console.log(data)
  })
