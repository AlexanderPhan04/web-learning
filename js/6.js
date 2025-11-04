/*
các kiểu dữ liệu nguyên thủy (primitive data types) trong JavaScript
- string: kiểu chuỗi dùng để lưu chuỗi kí tự ví dụ: let string = "String";
- number: kiểu số dùng để lưu số có thể là số nguyên hoặc số thực ví dụ: let soNguyen = 10; let soThuc = 3.14;
- boolean: kiểu luân lý chỉ có 2 giá trị true (đúng) hoặc false (sai) ví dụ: let isTrue = true; let isFalse = false;
- undefined: kiểu dữ liệu chưa được định nghĩa, tức là biến đã được khai báo nhưng chưa được gán giá trị ví dụ: let a; console.log(a);
- null: kiểu dữ liệu đặc biệt biểu thị giá trị rỗng hoặc không tồn tại ví dụ: let b = null; console.log(b);
- symbol: kiểu dữ liệu mới được giới thiệu trong ES6, dùng để tạo các giá trị duy nhất không thể bị trùng lặp
- bigint: kiểu dữ liệu mới trong ES2020 dùng để biểu diễn các số nguyên rất lớn vượt quá giới hạn của kiểu number
*/
// kiểu number
let soNguyen = 10;
let soThuc = 3.14;

// kiểu boolean
let check = true;

// kiểu undefined
let diemToan;

// kểu null;
let connect = null;

// xuất ra giá trị của biến
console.log(soNguyen);
console.log(soThuc);
console.log(typeof soNguyen);
console.log(typeof soThuc);
console.log(typeof check);
console.log(typeof diemToan);
console.log(typeof connect);

//  số nguyên an toàn tối đa
console.log(Number.MAX_SAFE_INTEGER);
// số nguyên an toàn tối thiểu
console.log(Number.MIN_SAFE_INTEGER);