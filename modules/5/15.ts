namespace lesson_15 {   
  class UserBuilder {
    name: string;

    setName(name: string): this { 
      // можно было бы указать UserBuilder, но this правильнее
      // если указать напрямую UserBuilder при наследовании будут ошибки
      this.name = name;
      return this;
    }

    // typeguard
    isAdmin(): this is AdminBuilder {
      return this instanceof AdminBuilder;
    }
  }

  class AdminBuilder extends UserBuilder {
    roles: string[];
  }

  const user = new UserBuilder().setName('Peter');
  const admin = new AdminBuilder().setName('John');

  let someUser: UserBuilder | AdminBuilder = new UserBuilder();

  if (someUser.isAdmin()) {
    console.log(1, user)
  } else {
    console.log(2, user)
  }
}