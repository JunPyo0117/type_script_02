class Animal {}

abstract class Person2 extends Animal {
    #name: string;

    constructor(name: string) {
        super();
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    setName(newName: string) {
        this.#name = newName;
    }

    abstract greet(); // 명세만 가능 함, 자식에서 구현
}

class Student extends Person2 {
    constructor(name: string) {
        super(name);
    }

    greet() {
        console.log(`Hello, world!`);
    }
}

// 추상 클래스의 인스턴스를 만들 수 없다
// new Person2("John");

