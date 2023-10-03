"use strict";

const UserStorage = require("./UserStorage");

class User {
  constructor(body) {
    this.body = body;
  }

  login() {
    const body = this.body;
    const { id, password } = UserStorage.getUserInfo(body.id);
    if (id) {
      if (id === body.id && password === body.password) {
        return { success: true };
      }
      return {
        success: false,
        msg: "아이디혹은 비밀번호가 잘못 입력되었습니다.",
      };
    }
    return {
      success: false,
      msg: "존재하지 않는 정보입니다.",
    };
  }
}

module.exports = User;