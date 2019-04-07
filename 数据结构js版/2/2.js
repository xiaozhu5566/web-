
//
var fn1 = function(){
    return console.log('fn1 执行完毕！')
}

var fn2 = function(){
    fn1()
    return console.log('fn2 执行完毕！')
}

//先执行fn1 ,后执行fn2  --> 因为fn2先入栈，fn1后入栈。自然fn1先出栈（执行完毕）
fn2()