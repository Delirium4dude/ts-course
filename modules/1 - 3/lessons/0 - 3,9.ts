// function getFullname(user:{firstname: string, surname: string}):string {
//   return `${user.firstname} ${user.surname}`;
// }

// const user = {
//   firstname: 'Иван',
//   surname: 'Иванов',
//   city: 'Москва',
//   age: 33
// }

const taskObj: {
  officeId: number
  isOpened: boolean
  contacts: {
    phone:string
    email:string
    address: {
      city: string
    }
  }
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: '+79100000000',
    email: "my@email.ru",
    address: {
      city: "Москва"
    }
  }
}

// const skills:Array<string | number> = ['Dev', 'DevOps', 1];
// ...boolean[] так можно типизировать произвольное колличество элементов в конце массива
const arrsome:[string, number, ...boolean[]] = ['Dev', 1, true, false];

const skills: readonly [string, number] = ['Dev', 1];
const skills2: ReadonlyArray<string> = ['Dev', '1'];

// skills.push(1) // будет ошибка из-за readonly
// skills[1] = 'asdasd' // будет ошибка из-за readonly

// skills2.push(1) // будет ошибка из-за readonly
// skills2[1] = 'asdasd' // будет ошибка из-за readonly

for (const skill in skills) {
  console.log(skill.toLowerCase() + 1);
}