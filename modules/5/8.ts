namespace lesson_8 {
  
  type tPayment = 'new' | 'paid';
  
  interface iPayment {
    id: number
    status: tPayment
    payer?: string
    date: Date
  }
  
  // имлементация - реализация класса согласно интерфейсу
  class Payment implements iPayment {
    id: number
    status: tPayment = 'new'
    date
    constructor(id: number, date: Date, status?: tPayment) {
      this.id = id
      this.date = date
      if (status)
        this.status = status
    }
    
    pay(status?: tPayment) {
      this.status = status || 'paid';
    }
  }
  
  // расширение -  наследование и переопределение свойств и методов нового класса от старого
  class personPayment extends Payment {
    payer: string
    constructor(payer: string, date: Date) {
      super(Math.random(), date);
      this.payer = payer
    }
    
    override pay(status: tPayment, payer?: string) {
      super.pay(status);
      if (payer)
        this.payer = payer
    }
  }
  
  const VasyasPayment = new personPayment('Vasya', new Date());
  VasyasPayment.pay('paid');
}