export default class Person {
  private _name: string;
  private _birthDate: Date;
  
  constructor(name: string, birthDate: Date){
    this._name = name;
    this._birthDate = birthDate;
  }

  public get name(): string {
    return this._name;
  }

  public set name(value: string) {
    if (value.length < 3) {
      throw new Error('O nome deve ter no mínimo três caracteres');
    }
    this._name = value;
  }

  public get birthDate(): Date {
    return this._birthDate;
  }

  public set birthDate(value: Date) {
    if (value > new Date()) {
      throw new Error('A data de nascimento não pode ser uma data no futuro');
    }

    const year =  new Date().getFullYear() - value.getFullYear();

    if (year > 120) {
      throw new Error('A pessoa não pode possuir mais de 120 anos');
    }

    this._birthDate = value;
  }
}

const person1 = new Person('Vitor', new Date(1994, 4, 17));
const person2 = new Person('Cely', new Date(1993, 8, 10));
const person3 = new Person('Gandalf', new Date(1400, 10, 1));

console.log(person1, person2, person3);

