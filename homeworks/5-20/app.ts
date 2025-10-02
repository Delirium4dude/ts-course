// Создать свою реализацию класса мап, имитируя поведение стандартной хэш-мапы.
// методы
// Добавление пары ключ-значение
// Удаление пары ключ-значение
// Получение значения по ключу
// Очистка всей структуры данных
// Использование бакетов для разделения данных по хэш-суммам ключей
// При совпадении хэш-сумм разных ключей, организовать хранение в виде цепочек элементов внутри бакета

/*
  buckets = {
    'asdsa3': [{key: 'London' value: 1}, {key: 'Boston' value: 3}],
    'fqweqw': [{key: 'Moscow' value: 2}]
  }
*/ 

type iItem = { key: string, value: any }
type HashMapItem = {
  [key: string]: Array<iItem>;
};

interface iMyMap {
  get(key: string): any
  set(key: string, value: any): void
  delete(key: string): void
  clear(): void
}

class MyMap implements iMyMap {
  private buckets: HashMapItem;

  constructor(buckets?: HashMapItem) {
    this.buckets = buckets || {};
  }

  private getHash(key: string): string {
    return key.charAt(0) + key.length;
  }

  get(key: string): string | undefined {
    const hash: string = this.getHash(key);

    if (hash in this.buckets) {
      const curBucket = this.buckets[hash];
      if (!curBucket)
        return;

      for (const item of curBucket) {
        if (item.key === key) {
          return item.value;
        }
      }
    }
    return;
  }

  set(key: string, value: any) {
    // ищем по хэшу массив объектов в формате {key, val}
    const hash: string = this.getHash(key);

    if (!this.buckets[hash]) {
      this.buckets[hash] = [{key, value}];
    } else {
      let foundItem;
      for (const item of this.buckets[hash]) {
        if (item.key === key) {
            foundItem = item;
        }
      }
      // const item = this.buckets[hash].find(item => item.key === key)
      if (foundItem) 
        foundItem.value = value;
      else
        this.buckets[hash].push({key, value})
    }
  }

  delete(key: string) {
    const hash: string = this.getHash(key);
    if (!this.buckets[hash]) return;
    this.buckets[hash] = this.buckets[hash].filter(item => item.key !== key);
  }

  clear() {
    this.buckets = {}
  }
}
