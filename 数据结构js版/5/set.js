//es6  集合
var s = new Set()
s.add(1)
s.add(3)
s.add(5)


// s.forEach((value,value2,set) =>{
//     console.log('value - ' + value)
//     console.log('value2 - ' + value2)
//     console.log('set - ' + set)
// })

// var arr = [1,3,5];
// arr.forEach((value,index,arr)=>{
//     console.log('value - ' + value)
//     console.log('index - ' + index)
//     console.log('arr - ' + arr)
// })

//获得迭代器
// var iterator = s.entries()
// iterator.next()

var b = new Set([3,4,5]);

//解构
var c = [...b]    //[3,4,5]
var d = [...s,...b]  //[1, 3, 5, 3, 4, 5]

var union = new Set([...s,...b])   //{1, 3, 5, 4}


//过滤器
// var arr = [0,-10,55,-60,52,69];    
// var number = arr.filter(value =>{           // [55, 52, 69]
//     return value > 2
// })    

//交集
var intersect = new Set([...s].filter(x =>{
   return b.has(x)  //可以将return去掉
}))

//差集
var different = new Set([...s].filter(x =>{
    return !b.has(x)
}))