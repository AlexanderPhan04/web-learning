/*
1. Các phép toán cơ bản

| Ký hiệu toán học | Tên gọi                    | Viết trong code (JavaScript) |
|------------------|----------------------------|-------------------------------|
| +                | Cộng                       | +                             |
| -                | Trừ                        | -                             |
| × hoặc *         | Nhân                       | *                             |
| ÷ hoặc /         | Chia                       | /                             |
| %                | Phần dư (modulo)           | %                             |
| ^ (ký hiệu toán) | Lũy thừa (ký hiệu toán học) | ** (ES6, exponentiation)      |
| √                | Căn bậc hai                | Math.sqrt(x)                  |

2. Toán tử so sánh

| Ký hiệu toán học | Tên gọi                | Viết trong code (JavaScript) |
|------------------|------------------------|-------------------------------|
| =                | Gán giá trị             | = (assignment)                |
| ==               | So sánh bằng (lỏng)    | ==                            |
| ===              | So sánh bằng (chặt)    | ===                           |
| !=               | Khác (lỏng)            | !=                            |
| !==              | Khác (chặt)            | !==                           |
| >                | Lớn hơn                | >                             |
| <                | Nhỏ hơn                | <                             |
| >=               | Lớn hơn hoặc bằng      | >=                            |
| <=               | Nhỏ hơn hoặc bằng      | <=                            |

3. Toán tử logic

| Ký hiệu toán học | Tên gọi       | Viết trong code (JavaScript) |
|------------------|---------------|-------------------------------|
| ∧                | Và (AND)      | &&                            |
| ∨                | Hoặc (OR)     | ||                            |
| ¬                | Phủ định (NOT)| !                             |

4. Toán tử gán kết hợp

| Ký hiệu | Tên gọi             | Viết trong code |
|---------|---------------------|------------------|
| +=      | Cộng và gán         | +=               |
| -=      | Trừ và gán          | -=               |
| *=      | Nhân và gán         | *=               |
| /=      | Chia và gán         | /=               |
| %=      | Phần dư và gán      | %=               |

5. Một số ký hiệu toán học và hàm có sẵn

| Ký hiệu/hàm      | Tên gọi                  | Viết trong code (JavaScript)    |
|------------------|--------------------------|----------------------------------|
| pi               | Số pi                    | Math.PI                          |
| e                | Số e                     | Math.E                           |
| sin(x)           | Hàm sin                  | Math.sin(x)                      |
| cos(x)           | Hàm cos                  | Math.cos(x)                      |
| tan(x)           | Hàm tan                  | Math.tan(x)                      |
| log(x)           | Logarit tự nhiên (ln)    | Math.log(x)                      |
| log10(x)         | Logarit cơ số 10         | Math.log10 ? Math.log10(x) : Math.log(x) / Math.LN10 |

6. Ví dụ biểu thức logic

| Biểu thức toán học | Ý nghĩa                | Viết trong code (JavaScript)          |
|--------------------|------------------------|----------------------------------------|
| x > 0 ∧ y > 0      | x và y đều dương      | (x > 0) && (y > 0)                     |
| x > 0 ∨ y > 0      | x hoặc y dương        | (x > 0) || (y > 0)                     |
| ¬(x > 0)           | x không dương         | !(x > 0)                               |

7. Toán tử đặc biệt

| Ký hiệu | Tên gọi                  | Viết trong code (JavaScript)                         |
|---------|--------------------------|------------------------------------------------------|
| ++      | Tăng 1 đơn vị            | ++                                                   |
| --      | Giảm 1 đơn vị            | --                                                   |
| ? :     | Toán tử điều kiện (ternary)| condition ? valueIfTrue : valueIfFalse               |

Chú thích:
- Trong JavaScript, dấu ^ không phải là toán tử lũy thừa (nó là XOR bitwise). Dùng ** hoặc Math.pow() cho lũy thừa.
- Math.log10() có thể không khả dụng trong môi trường quá cũ; thay bằng Math.log(x)/Math.LN10 nếu cần tương thích.
*/
let a = 5;
let b = 2;

let tong = a + b;
let hieu = a - b;
let tich = a * b;
let thuong = a/b;
let soDu = a % b;

console.log("Tổng: " + tong);
console.log("Hiệu: " + hieu);
console.log("Tích: " + tich);
console.log("Thương: " + thuong);
console.log("Số dư: " + soDu);