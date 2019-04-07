//线性探查法

function HashTable() {
    var hash = [];
    //key -> ASCII 码
    var loseloseHashCode = function (key) {
        var hash = 0;
        for (var i = 0; i < key.length; i++) {
            hash += key[i].charCodeAt();
        }
        return hash % 37;   //默认取余37
    }

    //辅助类
    var Obj = function (key,value) {
        this.key = key;
        this.value = value;
    }
    this.put = function (key, value) {
        var position = loseloseHashCode(key);
        if(hash[position] == undefined){
            hash[position] = new Obj(key,value);
        }else{
            //这个位置被占据了
            var index= position +1;
            //一直往后查找空的位置
            while(hash[index] == !undefined){
                index ++;
            }
            hash[index] = new Obj(key,value);
        }
    }

    this.get = function(ke){
        var position = loseloseHashCode(ke);
        if(hash[position].key == ke){
            return hash[position].value;
        }else{
            var index = position + 1;
            while(hash[index].key != ke){
                index ++;
            }
            return hash[index].value;
        }
    }

    this.remove = function(ke){
        var position = loseloseHashCode(ke);
        if(hash[position].key == ke){
             hash[position] = undefined;
        }else{
            var index = position + 1;
            while(hash[index].key != ke){
                if(index < hash.length){
                    index ++;
                }else{
                    return;
                }
            }
             hash[index] = undefined;
        }
    }
    this.getHash = function () {
        return hash;
    }
}

var hash = new HashTable();
hash.put("Ana", "1350509871@qq.com")
hash.put("Donnie", "4941109871@qq.com")