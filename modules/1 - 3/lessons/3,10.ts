enum Statuses {
  SUCCESS,
  PROCESS = 1,
  FAILED = 'f'
}

const res = {
  message: 'Success',
  statusCode: Statuses.SUCCESS
}

function action(status: Statuses) {
  console.log(status)
}

action(Statuses.FAILED);
action(1);
// action('f'); // будет ошибка

// Enum может быть вычисляем
const func = () => 4

enum Some {
  SUCCESS,
  PROCESS = SUCCESS * 2,
  FAILED = func()
}

// константный enum
const enum States {
  SUCCESS = 's',
  PROCESS = 'p',
  FAILED = SUCCESS + 'd'
}

const resp = {
  state: States.FAILED
}
