interface iUser {
  name: string
  surname ?: string
}

interface iUser { // интерфейсы в отличии от типов доопределяются
  age: number
}

const newUser: iUser = {
  name: 'Sam',
  age: 22
}

function multiply(first: number, second?: number):number {
  if(!second) return Math.pow(first, 2);
  return first * second
}

function logUser(user:iUser) {
  const surname = user.surname!.toUpperCase() // конструкция !. позволяет указать для опционального значения, что в данном месте оно точно не undefined
}

function test(param?: string) {
  const t = param ?? multiply(5); // если param = null или undefined выполнить multiply(5)
}