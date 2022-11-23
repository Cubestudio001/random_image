const http = require("http"); // 创建服务器

function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
} 

var server = http.createServer( (req, res) => {
    const urls=[
        "https://i.postimg.cc/cvwcdRyZ/5.jpg",
        "https://i.postimg.cc/jLGXV81Z/4.jpg",
        "https://i.postimg.cc/kRGcCL9h/3.jpg",
        "https://i.postimg.cc/Th3Qn5mq/2.jpg",
        "https://i.postimg.cc/V5ZggsWy/1.jpg"
    ]
    if(req.url=="/return:image"){
        // 由于同源策略，这里需要处理跨域问题
        res.setHeader("Access-Control-Allow-Origin", "*");
        // 编码格式
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        // res.setHeader("Content-Type", "text/html;charset=utf-8");
        
        var index = randomNum(0,urls.length);

        res.end(urls[index]);
    }
    else if(req.url=="/return:count"){
        res.end(urls.length.toString());
    }
    else{
        res.writeHead(301,{'Location':'https://cubestudio001.github.io'});
        res.end();
    }
})

// 监听
server.listen(8080, () => {
    console.log("请访问  127.0.0.1:8080");
});
