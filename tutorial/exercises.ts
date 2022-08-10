// 1-1
const E1_1 = () =>{
  function isPositive(num:number):boolean {
    return num >= 0;
  }

  isPositive(3);
}

const E1_2 = () => {
  type User = {
    name:string;
    age:number;
    private:boolean;
  }

  function showUserInfo(user: User) {
    // 省略
  }

  showUserInfo({
      name: 'John Smith',
      age: 16,
      private: false,
  });
}

const E1_3 = () => {
  type IsPositiveFunc = (num:number) => boolean
  const isPositive: IsPositiveFunc = num => num >= 0;

  isPositive(5);
}

const E1_4 = () => {
  function sumOfPos(arr:number[]):number {
    return arr.filter(num => num >= 0).reduce((acc, num) => acc + num, 0);
  }

  const sum: number = sumOfPos([1, 3, -2, 0]);
}

const E2_1 = () => {
  function myFilter<T>(arr:T[], predicate:(elm:T) => boolean):T[] {
    const result = [];
    for (const elm of arr) {
      if (predicate(elm)) {
        result.push(elm);
      }
    }
    return result;
  }

  const res = myFilter([1, 2, 3, 4, 5], num => num % 2 === 0);
  const res2 = myFilter(['foo', 'hoge', 'bar'], str => str.length >= 4);
  const res3 = myFilter([['foo'], ['foo', 'hoge'], ['foo', 'hoge', 'bar']], num => num.length >= 2);
}

const E2_2 = () => {
  type Speed = "slow" | "medium" | "fast";

  function getSpeed(speed: Speed): number {
    switch (speed) {
      case "slow":
        return 10;
      case "medium":
        return 50;
      case "fast":
        return 200;
    }
  }

  const slowSpeed = getSpeed("slow");
  const mediumSpeed = getSpeed("medium");
  const fastSpeed = getSpeed("fast");
}

const E2_3 = () => {
// 型註釈
  type OptionalOb = {
    capture?:boolean;
    once?:boolean;
    passive?:boolean;
  }

  // FIXME ここで修飾子を使用することはできません。
  declare function addEventListener  (
    s: string,
    func: (x: any) => void,
    param?: boolean | OptionalOb
  ) : void;

  addEventListener("foobar", () => {});
  addEventListener("event", () => {}, true);
  addEventListener("event2", () => {}, {});
  addEventListener("event3", () => {}, {
    capture: true,
    once: false
  });

}

const E2_4 = () => {

  type Obj = {
    id:string;
  }

  function giveId<T>(obj:T):T & Obj {
    const id = "string";
    return {
      ...obj,
      id
    };
  }

  const obj1: {
    id: string;
    foo: number;
  } = giveId({ foo: 123 });
  const obj2: {
    id: string;
    num: number;
    hoge: boolean;
  } = giveId({
    num: 0,
    hoge: true
  });

}

const E2_5 = () => {

  declare function useState<T>(init: T): [T, (y: T | ((z: T) => T)) => void];
  // ↓見栄えが悪いので関数の引数は分ける
  type UseStateUpdateArgument<T> = T | ((oldValue: T) => T);
  declare function useState2<T>(
    initialValue: T
  ): [T, (updator: UseStateUpdateArgument<T>) => void];

  // number型のステートを宣言 (numStateはnumber型)
  const [numState, setNumState] = useState(0);
  // setNumStateは新しい値で呼び出せる
  setNumState(3);
  // setNumStateは古いステートを新しいステートに変換する関数を渡すこともできる
  setNumState((state) => state + 10);

  // 実際のReact・useStateの実装
  // function useState<S>(initialState: S | (() => S)): [S, Dispatch<SetStateAction<S>>];
  // function useState<S = undefined>(): [S | undefined, Dispatch<SetStateAction<S | undefined>>];

}

const E3_1 = () => {
  // function mapFromArray<T>(arr:T[], key:keyof T):Map<T[keyof T], T>
  // ↓見栄えが悪いので、演算子 T などはまとめる
  function mapFromArray<T,K extends keyof T>(arr:T[], key:K):Map<T[K], T> {

    const result = new Map();
    for (const obj of arr) {
      result.set(obj[key], obj);
    }
    return result;
  }

  const data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
  ];
  const dataMap = mapFromArray(data, "id");

  //TODO Tがオブジェクト以外の場合、メソッドのプロパティが通るのはどうする？(連想配列のオブジェクトのみの型註釈できる？)
  const dataMap2 = mapFromArray([1,2,3], "toString");
}

const E3_1a = () => {
  // TODO オブジェクトとしてRecord<string,any>入れてみた
  function mapFromArray2<T extends Record<string,any>,K extends keyof T>(arr:T[], key:K):Map<T[K], T> {

    const result = new Map();
    for (const obj of arr) {
      result.set(obj[key], obj);
    }
    return result;
  }

  const data = [
    { id: 1, name: "John Smith" },
    { id: 2, name: "Mary Sue" },
    { id: 100, name: "Taro Yamada" }
  ];
  const dataMap = mapFromArray2(data, "id");

  // 一応エラー出るようにはなった
  // const dataMap2 = mapFromArray2([1,2,3], "toString");

}

const E = () => {
}
