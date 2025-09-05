function generateError(message:string): never {
  throw new Error(message);
  
}

// несмотря на вроде бы проверку всех возможных типов параметра, мы всё равно имеем ошибку
function isString(x:string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }
}


// чтобы это исправить нужно добавить исчерпывающую проверку 
function isString2(x:string | number): boolean {
  if (typeof x === 'string') {
    return true;
  } else if (typeof x === 'number') {
    return false;
  }

  // но если добавить обработку с возвратом never то всё норм - называется исчерпывающая проверка 
  generateError("ошибка при распознавании типов")
}