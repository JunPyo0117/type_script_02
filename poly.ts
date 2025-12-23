// class Animal1 {
//     bark() {}
// }

// class Dog extends Animal1 {
//     bark(): void {
//         console.log("Woof");
//     }
// }

// class Cat extends Animal1 {
//     bark(): void {
//         console.log("Meow");
//     }
// }

abstract class Linux {
    constructor(private readonly _name: string) {}

    getName() {
        return this._name;
    }

    turnOn() {
        console.log(`${this.getName()} is turning on`);
    }

    turnOff() {
        console.log(`${this.getName()} is turning off`);
    }

    abstract login();
}

interface IPhotoShop {
    imagePath();
}

interface IVisualStudio {
    codeEdit();
}

interface IExcel {
    getCell();
}


class Redhat extends Linux implements IPhotoShop, IExcel {
    constructor(name: string) {
        super(name);
    }

    login() {
        console.log(`${this.getName()} is logging in with ID and password`);
    }

    imagePath() {
        console.log(`${this.getName()} is opening image jpg`);
    }

    getCell() {
        console.log(`${this.getName()} is getting cell`);
    }
}

class Debian extends Linux implements IVisualStudio, IPhotoShop {
    constructor(name: string) {
        super(name);
    }

    login() {
        console.log(`${this.getName()} is logging in with SSH key`);
    }

    codeEdit() {
        console.log(`${this.getName()} is coding with Visual Studio`);
    }

    imagePath() {
        console.log(`${this.getName()} is opening image png`);
    }
}

class Ubuntu extends Linux implements IVisualStudio , IExcel {
    constructor(name: string) {
        super(name);
    }
    
    login() {
        console.log(`${this.getName()} is logging in with fingerprint`);
    }

    codeEdit() {
        console.log(`${this.getName()} is coding with python`);
    }

    getCell() {
        console.log(`${this.getName()} is getting cell`);
    }
}