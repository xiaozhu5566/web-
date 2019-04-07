
//dictionary
function Dictionary() {
    var items = {};

    this.has = function (key) {
        return items.hasOwnProperty(key)
    }

    this.set = function (key, value) {
        if (!this.has(key)) {
            items[key] = value
        }
        return false;
    }

    this.get = function (key) {
        if (this.has(key)) {
            return items[key];
        }
        return undefined;
    }

    this.delete = function (key) {
        if (this.has(key)) {
            delete items[key]
            return true;
        }
        return false;
    }

    this.getItems = function () {
        return items;
    }
}

var person = new Dictionary();
person.set('name','zhu')
person.set('age',21)
person.set("sex","man")
