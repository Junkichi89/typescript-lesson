let hasValue: boolean = false;
let count: number = 10;
let float: number =3.14;
let negative: number = - 0.12;
let single: string = '';
let double: string = "";
let back: string = `hello`;

const person = {
  name: { 
    first: 'Jack', 
    last: 'Smith',
  },
  age: 21
}

const fruits = ['Apple', 'Banana', 'Grape', 1]

const book: [string, number, boolean] = ['business', 1111, false ]

enum CoffeeSize {
  SHORT　= 'SHORT',
  TALL　= 'TALL',
  GRANDE　= 'GRANDE',
  VENTI　= 'VENTI'
}

const coffee = {
  hot: true,
  size: CoffeeSize.TALL
}

let unionType: number | string = 10;
// 数字か文字列が入る変数

let unionTypes: (number | string)[] = [21, 'hello'];
// 数字と文字列なら追加できる配列を指定

// リテラル型
const apple: 'apple' = 'apple';
// constを使うことでリテラル形を定義できる

// typeエイリアスの使い方
type ClothSize = 'small' | 'medium' | 'large'

// ユニオン型と組み合わせることでenumみたいに使える
let clothSize: ClothSize = 'large';

const cloth: {
  color: string;
  size: ClothSize
} = {
  color: 'white',
  size: 'small'
}

// 関数に型をつける場所は、パラメーターと戻り値（パラメーターの括弧の後ろにつける）
function add(num1: number, num2: number): number {
  return num1 + num2
}
// パラメーターには必ず型をつけること、つけないとanyになってしまうため
//　戻り値に関しては、絶対ではないが、ドキュメントとして見るときに、付けておいてそんなことはない

//何も返さない場合は、voidとする
function sayHello(): void {
  // console.log('Hello');
}

// 何も返さないといいつつ、undefinedを返している。
// undefinedもJS内では値である
// また、TSの中にもUndefined型というものもあるが、指定できない。
// しかし、return;と書いてあげると、undefinedで型定義することができる
// 基本的には、voidを使うでOK


// console.log(sayHello());
let tmp: undefined;
let temNull: null = undefined;
// null型はnullとundefinedがOK

// ここまで説明は関数宣言をする際の型付け

// これからは、関数に型を付ける

// const anotherAdd: (n1: number, n2: number) => number = add;

const anotherAdd: (n1: number, n2: number) => number = function (num1: number, num2: number): number {
  return num1 + num2
};
// 型は、どっちに付けても大丈夫、片方だけでもOK

// const doubleNumber = number => number * 2;
// => (アロー関数について、パラメーターが一つの場合は、括弧を省略できる、また、{}で囲って、returnする必要があるけれど、１行の分の場合、アロー関数だとreturnも{}もいらない)
const doubleNumber: (num: number ) => number = num => num * 2;
// これで型注釈をすることができる

// コールバック関数の型定義
function doubleAndHandle(num: number, cb: (num: number) => number): void {
const doubleNum = cb(num * 2);
doubleNum
// console.log(num * 2);
}

doubleAndHandle(21, doubleNum => {
  return doubleNum
});

let unknownInput: unknown;
let anyInput: any; 
let text: string;
 unknownInput = "hello";
 unknownInput = 21;
 unknownInput = true;
text =  anyInput;
// 使う時は、typeofを使用して、使うこと
if(typeof unknownInput === "string") {
  text = unknownInput;
}

// anyに似ていてなんでも入れれるが、使うときに注意が必要
// 型が決まっているところに入れることはできない


// never型について

function error(message: string): never {
  throw new Error(message);
}
console.log(error('This is an error'));

// これを実行する（tscでコンパイル、node ファイル名）と何も返していないことがわかる
// こういうときにneverという型を付けることができる
