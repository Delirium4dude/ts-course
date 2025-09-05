import axios from 'axios';
const urlStr:string = `https://dummyjson.com/users`;

enum gender {
  male = 'male',
  female = 'female'
}

type User = {
  id: number,
  firstName: string,
  lastName: string,
  maidenName: string,
  age: number,
  gender: gender
}

async function getUsers():Promise<User[] | Error> {
  const resp = await axios.get<User[]>(urlStr);
  if (resp.status !== 200) {
    throw new Error('Ошибка при получении данных');
  }
  return resp.data.map(user => {
    if (!(user.gender in gender)) {
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
}

getUsers()
  .then(users => {
    console.log(users);
  }).catch(err => {
    console.error(err);
  });