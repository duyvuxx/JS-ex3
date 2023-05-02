// 1. Tạo object person gồm các thông tin sau: id,name,address,age,email. Tạo các getter, setter tương ứng với mỗi thuộc tính, Tạo 1 method để in ra toàn bộ thông tin của object

var person = {
  _id: null,
  _name: null,
  _address: null,
  _age: null,
  _email: null,

  get id() {
    return this._id;
  },
  set id(value) {
    this._id = value;
  },

  get name() {
    return this._name;
  },
  set name(value) {
    this._name = value;
  },

  get address() {
    return this._address;
  },

  set address(value) {
    this._address = value;
  },

  get age() {
    return this._age;
  },
  set age(value) {
    this._age = value;
  },

  get email() {
    return this._email;
  },
  set email(value) {
    this._email = value;
  },

  //   method
  printInfo: function () {
    console.log("ID:", this.id);
    console.log("Name:", this.name);
    console.log("Address:", this.address);
    console.log("Age:", this.age);
    console.log("Email:", this.email);
  },
};

person.id = 1;
person.name = "Khoa";
person.address = "SG";
person.age = 20;
person.email = "khoa@gmail.com";

// 2. Thêm key-value về github của bạn (github là một đối tượng gồm các thuộc tính: id, username, url) và mức lương mong muốn (number), cập nhật tên của bạn thành dạng rút gọn, ví dụ: "Dang Tran Quyen" => "Tran Quyen" || "Quyen Dang", xóa mức lương đó đi

person.github = {
  id: 1,
  username: "Lam Nguyen Thao Duy",
  url: "https://github.com/duyvuxx",
  salary: 2000,
};

person.github.username = person.github.username
  .split(" ")
  .reverse()
  .slice(0, 2)
  .join(" ");

delete person.github.salary;

console.log(`🚀 | myGithub:`, person);

// 3. Đóng băng 2 thuộc tính email và github (sử dụng defineProperties)

Object.defineProperties(person, {
  email: {
    writable: false,
  },
  github: {
    writable: false,
  },
});

// 4. Duyệt qua key-value của object bằng 2 cách (for/in || Object.entries)

// for/in
for (var key in person) {
  value = person[key];
  console.log(`${key}: ${value}`);
}

// Object.entries
// for (var [key, value] of Object.entries(person)) {
//   console.log(`${key}: ${value}`);
// }

// 5. Thêm một phương thức để lấy ra thông tin github (return), Cho object salary, hãy gộp nó vào object ban đầu

Object.defineProperty(person, "getGithub", {
  value: function () {
    return this.github;
  },
});

var salary = {
  usd: 2000,
  vnd: 40 + "mils",
};

Object.assign(person, salary);

console.log(person);
