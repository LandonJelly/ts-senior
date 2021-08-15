/*
 * @Description: This file is made for
 * @Date: 2021-08-12 16:14:59
 * @LastEditTime: 2021-08-12 16:24:57
 * @Author: LeongD
 * @LastEditors: LeongD
 */

import MyLocalStorage from "./MyLocalStorage";

let localStorage1 = new MyLocalStorage();
let localStorage2 = new MyLocalStorage();

let testObj = {
  a: 12,
  b: 13,
};

localStorage1.setItem("item1", 2);
localStorage1.setItem("itemObj", testObj);

let getItem2 = localStorage2.getItem("item1");
let getItemObj = localStorage2.getItem("itemObj");

console.log(`getItem2`, getItem2);
console.log(`getItemObj`, getItemObj);
 