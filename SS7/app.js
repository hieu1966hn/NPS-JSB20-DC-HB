// Tại sao js được gọi là ngôn ngữ lập trình mà HTML/CSS không phải nn lập trình
/*
- JS: có xử lý logic: 
- JS có nhiều kiểu dữ liệu khác nhau

*/


/*
1. Kiểu dữ liệu cơ bản
2. Toán tử
3. Câu điều kiện
6. Function

Advanced
4. Loop
5. Array/Object

*/


/*
Kiểu dữ liệu cơ bản: 
1. Number: 1,3,5, 3.5, ..... 
2. Boolean: 1>2, 2<1 => true/false
3. String: 'Đây là chuỗi', "Đây là chuỗi 2", `Đây là chuỗi 3`
4. Null: null
5. undefinded: khi khai báo biến
6. Object: Đối tượng {key: value;}

Khai báo biến: Tại sao cần biến? Biến dùng để làm gì?
- Biến dùng để lưu trữ giá trị
- Vì chúng ta có thể tái sử dụng nó.
* Cú pháp khai báo biến: let/var/const => chỉ dùng let/const
- let: khai báo biến bình thường (Có thể thay đổi được giá trị với phép toán gán =)
- const: khai báo biến hằng số => không thay đổi được

*/

// let a; // kiểu dữ liệu mặc định là undefinded
let a = 123; // 123
a = 321; // 321 - Number
let b = "123"// kiểu dữ liệu gì? String

// VD về const
const PI = 3.14;


///////// Toán tử so sánh: >,<,>=,<=, ==, ===
// in ra màn hình console
console.log(1 == "1"); // true vì: == chỉ so sánh về giá trị
console.log(1 === "1"); // false vì: === so sánh về giá trị và kiểu dữ liệu



// Câu điều kiện
/*
Cú pháp: 
if(điều kiện: true/false){
  // Điều kiện đúng => thực hiện câu lệnh trong này...
}
else{
  // Điều kiện sai => thực hiện câu lệnh trong này...
}
*/

// if (2 < 1) {
//   console.log("Đúng");
// }
// else{
//   console.log("Sai");
// }

/*
Toán tử logic: 
- &&: Tất cả điều kiện phải đúng
- ||: Chỉ cần 1 điều kiện đúng
*/


/*
Bài toán: Kiểm tra điều kiện dầu vào học sinh và xếp loại học lực như sau
+ 10  -> 8.5: Giỏi
+ 8.5 -> 6.5: Khá
+ 6.5 -> 5.0: Trung bình 
+ 5.0 -> 3.0: Kém
+ 3.0 -> 0: Liệt
*/

let diem = 8.9; // có thể thay đổi để test thuật toán
if (diem <= 10 && diem >= 8.5) { // Cả 2 điều kiện đồng thời đúng
  console.log("Giỏi");
}



