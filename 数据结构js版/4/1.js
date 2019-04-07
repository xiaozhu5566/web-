
//链表

var Chain = function () {

    //链表头
    var head = null;
    //链表长度
    var length = 0;
    //定义节点对象  -- 火车箱
    var Node = function (element) {
        this.element = element;
        this.next = null;
    }

    //链表末尾追加元素
    this.append = function (element) {
        var node = new Node(element);
        if (head == null) {
            head = node;
        } else {
            var current = head;
            //一直向后查询，查询到最后一个节点时（current.next == null）--最后一节火车
            while (current.next) {
                current = current.next;
            }
            //向后添加子节点  --  在最后一节车厢后添加车厢
            current.next = node;
        }
        length++;
    }

    //链表任意位置插入元素
    this.insert = function (position, element) {
        var node = new Node(element)
        //插入范围
        if (position < -1 && position > length) {
            return;
        }
        if (position == 0) {
            var current = head;
            head = node;
            head.next = current;
        } else {
            var index = 0,
                previous = null,
                current = head;
            while (index < position) {
                previous = current;
                current = current.next;
                index++;
            }
            previous.next = node;
            node.next = current;
        }
        length++;
    }

    //根据 position 删除 节点
    this.removeAt = function (position) {
        //移除范围
        if (position > -1 && position < length) {
            if (position == 0) {
                var current = head;
                head = current.next;
            } else {
                var current = head,
                    previous = null,
                    //记录循环次数
                    index = 0;
                while (index < position) {
                    previous = current;
                    current = current.next;
                    index++;
                }
                //current 到达指定 position 时
                previous.next = current.next;
            }
            length--;
            //移除不是主要目的，有时需要用到移除的元素 ，所以要return出来
            return current;
        }
        return null;
    }

    //根据 element 查找 位置
    this.indexOf = function (element) {
        var current = head,
        index = 0;
        while (current) {
            if (current.element == element) {
                return index;
            }
            current = current.next;
            index ++;
        }
        return -1;
    }

    //根据 element 删除 节点   ————  代码复用
    this.remove = function(element){
        return this.removeAt(this.indexOf(element));
    }
    
    this.getHead = function () {
        return head;
    }

    this.isEmpty = function(){
        return length == 0;
    }
    this.size = function(){
        return length;
    }
}