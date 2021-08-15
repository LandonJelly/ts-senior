/*
 * @Description: This file is made for
 * @Date: 2021-08-11 19:07:30
 * @LastEditTime: 2021-08-13 10:13:41
 * @Author: LeongD
 * @LastEditors: LeongD
 */
type type_charParam = {
  width?: number;
  height?: number;
  radius?: number;
};

class Square{
  public width: number;
  public height?: number;

  constructor(width_: number, height_: number);
  constructor(value: type_charParam);
  constructor(paramObjOrWidth_: any, height_?: number) {
    if (typeof paramObjOrWidth_ === "object") {
      this.width = paramObjOrWidth_.width;
      this.height = paramObjOrWidth_.height;
    } else {
      this.width = paramObjOrWidth_;
      this.height = height_;
    }
  }

  public getArea(): number {
    return this.width * this.height!; // Non-null assertion operator
  }
}

let square1 = new Square(4, 5);
console.log(`square1`, square1.getArea());

let squareObj500 = { width: 5, height: 100 };
let squareObjOnlyWidth = { width: 5 };

let square500 = new Square(squareObj500);
let ErrorOne = new Square(squareObjOnlyWidth);
console.log(`square-500`, square500.getArea());
console.log(`square-Error`, ErrorOne.getArea());


// export {}
