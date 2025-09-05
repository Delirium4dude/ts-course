type voidFunc = () => void;

const f1: voidFunc = () => {}

const f2: voidFunc = () => { return true }

const b = f2();

let a = 1 + b