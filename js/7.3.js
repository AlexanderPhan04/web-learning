// Quy tắc thứ tự ưu tiên 
// 1. Dấu ngoặc đơn ()
let diemToan = 8;
let diemVan = 7;

let dtb = (diemToan + diemVan) / 2;
console.log("Điểm trung bình: " + dtb);

// 2. Toán tử truy cập / hàm gọi (Access & Call)
/*
object.property - truy cập thuộc tính 
object[property] - truy cập động 
object?.property - truy cập an toàn 
myFunction() - gọi hàm 
new MyClass() - tạo đối tượng 
*/ 

// 2.1 object.property - truy cập thuộc tính 
/*
Tên chuyên ngành: Dot notation (member access operator)
Giải thích:
- Dùng để truy cập trực tiếp một thuộc tính (property) hoặc phương thức (method) của một đối tượng (object)
- Tên thuộc tính phải là tên hợp lệ (chữ, số, _, $, không có khoảng trắng)
Cấu trúc:
object.property
*/ 
// Ví dụ:
const person = {
    name: "Quan",
    age: 21,
    greet: function() {
        console.log("Xin chào, tôi là " + this.name);
    }
};
console.log(person.name); // Truy cập thuộc tính name
person.greet(); // Gọi phương thức greet
/*
Phân tích:
- person.name dùng dot notation để truy cập trực tiếp thuộc tính name.
- person.greet() gọi phương thức greet của đối tượng (object) person
*/ 

// 2.2 object[property] - truy cập động
/*
Tên chuyên ngành: Computed property access hoặc Bracket notation
Giải thích:
- Dùng để tên thuộc tính là biến hoặc không hợp lệ để dùng dấu chấm
- Cho phép truy cập thuộc tính bằng chuỗi (string) hoặc biểu thức (expression)
Cấu trúc:
object["propertyName"]
object[expession]
*/ 
// Ví dụ:
const key = "age";
const person2 = { name: "Quan", age: 21 };

console.log(person2["name"]); // Truy cập thuộc tính name
console.log(person2[key]); // Truy cập thuộc tính age thông qua biến key
/*
Phân tích:
- person2["name"] tương đương person2.name
- person2[key] cho phép sử dụng biến key thay cho tên thuộc tính
*/ 
/*
Khi nào dùng:
Khi tên thuộc tính có khoảng trắng, ký tự đặc biệt, hoặc xác định động (runtime)
*/ 
// Ví dụ:
const data = { "full name": "Quan Phan" };
console.log(data["full name"]); // Ok
// data.full name; // Lỗi vì có khoảng trắng

// 2.3 object?.property - truy cập an toàn
/*
Tên chuyên ngành: Optional chaining operator
Giải thích:
- Giúp truy cập an toàn vào thuộc tính hoặc phương thức, không gây lỗi nếu đối tượng (object) là NULL hoặc undefined
- Nếu đối tượng (object) không tồn tại -> trả về undefined thay vì báo lỗi
Cấu trúc:
object?.property
object?.[property]
object?.method()
*/ 
// Ví dụ:
const user = null;

// console.log(user.name); // lỗi vì user là null
console.log(user?.name); // undefined, không lỗi
/*
Phân tích:
- user?.name sẽ ngừng truy cập ngay nếu user là null hoặc undefined
- Trả về undefined mà không ném lỗi
- Dùng nhiều trong API hoặc dữ liệu từ server (nơi không đủ thông tin)
*/ 

// 2.4 myFunction() - gọi hàm
/*
Tên chuyên ngành: Function call operator
Giải thích:
- Dùng để gọi thực thi hàm (invoke a function)
- Có thể chuyền đối số (arguments) trong cặp ngoặc tròn ()
Cấu trúc:
functionName(argument1, argument2, ...)
*/ 
// Ví dụ:
function greet(name) {
    return "Xin chào, " + name;
}
console.log(greet("Quan"));
/*
Phân tích:
- greet là tên hàm (function)
- greet("Quan") là gọi hàm (function call) - toán tử () kích hoạt được thực thi
Cũng dùng được cho arrow function:
const add = (a, b) => a + b;
console.log(add(2, 3)); // 5
*/ 

// 2.5 new MyClass() - tạo đối tượng
/*
Tên chuyên ngành: Object instantiation operator
Giải thích:
- Dùng để tạo đối tượng (instance) mới từ hàm tạo (constructor function) hoặc lớp (class)
- new là 1 toán tử đặc biệt: nó
+ Tạo obbject trống {}
+ Gán this trong hàm = object đó
+ Trả về object mới
Cấu trúc:
new Constructor(argument1, argument2, ...)
*/ 
// Ví dụ:
function Person(name, age) {
    this.name = name;
    this.age = age;
}
const p1 = new Person("Quan", 21);
console.log(p1.name); // Quan
// hoặc dùng class
class Student {
    constructor(name) {
        this.name = name;
    }
}

const s1 = new Student("Yi Lang");
console.log(s1.name); // Yi Lang
/*
Phân tích:
- new Person("Quan") tạo một insrance mới của Person
- Nếu bỏ new, this không được gán đúng -> lỗi logic
*/ 

// Tổng kết nhanh:
// obj.prop        → Truy cập trực tiếp (dot notation)
// obj[prop]       → Truy cập động (bracket notation)
// obj?.prop       → Truy cập an toàn (optional chaining)
// func()          → Gọi hàm (function call)
// new Class()     → Tạo đối tượng mới (object instantiation)
