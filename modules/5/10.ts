namespace lesson_10 {

  class User {
    name: string;
    
    construnctor(name:string) {
      this.name = name
    }
  }
  
  class Payment {
    date: Date
  }

  // так лучше не делать т.к. все методы Array будут доступны. Лучше не мешать утилитарные типы с бизнессовыми
  class Users extends Array<User> { 
    searchByName(name: string) {
      return this.find(user => user.name.includes(name));
    }

    override toString(): string {
      return this.map(u => u.name).join(', ')
    }
  }

  // лучше делать так
  class UserList {
    users: Array<User>;

    push(u: User) {
      this.users.push(u)
    }
  }

  // композиция классов это лучше чем наследование (extends) это уменьшает связанность
  class UserPayment {
    user: User
    payment: Payment

    constructor(user: User, payment: Payment) {
      this.user = user
      this.payment = payment
    }
  }
  enum StatusEnum {
    success = 'success',
    failed = 'failed'
  }
  
  type FailedData = {
    status: keyof typeof StatusEnum;
    errorMessage: string;
    errorCode: number;
  };
  
  const resp: FailedData = {
    status: 'success',
    errorMessage: 'asd',
    errorCode: 123
  }
}
