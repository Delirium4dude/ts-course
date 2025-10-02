namespace lesson_11 {
  class Vehicle {
    public make: string // это значение по умолчанию доступное везде
    protected run: number // доступно внутри класса и внутри экземпляра класса
    private damages: string[] // доступно внутри класса, не доступно в экземплярах класса
    #price: number // тоже самое что и private но нативно из js

    protected addDamage(damage: string) {
      this.damages.push(damage);
      this.#price = this.#price - this.#price * parseFloat(`0.${this.damages.length}`);
    }

    crash(damage: string):void {
      this.addDamage(damage)
    }

    isPriceEqual(v: Vehicle):boolean {
      return this.#price === v.#price
    }
  }

  const myVehicle = new Vehicle();
  myVehicle.make = 'bmw'
  myVehicle.crash('door');

  class Truck extends Vehicle {
    setDamage() {
      this.make = 'asasdasd'
    }

    setRun(km: number) {
      this.run = km / 0.62
    }
  }
}
