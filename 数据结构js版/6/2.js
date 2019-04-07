//哈希表
function HashTable (){
    var items = [];
    //key -> ASCII 码 -- 散列算法 1
    var loseloseHashCode = function(key){
        var hash = 0;
        for(var i = 0; i < key.length; i ++){
            hash += key[i].charCodeAt();
        }
        return hash % 37;   //默认取余37
    }

    // 散列算法 2
    var djb2HashCode = function(key){
        var hash = 5381;
        for(var i = 0; i < key.length; i ++){
            hash = hash*33 + key[i].charCodeAt();
        }
        return hash % 1013;
    }
    this.put = function(key,value){
        var position = loseloseHashCode(key);
        items[position] = value;
    }
    this.remove = function(key){
        var position = loseloseHashCode(key);
        items[position] = undefined;
        // delete items[position]    //好像也可以删除arr
        return items[key];
    }
    this.get = function(key){
        return items[loseloseHashCode(key)];
    }
    this.geyItems = function(){
        return items;
    }
}

var hash = new HashTable();
hash.put("zhu","1350509871@qq.com")
hash.put("wang","4941109871@qq.com")