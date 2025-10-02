namespace lesson_13 {
// статичные свойства и методы нужны чтобы их можно было вызвать от самого класса, а не от исстанса класса
  class UserService {
    private static db: any; // можно комбинировать с другими модификаторами

    static getUser(id: number) {
      // статичное свойство может быть асинхронным static async 
      return UserService.db.findById(id); // правильнее обращаться к классу а не к инстансу this.db - можно, но неправильно
    }

    create() {
      console.log(UserService.db); // статичные свойства и методы доступны от класса, а не только от инстанса класса (например singleton)
    }
    static {
      UserService.db = 'asdasd';
    }
  }

  const userInst = new UserService();
  console.log(userInst.create());
}