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

document.body.textContent = greeter(user);