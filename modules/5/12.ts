namespace lesson_12 {
  interface iProduct {
    id: number
    title: string
    price: number
  }

  // вот такое объявление
  class Product implements iProduct {
    id
    title
    price
    constructor(id: number, title:string, price:number) {
      this.id = id;
      this.title = title;
      this.price = price;
    }
  }

  // похоже вот такому объявлению НО не будет подсветки при пропуске параметров см. 28 строку
  // при таком объявлении все параметры
  // class Product implements iProduct {
  //   public id: number
  //   public title: string
  //   public price: number
  // }

  abstract class Delivery {
    constructor(
      public date: Date
    ) {}
  }

  class HomeDelivery extends Delivery {
    constructor(
        date:Date,
        public adress: string
      ) {
      super(date)
      this.adress = adress;
    }
  }

  class ShopDelivery extends Delivery {
    constructor(
      date: Date,
      public shopId: number
    ) {
      super(date);
      this.shopId = shopId;
    }
  }

  interface iCart {
    products: iProduct[]
    delivery: HomeDelivery | ShopDelivery
    addProduct(product: iProduct): void;
    deleteProduct(id: number): void;
    getSum(): number;
    setDelivery(delivery: HomeDelivery | ShopDelivery): void;
    checkout(): void;
  }

  class Cart implements iCart {
    products: Product[]
    delivery: HomeDelivery | ShopDelivery

    addProduct(product:iProduct){ this.products.push(product) }
    deleteProduct(){}
    getSum(){ return this.products.reduce((acc, val): number => acc + val.price, 0) }
    setDelivery(){}
    checkout(){}
  }
}