var  hello = require('./nodefs');

// hello('babel');


var fs = require('fs');

fs.readFile('./geci.txt', 'utf-8', function (err, data) {
    
    if(err) {
        console.log(err)
    }else{
        console.log(data)
    }

})

// 同步读取文件
// var rFS = fs.readFileSync("./tomorrow.txt", 'utf-8');
// console.log(rFS)

// 异步打开图片文件
fs.readFile('./taoyin.jpg', function (err, data) {
    if(err){
        console.log(err)
    }else{

        console.log(data)

        // 文件太大
        // var b_str = data.toString('utf-8');
        // console.log(b_str);
    }
})



// 直接删，再写
// var str = "明明眼上还挂着两行的泪滴，一转眼就飘到脑后去";

// fs.writeFileSync('./tomorrow.txt', str);

// var str = "其实我的心 还是 充满了好奇"

// fs.writeFile('./tomorrow.txt', str, function (err) {
//     if(err){
//         console(err)
//     }
// })


fs.stat('./geci.txt', function (err, stat) {

    if(err){
        console.log(err);
    }else{
        stat.isFile();
        stat.isFIFO();
        
        console.log(stat.mtime);
        console.log(stat.size);
    }

})