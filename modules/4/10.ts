let input: unknown;
let input2: any;

input = {};
input2 = {};
input = 3;
input2 = 3;
// что при unknown, что при any можно приссваивать любые значения

let res:string = input; // благодаря unknown тут будет ошибка т.е. тип вычислиться исходя из значения
let res2:string = input2; // с any тут ошибки не будет. Any просто отменяет ts и любые проверки

function run(i: unknown) {
  if (typeof i === 'number') { // пример сужения типов
    i++ // тут мы проверили тип и дальше i опеределена как число без явного переопределения 
  } else if (typeof i === 'string') {
    console.log(i.toLowerCase()); // сужение типов
  } else {
    console.log(i);
  }
}

async function getData() {
  try {
    await fetch('some/url');
  } catch (error) {
    // instanceof позволяет сузить тип переменной по прототипу / классу
    if (error instanceof Error) {
      console.log(error.message); 
    }
  }
}

