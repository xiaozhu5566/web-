//封装队列 
var Queue = function(){
    var queue = [] //定义私有变量
    //入列
    this.enqueue = function(e) {
         queue.push(e)
    }
    //出列
    this.dequeue = function(){
        return queue.shift();
    }
    //查看列头
    this.front = function(){
        return queue[0]
    }
    //是否为空
    this.isEmpty = function(){
        return queue.length == 0
    }
    //队列长度
    this.size = function(){
        return queue.length
    }
}




//击鼓传花
/**传过的人，放到队列后面。第三个人踢出去，就这样一直循环，知道最后一个人
 * ['c,'d','e','f','a','b'] --> [d','e','f','a','b']
   */

//玩家列表
var name = ['a','b','c','d','e','f'] 

//游戏规则，每次循环到第三个人，被淘汰
var num = 3;

var deliverFlower = function(name,num){
    var queue = new Queue()
    //玩家入场
    for(var i = 0; i < name.length; i ++){
        queue.enqueue(name[i])
    }
    
    while(queue.size() > 1){
        for(var i = 0; i < num -1; i ++){
            queue.enqueue(queue.dequeue())
        }
        //淘汰玩家
        // var weedOut = queue.dequeue()
        console.log(`淘汰玩家：${queue.dequeue()}`);
    }
    //胜利玩家
    console.log(`胜利玩家：${queue.dequeue()}`)

}
deliverFlower(name,num);
