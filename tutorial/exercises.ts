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
