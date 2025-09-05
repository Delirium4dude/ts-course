let a = 5;
let b:string = a.toString();
let e:string = new String(); // ошибка т.к. такая конструкция вернёт экземпляр класса String, а экземпляр класса, это всегда объект
let f:string = new String().valueOf();

interface User {
  name: string;
  email: string;
  login: string;
}

const user: User = {
  name: 'Vasya',
  email: 'vas@ya.ru',
  login: 'Vasya2'
}

const user2 = {
  name: 'Vasya',
  email: 'vas@ya.ru',
  login: 'Vasya2'
} as User

interface Admin {
  name: string;
  role: number;
}

// пример неправильного преобразования
const admin: Admin = {
  ...user,
  role: 1
}

// более предпочтительный способ преобразования
function userToAdmin(user:User):Admin {
  return {
    name: user.name,
    role: 1
  }
}


// ============= type guards =============

// функция typeguard
function isString(x: string | number): x is string {
  return typeof x === 'string';
}

function logId(id: string | number) {
  // проверка при помощи typeguard
  if (isString(id)) {
    console.log(id)
  } else {
    console.log(id)
  }

  // тут ts будет показывать неправильный тип несмотря на проверки сверху
  console.log(id)
}

function isAdmin(user: User | Admin): user is Admin {
  return 'role' in user;
}

function isAdminAlternative(user: User | Admin): user is Admin {
  return (user as Admin).role === 1;
}

function setRoleZero(user: User | Admin) {
  if (isAdmin(user)) {
    user.role = 0;
  } else {
    throw new Error('Пользователь не админ');
  }
}