
let co = require('co');

function load(num){
    return new Promise((resolve,reject)=>{
        setTimeout(function() {
            resolve(Math.random()*num);
        }, 1000);
    })
}

function* hello(){
    let a = yield load(1);
    console.log('a',a);
    let b = yield load(1000);
    console.log('b',b);        
}

let r = hello();
r.next().then();
r.next().then();
// 借助co来执行异步函数
co(hello())


