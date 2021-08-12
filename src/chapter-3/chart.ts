/*
 * @Description: This file is made for
 * @Date: 2021-08-11 19:07:30
 * @LastEditTime: 2021-08-12 11:29:54
 * @Author: LeongD
 * @LastEditors: LeongD
 */
type type_charParam = {
  width?: number;
  height?: number;
  radius?: number;
};

class Square {
  public width: number;
  public height: number;

  constructor(width_: number, height_: number);
  constructor(value: type_charParam);
  constructor(paramObjOrWidth_: any, height_: number = 0) {
    if (typeof paramObjOrWidth_ === "object") {
      this.width = paramObjOrWidth_.width;
      this.height = paramObjOrWidth_.height;
    } else {
      this.width = paramObjOrWidth_;
      this.height = height_;
    }
  }

  public getArea(): number {
    return this.width * this.height;
  }
}

let square1 = new Square(4, 5);
console.log(`square1`, square1.getArea());

let squareObj100 = { width: 5, height: 20 };

let square2 = new Square(squareObj100);
console.log(`square2`, square2.getArea());
