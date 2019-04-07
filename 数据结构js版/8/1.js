
//图 类
function Graph() {
    //定义顶点  vertices -- 顶角，至高点，顶点数
    var vertices = [];
    //定义边   
    var adjList = {};

    //1. 添加顶点  vertex -- 顶点
    this.addVertex = function (v) {
        vertices.push(v);
        adjList[v] = [];
    }

    //2. 添加边
    this.addEdge = function (a, b) {
        //无向的，-- 双向都得添加
        // console.log(adjList[b],adjList)
        adjList[b].push(a);
        adjList[a].push(b);
    }

    //打印邻接表
    this.print = function () {
        var s = '';
        vertices.forEach(e => {
            s += e + " => ";
            adjList[e].forEach(e => {
                s += e;
            })
            s += '\n'
        })
        console.log(s)
    }
    // this.print = function () {
    //     var s ='';
    //     for (var i = 0; i < vertices.length; i++) {
    //         //顶点
    //         var v = vertices[i];
    //         s += v + " => ";

    //         for (var j = 0; j < adjList[v].length; j++) {
    //             s += adjList[v][j];
    //         }
    //         s += '\n';
    //         // console.log(s)
    //     }
    //     console.log(s)
    // }

    //遍历图 -- 广度遍历
    /**
     * 0 -- 未发现
     * 1 -- 已发现（发现了，但是没有将其邻接的图探索完毕）
     * 10 -- 探索完毕
     */
    var initStatus = function () {
        var status = {};
        vertices.forEach(e => {
            status[e] = 0;
        })
        return status;
    }
    // 从v点开始遍历
    this.traverse = function (v, callback) {
        //初始化vertex 的状态
        var status = initStatus();
        //创建对象
        var q = new Queue();
        //v入栈
        q.enqueue(v);
        //若队列不为空，一直遍历
        while (!q.isEmpty()) {
            //出栈 -- 返回值赋给now（当前值）
            var now = q.dequeue()
            //遍历now（当前值）的连接点
            adjList[now].forEach(e => {
                //如果有状态为 “未发现 -- 0” 的点 入列，并将其状态变为 "已发现 -- 1"
                if (status[e] == 0) {
                    q.enqueue(e);
                    status[e] = 1;
                }
            })
            //将 now（当前值） 的状态 变为 "探索完毕"
            status[now] = 10;

            //回调函数 -- 用来处理now但前值
            if (callback) {
                callback(now)
            }
        }
    }

    // 定义 辅助对象 -- 距离，回溯点
    var m = function (v, callback) {
        //定义到v点的距离
        var d = {},

            //定义回溯点
            prev = {};

        //初始化距离，回溯点
        vertices.forEach(e => {
            d[e] = 0;
            prev[e] = null;
        })

        //初始化vertex 的状态
        var status = initStatus();

        //创建对象
        var q = new Queue();

        //v入栈
        q.enqueue(v);

        //若队列不为空，一直遍历
        while (!q.isEmpty()) {
            //出栈 -- 返回值赋给now（当前值）
            var now = q.dequeue()

            //遍历now（当前值）的连接点
            adjList[now].forEach(e => {
                //如果有状态为 “未发现 -- 0” 的点 入列，并将其状态变为 "已发现 -- 1"
                if (status[e] == 0) {
                    //设置回溯
                    prev[e] = now;
                    d[e] = d[now] + 1;

                    q.enqueue(e);
                    status[e] = 1;
                }
            })
            //将 now（当前值） 的状态 变为 "探索完毕"
            status[now] = 10;

            //回调函数 -- 用来处理now但前值
            if (callback) {
                callback(now)
            }
        }
        return {
            prev: prev,
            d: d
        }
    }

    //最短路径
    this.minPath = function(from, to){
        //设置当前值
        var v = to;

        //获取辅助对象
        var s = m(from);
        // console.log(s)

        //定义栈 -- 数组 利用栈得到一个正确的顺序
        var stack = [];
        
        //当to(v) 的值不为 from 时，一直回溯
        while(v != from){
            stack.push(v);
            v = s.prev[v];  
        }
        
        //压入栈中
        stack.push(v);

        //翻转数组
        // stack.reverse()

        //解构
        // console.log(...stack)


        var str = "",

        //一定要先把数组的长度赋给别人，不要在for循环中直接使用stack.length,否则结合后面的出栈pop(),其长度会改变，会有意想不到的问题
        l = stack.length;
        
        for(var i = 0; i < l; i ++){
            // console.log(stack)
            var value = stack.pop();
            str += value + '-'
            // console.log(value)
        }
        str = str.slice(0,str.length - 1)
        console.log(str)
    }

    //深度优先遍历 -- 递归
    var dfs = function(v,status,callback){
        //当前点
        var now = v;

        //设置当前点状态 已发现
        status[now] = 1;

        //遍历当前点下的连接点（子点）
        adjList[now].forEach(e =>{
            if(status[e] == 0){
                //递归
                arguments.callee(e,status,callback);
            }
        })
        
        //设置当前点状态 探索完毕
        status[now] = 10;

        //huidiao
        if(callback){
            callback(now);
        }
    }
    this.dfs = function(v,callback){
        //初始化点的状态 -- 未发现
        var status = initStatus();
        
        dfs(v,status,callback);
    }
}

var g = new Graph();
//注意：别忘记加引号。
g.addVertex('A')
g.addVertex('B')
g.addVertex('C')
g.addVertex('D')
g.addVertex('E')
g.addVertex('F')

//添加线时，要先创建顶点！
g.addEdge('A', 'B')
g.addEdge('A', 'C')
g.addEdge('A', 'D')
g.addEdge('B', 'E')
g.addEdge('B', 'F')
g.addEdge('C', 'D')

// g.traverse('A', function (e) {
//     console.log(e)
// })

// g.minPath('A','F')

g.dfs('A',function(e){
    console.log(e)
})








//封装队列 

function Queue() {
    var queue = [] //定义私有变量
    //入列
    this.enqueue = function (e) {
        queue.push(e)
    }
    //出列
    this.dequeue = function () {
        return queue.shift();
    }
    //查看列头
    this.front = function () {
        return queue[0]
    }
    //是否为空
    this.isEmpty = function () {
        return queue.length == 0
    }
    //队列长度
    this.size = function () {
        return queue.length
    }
}