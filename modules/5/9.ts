namespace lesson_9 {
type tPayment = 'new' | 'paid';

interface iPayment {
  id: number
  status: tPayment
  payer?: string
  date?: Date
}

class Payment implements iPayment {
  id: number
  status: tPayment = 'new'
  constructor(id: number, status?: tPayment) {
    this.id = id
    if (status)
      this.status = status
  }

  pay() {
    this.status = 'paid';
  }
}

class personPayment extends Payment {
  payer: string
  date: Date
  constructor(payer: string, date: Date) {
    super(Math.random())
    this.payer = payer
    this.date = date
  }

  save() {
    // некий метод
  }
}

const VasyasPayment = new personPayment('Vasya', new Date());
}