/*
 * @Description: This file is made for
 * @Date: 2021-08-11 15:30:25
 * @LastEditTime: 2021-08-11 16:26:11
 * @Author: LeongD
 * @LastEditors: LeongD
 */

class ArrayList {
  // Step-1 定义引用属性【数组】
  constructor(public element: Array<object>) {}

  // step-2 索引查询指定元素
  get(index: number) {
    return this.element[index];
  }

  // Step-3 shows
  show() {
    this.element.forEach((ele) => {
      return ele;
    });
  }
  // Step-4 remove with overload
  remove(value: number): number;
  remove(value: object): object;
  remove(value: number | object): number | object {
    this.element = this.element.filter((ele, index) => {
      if (typeof value === "number") {
        return value !== index;
      } else {
        return value !== ele;
      }
    });
    return value;
  }
}

let stuOne = { name: "a1", age: 11 };
let stuTwo = { name: "a2", age: 12 };
let stuThree = { name: "a3", age: 13 };

let arr = new ArrayList([stuOne, stuTwo, stuThree]);

// console.log(`Arr`, arr.show());
// console.log(`remove`, arr.remove(2));
// console.log(`After-remove 2 `, arr )
// console.log(`remove stuTwo`, arr.remove(stuTwo));
let RemoveStuTwo = arr.remove(stuTwo);
console.log(`RemoveStuTwo Got`, RemoveStuTwo);
console.log(`After-remove stuTwo`, arr);
