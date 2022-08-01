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

//ジェネリクス
function fun<T>(args:T):T {
  return args;
}

const fun2 = <T extends string | number>(args: T): T => args;

let result0 = fun<string>("Hello World");
let result1 = fun({ name: 'John Doe' });


function funs<T,U>(arg1: T, arg2: U): [T, U] {
  return [arg1, arg2];
}
let result2 = funs('Hello', 100);

let result3 = fun<PersonTypeUnion>({ age: 10, lastName:'test',weight:100 });

interface KeyPair<T, U> {
  key: T;
  value: U;
}

type KeyPair2<T, U> = {
  key: T;
  value: U;
};

const kv1: KeyPair<number, string> = { key: 1, value: 'Steve' };
const kv2: KeyPair2<number, number> = { key: 1, value: 1000 };
const kv3: KeyPair<string, string[]> = { key: '10', value: ['John','Steve','Jane'] };

//型アサーション
const getValue = (format: boolean): string | number => {
  return format ? '10' : 10;
};

const value3 = getValue(true) as string;
const digit = value3.length;
const value4 = <string>getValue(true);
const digit2 = value4.length;
