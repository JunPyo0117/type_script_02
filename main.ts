
// 사용자
import { ICalculator } from "./cal";
import { Calculator } from "./cal.impl";

const cal: ICalculator = new Calculator();

console.log(cal.add(1, 2));
console.log(cal.sub(3, 1));
console.log(cal.mul(3, 4));
console.log(cal.div(6, 2));