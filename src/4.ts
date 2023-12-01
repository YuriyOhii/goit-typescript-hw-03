class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature(): number {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey(): Key {
    return this.key;
  }
}

abstract class House {
  public door: boolean = false;
  public tenants: Person[] = [];
  constructor(public key: Key) {
    this.key = key;
  }

  comeIn(person: Person): void {
    if (this.door) this.tenants.push(person);
    console.log("person is in");
  }
  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  openDoor(key: Key): void {
    if (key === this.key) this.door = true;
    console.log("door is open");
  }
}

const key = new Key();
const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
