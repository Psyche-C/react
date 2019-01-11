function* hello(){
    yield 'hello';
    yield 'word';
    return 'end'
}
let result = hello();
console.log(result);
let r1 = result.next();
let r2 = result.next();
let r3 = result.next();
let r4 = result.next();
console.log(r1,r2,r3,r4)

// 如何执行函数，问题？yield 的个数 ，co(load())执行异步函数   修改状态 put、dispath 执行同步  call执行异步

