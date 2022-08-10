// ----------------------------------------------------------
// একটা ফাংশন লিখবা যেটা ১৩ এর নামতা (multiplication table) আউটপুট হিসেবে দেখাবে।

let table = function (number, counter) {
  let count;
  for (let i = 1; i <= counter; i++) {
    count = number * i;
    console.log(`${number} X ${i} = ${count}`);
  }
};
// table(13, 10);
// ----------------------------------------------------------

// ২. একটা ফাংশন লিখবা যেটা যেকোন নামকে uppercase বা রেগুলার কেইস হিসেবে নিবে আর আউটপুট হিসেবে সেই নাম lowercase করে রিটার্ন করবে।
let toLowercaseFunc = function (name) {
  if (typeof name === typeof "") {
    return name.toLowerCase();
  } else {
    return "only string accepted";
  }
};
// console.log(toLowercaseFunc("TAIYEB"));

// ----------------------------------------------------------
// ৩. fullName নামে একটা ফাংশন তৈরী কর যেটা তোমার নামের প্রথম অংশ এবং তোমার নামের শেষের অংশ প্যারামিটার হিসেবে নিবে। আর তোমার নামের দুই অংশ জোড়া দিয়ে আউটপুট হিসেবে তোমার পূর্ন নাম রিটার্ন করে দিবে। যেমন ধরো, hablu এবং kanto ইনপুট প্যারামিটার হিসেবে দিলে আউটপুট হিসেবে hablu kanto রিটার্ন করবে।

let fullName = function (firstName, LastName) {
  firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
  LastName = LastName.charAt(0).toUpperCase() + LastName.slice(1);

  return firstName.concat(" ", LastName);
};
// console.log(fullName("taiyeb", "nirjhor"));

// ----------------------------------------------------------
// ৪. একটা ফাংশন লিখবা যেটাকে তুমি কোন সংখ্যাকে ইনপুট হিসেবে দিলে সে সেই সংখ্যার square করে সেই square কে রিটার্ন করবে। অর্থাৎ তুমি ইনপুট হিসেবে 5 দিলে সেটাতে স্কয়ারে হিসেবে 25 আউটপুট হিসেবে পাবে।

let square = function (input = 5) {
  return input * input;
};
// console.log(square(6));
// —----------

// Extra

// —--------------

/*** ৫) pizza নামের একটা object কে নিচের উদাহরণ মতো define করবা :
 const pizza = {
 toppings: ['cheese', 'sauce', 'pepperoni'],
 crust: 'deep dish',
 serves: 2
 }
 এবং pepperoni প্রিন্ট করবা।
**/

const pizza = {
  toppings: ["cheese", "sauce", "pepperoni"],
  crust: "deep dish",
  serves: 2,
};

// console.log(pizza.toppings[2]);

// *********************************************************

// More tasks:
// ----------------------------------------------------------
// 1. Write a function called foo() which prints “foo” and a function called bar() which prints“bar”. Call function bar() in the foo() function after printing. What will be the output? Now call the foo() to see the output.

let foo = function () {
  console.log("foo");
  bar();
};
let bar = function () {
  console.log("bar");
};
// foo();
// ----------------------------------------------------------
// 2. Write a function called make_avg() which will take an three integers and return the average of those values.
let make_avg = function (a, b, c) {
  let avg = (a + b + c) / arguments.length;
  return avg;
};
console.log(make_avg(1, 2, 3));
// ----------------------------------------------------------
// 3. Challenging: Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
let makeArrAvg = function (arr) {
  let length = arr.length;
  let sum = arr.reduce(function (total, value) {
    return total + value;
  });
  return sum / length;
};

console.log(makeArrAvg([1, 2, 3, 4, 5, 6]));

// ----------------------------------------------------------
// 4. Write a function called odd_even() which takes an integer value and tells whether this
//    value is even or odd. You need to do it in 4 ways:
//    ● Has return + Has parameter
//    ● No return + Has parameter
// ----------------------------------------------------------
// 5. You are in a hurry to go to your school on time. But when you are crossing the road, the
//    traffic signal is red coloured. In this situation, if you try to cross the road, you may be in
//    danger.If you notice a yellow coloured traffic signal, you should stop. If you notice a green
//    coloured traffic signal, you should cross the road. So write a JS code, where there is a
//    variable called signal. Its value can be green, yellow
