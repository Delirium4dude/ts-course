namespace lesson_6 {
  interface ILogger {
    log(...args: any[]): void
    error(...args: any[]): void
  }

  class Logger implements ILogger {
    log(...args: any[]): void {
      // throw new Error("Method not implemented.");
      console.log(...args)
    }
    error(...args: any[]): void {
      // throw new Error("Method not implemented.");
    }
  }

  interface IPayble {
    pay(paymentId: number): void
    price?: number
  }

  interface IDeleteable {
    delete(paymentId: number): void
  }

  // имплементация - реализация класса согласно описанному интерфесу. Класс может реализовывать сразу несколько интерфейсов
  class User implements IPayble, IDeleteable {
    _login: string;
      // сеттер вычисляется из возвращаемого типа геттера
    set login(l:string) {
      this._login = 'user-' + l;
    }
    get login() {
      return this._login.replace('user-', '');
    }
    delete(paymentId: number): void {
      throw new Error("Method not implemented.");
    }
    
    // класс может имплементировать сразу несколько интерфейсов
    // класс может только расширять имплементацию интерфейса, но не изменять её. следующая функция будет корректна
    pay(paymentId: number): void | number{ }
    // но в таком варианте будет ошибка
    // pay(paymentId: string): number{ }


    price?: number;
  }
}

