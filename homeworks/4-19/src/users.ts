import axios from 'axios';
const urlStr:string = `https://dummyjson.com/users`;

enum Gender {
  male = 'male',
  female = 'female'
}

type User = {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: Gender
}

async function getUsers():Promise<User[] | Error> {
  try {
    const resp = await axios.get<{users: User[]}>(urlStr);
      if (resp.status !== 200) {
        throw new Error('Ошибка при получении данных');
      }

    return resp.data.users.map(user => {
      if (!(user.gender in Gender)) {
        console.log(`Некорректное значение gender для пользователя ${user.id}: ${user.gender}`);
      }

      return ({
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        maidenName: user.maidenName,
        age: user.age,
        gender: user.gender
    })});
  } catch(e) {
    return e;
  }
}

getUsers()
  .then(users => {
    console.log(users);
  }).catch(err => {
    console.error(err);
  });