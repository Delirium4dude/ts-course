interface User {
  name: string
}

const a = {};

function assertUser(obj: unknown): asserts obj is User {
  if (typeof obj === 'object' && !!obj && 'name' in obj) {
    return
  }

  throw new Error('Не пользователь')
}

// чтобы затипизировать переменную
assertUser(a);

a.name = ''