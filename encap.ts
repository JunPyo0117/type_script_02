class Person {
    #weight: number;
    
    constructor(private name: string,private _height: number, weight: number) {
        this.#weight = weight;
    }

    // getter
    getName() {
        return this.name;
    }

    // setter
    setName(newName: string) {
        this.name = newName;
    }

    get height() {
        console.log("get height");
        return this._height;
    }

    set height(newHeight: number) {
        console.log("set height");
        if (newHeight > 0) {
            this._height = newHeight;
        } else {
            this._height = 0;
        }
        
    }

    get weight() {
        return this.#weight;
    }

    set weight(newWeight: number) {
        if (newWeight > 0) {
            this.#weight = newWeight;
        } else {
            this.#weight = 0;
        }
    }
}

const p: Person = new Person("John", 180, 70);
// console.log(p.getName());
// p.setName("Jane");
// console.log(p.getName());

// console.log(p.height);
// p.height = -100;
// console.log(p.height);

console.log(p.weight);
