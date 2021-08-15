/*
 * @Description: This file is made for
 * @Date: 2021-08-12 15:54:36
 * @LastEditTime: 2021-08-12 16:14:07
 * @Author: LeongD
 * @LastEditors: LeongD
 */

export default class MyLocalStorage {
  public setItem(key: string, value: any) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  public getItem(key: string) {
    let value = localStorage.getItem(key);
    return value != null ? JSON.parse(value) : null;
  }
}
