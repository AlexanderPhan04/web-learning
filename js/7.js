// cách xuất dữ liệu với biến trong JavaScript
let soA = 25;
let soB = 5;

// Cách 1: tên cách này là nối chuỗi (string concatenation)
console.log("Căn bậc 2 của " + soA + " là: " + soB);
// cách 2: sử dụng dấu phẩy
console.log("Căn bậc 2 của", soA, "là:", soB);
// cách 3: sử dụng template literals (dùng dấu ` thay vì dấu " hoặc ')
console.log(`Căn bậc 2 của ${soA} là: ${soB}`);
// cách 4: sử dụng định dạng chuỗi giống như trong C/C++
console.log(` Căn bậc 2 của %s là: %s`, soA, soB);

// khai báo nhiều biến liên tiếp
let a = 4,
    b = 3,
    kq = a * b;
console.log("kết quả của phép nhân là: " + kq);
console.log("kết quả của phép nhân là:", kq);
console.log(`kết quả của phép nhân là: ${kq}`);
console.log(`kết quả của phép nhân là: %s`, kq);