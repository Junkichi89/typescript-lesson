var hasValue = false;
var count = 10;
var float = 3.14;
var negative = -0.12;
var single = '';
var double = "";
var back = "hello";
var person = {
    name: {
        first: 'Jack',
        last: 'Smith'
    },
    age: 21
};
var fruits = ['Apple', 'Banana', 'Grape', 1];
var book = ['business', 1111, false];
var CoffeeSize;
(function (CoffeeSize) {
    CoffeeSize["SHORT"] = "SHORT";
    CoffeeSize["TALL"] = "TALL";
    CoffeeSize["GRANDE"] = "GRANDE";
    CoffeeSize["VENTI"] = "VENTI";
})(CoffeeSize || (CoffeeSize = {}));
var coffee = {
    hot: true,
    size: CoffeeSize.TALL
};
var unionType = 10;
// 数字か文字列が入る変数
var unionTypes = [21, 'hello'];
// 数字と文字列なら追加できる配列を指定
// リテラル型
var apple = 'apple';
// ユニオン型と組み合わせることでenumみたいに使える
var clothSize = 'large';
var cloth = {
    color: 'white',
    size: 'small'
};
// 関数に型をつける場所は、パラメーターと戻り値（パラメーターの括弧の後ろにつける）
function add(num1, num2) {
    return num1 + num2;
}
// パラメーターには必ず型をつけること、つけないとanyになってしまうため
//　戻り値に関しては、絶対ではないが、ドキュメントとして見るときに、付けておいてそんなことはない
//何も返さない場合は、voidとする
function sayHello() {
    // console.log('Hello');
}
// 何も返さないといいつつ、undefinedを返している。
// undefinedもJS内では値である
// また、TSの中にもUndefined型というものもあるが、指定できない。
// しかし、return;と書いてあげると、undefinedで型定義することができる
// 基本的には、voidを使うでOK
// console.log(sayHello());
var tmp;
var temNull = undefined;
// null型はnullとundefinedがOK
// ここまで説明は関数宣言をする際の型付け
// これからは、関数に型を付ける
// const anotherAdd: (n1: number, n2: number) => number = add;
var anotherAdd = function (num1, num2) {
    return num1 + num2;
};
// 型は、どっちに付けても大丈夫、片方だけでもOK
// const doubleNumber = number => number * 2;
// => (アロー関数について、パラメーターが一つの場合は、括弧を省略できる、また、{}で囲って、returnする必要があるけれど、１行の分の場合、アロー関数だとreturnも{}もいらない)
var doubleNumber = function (num) { return num * 2; };
// これで型注釈をすることができる
// コールバック関数の型定義
function doubleAndHandle(num, cb) {
    var doubleNum = cb(num * 2);
    doubleNum;
    // console.log(num * 2);
}
doubleAndHandle(21, function (doubleNum) {
    return doubleNum;
});
var unknownInput;
var anyInput;
var text;
unknownInput = "hello";
unknownInput = 21;
unknownInput = true;
text = anyInput;
// 使う時は、typeofを使用して、使うこと
if (typeof unknownInput === "string") {
    text = unknownInput;
}
// anyに似ていてなんでも入れれるが、使うときに注意が必要
// 型が決まっているところに入れることはできない
// never型について
function error(message) {
    throw new Error(message);
}
console.log(error('This is an error'));
