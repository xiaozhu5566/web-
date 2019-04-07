//集合
//set 是原型中的一个属性，这里为了区分开来，故使用 Set2
var Set2 = function () {
    var items = {}
    //检查集合中是否有这个值
    this.has = function (value) {
        return items.hasOwnProperty(value);
    }
    //添加属性
    this.add = function (value) {
        //!this.has() == true -- 集合中没有这个元素  -- 添加
        if (!this.has(value)) {
            items[value] = value;
            return true;  
        }
        return false;
    }
    //移除
    this.remove = function (value) {
        if (this.has(value)) {
            delete items[value];
            return true;
        }
        return false;
    }
    //清空集合
    this.clear = function () {
        item = {}
    }
    //获取集合长度  -- 3种方法 1. 定义一个length变量； 2. 像下面这种； 3.keys()方法
    this.size = function () {
        //遍历集合
        // var count = 0;
        // if (this.has(value)) {
        //     for (var i in items) {
        //         count++
        //     }
        // }

        // return count;

        //es6 方法  有兼容性问题
        return Object.keys(items).length
    }
    //返回 值 的 数组形式
    this.value = function(){
        var values = [];
        for(var i in items){
            if(this.has(i)){
                values.push(items[i])
            }
        }
        return values;
    }
    
    //获取这个集合
    this.getItems = function () {
        return items;
    }

    //并集
    this.union = function(otherSet){
        var resultSet = new Set2();

        //1. 把自己集合的值提取出来
        var arr = this.value();
        for(var i = 0; i < arr.length; i ++){
            resultSet.add(arr[i]) 
        }

        //2. 把另一个集合的值提取出来
        var arr = otherSet.value();
        for(var i = 0; i < arr.length; i ++){
            //不用担心重复，因为add已经实现了 去重
            resultSet.add(arr[i]) 
        }
        return resultSet;
    }

    //交集
    this.intersetion = function(otherSet){
        var resultSet = new Set2();
        var arr = this.value();
        for(var i = 0; i < arr.length; i ++){
            if(otherSet.has(arr[i])){
                resultSet.add(arr[i])
            }
        }
        return resultSet;  
    }
}
   //差集
   this.difference = function(otherSet){
    var resultSet = new Set2();
    var arr = this.value();
    for(var i = 0; i < arr.length; i ++){
        if(otherSet.has(arr[i])){
            //不执行
        }else{
            resultSet.add(arr[i])
        }
    }
    return resultSet;  

}

var A = new Set2()
A.add(10)
A.add(20)
A.add(30)

var B = new Set2()
B.add(10)
B.add(40)
B.add(50)

console.log(A.union(B).getItems())