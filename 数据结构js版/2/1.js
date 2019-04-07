function Stack(){
    var arr = []  //私有变量
    // this.arr = []    //公有变量

    this.push = function(e){
       return arr.push(e)
    }
    this.pop = function(e){
        return arr.pop(e)
    }
    this.peek = function(){
        return arr[arr.length - 1]
    }
    this.isEmpty = function(){
        return arr.length == 0;
    }
    this.clear = function(){
        arr = [];
    }
    this.size = function(){
        return arr.length
    }

    this.getArr = function(){
        return arr;
    }
}

var arr = new Stack()


// var arr = [1,56,89]
// console.log(arr.push(8),arr.pop())


//10进制转2进制

var divBy2 = function(num){
    var stack = new Stack();

    var string = ''
    while(num > 0){
        stack.push(num % 2);
        num = Math.floor(num / 2);
    }
    // console.log(stack)
    while(!stack.isEmpty()){
        string += stack.pop()
    }
    return string;
}   

var a = divBy2(5)
console.log(a)