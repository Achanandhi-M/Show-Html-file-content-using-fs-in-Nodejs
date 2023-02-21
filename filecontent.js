var fs=require('fs')
var http=require('http')
console.log('server is running')
http.createServer(function(req,res){
    fs.readFile('demo.html',function(err,data){
        res.writeHead(200,{'Content-Type':'text/html'})
        res.write(data)
        return res.end()
    })
}).listen(5000)