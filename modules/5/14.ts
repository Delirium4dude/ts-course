namespace lesson_14 {
  class UserPayment {
    private date: Date = new Date();
    // для отображения ошибки при потере контекста нужно прокинуть this
    getDate(this: UserPayment) { 
      console.log('123', this.date)
      return this.date;
    }

    getDateArrow = () => {
      console.log(this.date)
      return this.date;
    }
  }

  // const up = new UserPayment()
  // up.getDate()
  // // console.log(up.getDate())

  // const user = {
  //   id: 1,
  //   paymentDate: up.getDate.bind(up),
  //   paymentDateArr: up.getDateArrow
  // }

  class PaymentPersistent extends UserPayment {
    save() {
      return this.getDateArrow();
    }   
  }

  const pp = new PaymentPersistent();
  pp.save()
  // тут не нужно указывать первый параметр, который this typescript сделает это за нас
  // параметры указываются со второго
  // console.log(user.paymentDate(2))
}