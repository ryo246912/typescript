function greeter(person:string) {
  return "Hello, " + person;
}

let user = "Jane User";

// 型
// 文字列
const name2: string | null = 'John Doe';
// 数字
const age: number = 25;
// 数値
const isAdmin: boolean = true;
// 配列
const fruits: string[] = ['apple', 'banana'];
const fruits3: (string | number)[] = ['apple', 10];
const fruits2: Array<string | number> = ['apple', 'banana'];
// タプル
const fruits_tuple:[string,number] = ['apple',10];
// null
const value:null = null;
// undefined
const value2 = undefined;
// any
const name_1: any = undefined;
// オブジェクト
const user_dict: {
  id: number;
  name: string;
} = {
  id: 100,
  name: 'John Doe',
};
const user_dict2: { readonly id: number; name?: string } = {
  id: 100,
  name: 'John Doe',
};

// 関数
const hello0 = (name: string): string => {
  return 'Hello ' + name;
};
// 関数の型を設定 [(name: string) => string]の部分
const hello: (name: string) => string = (name: string): string => {
  return 'Hello ' + name;
};

//interface
interface PersonInterface {
  firstName: string;
  lastName: string;
}

interface PersonInterface {
  greeting: (message: string) => string;
  // greeting(message: string): string;
}
interface greeterInterface {
  (name: string): string;
}

let user2: PersonInterface = {
  firstName: "John",
  lastName: "Smith",
  greeting(message) {
    return `${message} ${this.firstName}`;
  },
}

//type
type Name = string;
type fruits = 'apple' | 'banana' | 'lemon';

type PersonFirst = {
  firstName: string;
  age: number;
  height: number;
};
type PersonLast = {
  lastName: string;
  age: number;
  weight: number;
};
type PersonType = PersonFirst & PersonLast;
type PersonTypeUnion = PersonFirst | PersonLast;

type greeterType = (person: PersonInterface) => string;

const user3: PersonTypeUnion = {
  firstName: 'John',
  lastName: 'Doe',
  age: 10,
  weight: 60,
};

const greeter2 : greeterType = (person: PersonInterface) => {
  console.log(person.greeting("test"))
  return "Hello, " + person.firstName + " " + person.lastName;
}

function greeter2a(person: { firstName: Name; lastName: string }) {
  return 'Hello, ' + person.firstName + ' ' + person.lastName;
}

function x(fruits:fruits = 'apple'){
  return fruits
}

console.log(greeter2(user2))

document.body.textContent = greeter(user);