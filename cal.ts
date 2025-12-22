// 1. 객체의 타입을 
// 2. 클래스를 명세할 때 

// 사용법
export interface ICommon {
    add(a: number, b: number): number;
    sub(a: number, b: number): number;
}

export interface IExtension {
    mul(a: number, b: number): number;
    div(a: number, b: number): number;
}

export interface ICalculator extends ICommon, IExtension {}