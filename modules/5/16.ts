namespace lesson_16 {
  abstract class Controller {
    abstract handle(req: any): void; // абстрактные методы могут быть только в абстрактных классах

    // не все методы абстрактные
    handleWithLoggs(req: any) {
      console.log('Start');
      this.handle(req);
      console.log('End');
    }
  }

  // абстрактный класс инстанциировать нельзя

  class UserController extends Controller {
    handle(req: any): void {
      console.log('log from user '+ req)
    }
  }

  const coll = new UserController();

  // метод абстрактного класса будет наследован и выполнится корректно несмотря 
  // на вызов абстрактного hamdle

  coll.handleWithLoggs('request');
}