//树

function Tree() {
    //根节点
    var root = null;
    //辅助类
    var Node = function (value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
    var insertNode = function (Node, newNode) {
        if (newNode.value < Node.value) {
            //left
            if (Node.left == null) {
                //有空位
                Node.left = newNode;
            } else {
                //无空位 -- 递归
                arguments.callee(Node.left, newNode)
                // insertNode(Node.left,newNode)
            }
        } else if (newNode.value > Node.value) {
            //right
            if (Node.right == null) {
                //有空位
                Node.right = newNode;
            } else {
                //无空位
                arguments.callee(Node.right, newNode)
                // insertNode(Node.right,newNode)
            }
        }
    }

    this.insert = function (value) {
        var newNode = new Node(value);
        if (root == null) {
            //空树
            root = newNode;
        } else {
            //不是空树
            insertNode(root, newNode);
        }
    }

    var traver = function (Node, callback) {
        //出口
        if (Node == null) return;

        // callback(Node.value); //10 9 20 15 100   前序遍历
        arguments.callee(Node.left, callback);
        // callback(Node.value);  //9 10 15 20 100  中序遍历
        arguments.callee(Node.right, callback);
        callback(Node.value);   //9 15 100 20 10    后序遍历   -- 适合游戏
    }

    //遍历树
    this.traverse = function (callback) {
        traver(root, callback)
    }

    //搜素节点
    this.search = function(){
        
    }

    //查找最小值
    var min = function (Node) {
        if (Node == null) return null;
        while (Node.left) {
            Node = Node.left;
        }
        return Node
    }
    this.min = function () {
        min(root)
    }
    //查找最大值
    var max = function (Node) {
        if (Node == null) return null;
        while (Node.right) {
            Node = Node.right;
        }
        console.log(Node.value);
    }
    this.max = function () {
        max(root)
    }
    this.getRoot = function () {
        return root;
    }

    //删除节点
    var removeNode = function (Node, value) {
        if (Node == null) return null;
        if (value < Node.value) {
            Node.left = arguments.callee(Node.left, value);
            return Node;
        } else if (value > Node.value) {
            Node.right = arguments.callee(Node.right, value);
            return Node;
        } else {
            //没有子节点 -- 叶节点
            if (Node.left == null && Node.right == null) return null;
            //只有一个子节点
            if (Node.left && Node.right == null) {
                //左侧存在，右侧不存在
                return Node = Node.left;
            } else if (Node.left == null && Node.right) {
                //右侧存在，左侧不存在
                return Node.right;
            }
            //有两个子节点  -- 其右侧子树的最小子节点替换

            //查询右侧子树的最小节点
            var minNode = min(Node.right);
            console.log(minNode)
            //值替换 -- 不需要整个替换
            Node.value = minNode.value;
            console.log(root)
            // arguments.callee(root,minNode.value);  //不对
            Node.right = arguments.callee(Node.right, minNode.value)
            return Node;

        }
    }
    this.remove = function (value) {
        removeNode(root, value);
    }
}

function print(value) {
    console.log('value - ' + value);
}

var tree = new Tree();
tree.insert(10)
tree.insert(9)
tree.insert(20)
tree.insert(15)
tree.insert(100)
tree.insert(45)
tree.insert(110)
tree.insert(14)
// tree.traverse(print)
