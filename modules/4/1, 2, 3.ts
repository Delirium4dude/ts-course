// union params
function logId(id: string | number | boolean) {
  switch(typeof id) {
    case "string": console.log(id); break;
    case "number": console.log(id); break;
    case "boolean": console.log(id); break;
    default: ;
  }
}

function logError(err:string | string[]) {
  if (Array.isArray(err)) {
    console.log(...err);
  } else {
    console.log(err)
  }
}

function logObject(obj: {a: 1} | {b: 1}) {
  if ('a' in obj) {
    console.log(obj.a)
  } else {
    console.log(obj.b)
  }
}

function logMultipleIds(a: string | number, b: string | number): boolean {
  if (typeof a === typeof b) {
    return true;
  }
  return false;
}

enum MethodType {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE'
}

function fetchWithAuth(url: string, method: MethodType): undefined {
  console.log(url, method)
}

fetchWithAuth('some url', MethodType.GET)

// константный enum
const enum States {
  SUCCESS = 's',
  PROCESS = 'p',
  FAILED = SUCCESS + 'd'
}

const resp = {
  state: States.FAILED
}

type tUser = {
  name: string
  age: number
  skills: string[]
};

type Role = {
  id: number
};

type UserWithRole = tUser & Role;

interface iUser {
  name: string
  age: number
  skills: string[]
  log: (id:number) => string
};

interface iRole {
  id: number
}

interface iUserWithRole extends iUser, iRole {
  createdAt?: Date
}

// const user:UserWithRole = {

const user:iUserWithRole = {
  id: 1,
  name: 'asd',
  age: 22,
  skills: ['math', 'geo'],
  log(id) { return `${id}` }
}

// словари
interface UserDictionary {
  [index: number]: iUser
}

type UserDictionary2 = {
  [index: number]: iUser
}