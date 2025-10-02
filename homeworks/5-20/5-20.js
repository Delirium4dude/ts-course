// Создать свою реализацию класса мап, имитируя поведение стандартной хэш-мапы.
// методы
// Добавление пары ключ-значение
// Удаление пары ключ-значение
// Получение значения по ключу
// Очистка всей структуры данных
// Использование бакетов для разделения данных по хэш-суммам ключей
// При совпадении хэш-сумм разных ключей, организовать хранение в виде цепочек элементов внутри бакета
var MyMap = /** @class */ (function () {
    function MyMap(buckets) {
        this.buckets = buckets || {};
    }
    MyMap.prototype.getHash = function (key) {
        return key.charAt(0) + key.length;
    };
    MyMap.prototype.get = function (key) {
        var hash = this.getHash(key);
        if (hash in this.buckets) {
            var curBucket = this.buckets[hash];
            if (!curBucket)
                return;
            for (var _i = 0, curBucket_1 = curBucket; _i < curBucket_1.length; _i++) {
                var item = curBucket_1[_i];
                if (item.key === key) {
                    return item.value;
                }
            }
        }
        return;
    };
    MyMap.prototype.set = function (key, value) {
        // ищем по хэшу массив объектов в формате {key, val}
        var hash = this.getHash(key);
        if (!this.buckets[hash]) {
            this.buckets[hash] = [{ key: key, value: value }];
        }
        else {
            var foundItem = void 0;
            for (var _i = 0, _a = this.buckets[hash]; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.key === key) {
                    foundItem = item;
                }
            }
            // const item = this.buckets[hash].find(item => item.key === key)
            if (foundItem)
                foundItem.value = value;
            else
                this.buckets[hash].push({ key: key, value: value });
        }
    };
    MyMap.prototype.delete = function (key) {
        var hash = this.getHash(key);
        if (!this.buckets[hash])
            return;
        this.buckets[hash] = this.buckets[hash].filter(function (item) { return item.key !== key; });
    };
    MyMap.prototype.clear = function () {
        this.buckets = {};
    };
    return MyMap;
}());
var mapes = new MyMap();
mapes.set('Moscow', 2);
console.log(mapes);
