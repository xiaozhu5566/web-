
//优先队列

var PriorityQueue = function(){
    //按优先级存储 vip 大佬
    var items = []
    //辅助类 
    var QueueItem = function(name,priority){
        this.name = name;
        this.priority = priority;
    }
    //入队列规则
    this.enqueue = function(name,priority){
        //创建辅助类
        var queueItem = new QueueItem(name,priority);
        var judge = false;
        for(var i = 0; i < items.length; i ++){
            if(queueItem.priority > items[i].priority){
                items.splice(i,0,queueItem);
                judge = true;
                break;
            }
        }
        if(!judge){
            items.push(queueItem)
        }
    }
    this.getqueue = function(){
        return items;
    }
}

var vip = new PriorityQueue();
vip.enqueue('小明',15)
vip.enqueue('小红',1)
vip.enqueue('小朱',20)

console.log(vip.getqueue())
