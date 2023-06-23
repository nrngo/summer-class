# Хичээл №11: Javascript операторууд

### Арифметик үйлдлүүд

` x=3, y=2`

- x + y
- x - y
- x \* y
- x / y
- x % y
- x \*\* y
- x++, ++x => x = x + 1
- x--, --x => x = x - 1

### Assignment Operators

- x = x + 3 болон x += 3 адилхан
- x = x \* 3 болон x \*= 3 адилхан
  Бусад бүх арифметик үйлдлүүд адилхан үйлчилнэ

### Жиших үйлдлүүд (Comparison Operators)

`x = 3`

- x > 3 `=> false`
- x >= 3 `=> true`
- x < 3 `=> false`
- x <= 3 `=> true`
- x === 3 `=> true` (Төрөл + утга), x == 3 (Зөвхөн утга)
- x !== 3 `=> false`

#

- x === 3 (Төрөл + утга)
- x == 3 (Зөвхөн утга):

### Гурвалсан үйлдлүүд

```sh
let age = 16;
const isAdult = age >= 18 ? 'Насанд хүрсэн' : 'Насанд хүрээгүй';
// Үр дүн: 'Насанд хүрээгүй'
```

### Логик үйлдлүүд

- && : and буюу бүгд биелэж байх үед "үнэн"
- || : or буюу аль нэг нь л биелэх үед "үнэн"

```sh
const skills = {
 frontend: true,
 backend: true,
};
# Ажлын зар fullstack хөгжүүлэгч авна
let isFullstack = skills.frontend && skills.backend;
# Үгүйсгэл (!)
let notAccepted = !isFullstack

# frontend, backend хөгжүүлэгч авна:
let isDeveloper = skills.frontend || skills.backend;
let notAccepted = !isDeveloper
```

### Logical Operators with Non-booleans

```sh
false || true
false || 'text'
false || 1
```

### Exercise - Swapping Variables

- Жишээ 1: Tip Calculator: Гараас нийт тооцоо болон цайны мөнгийг хувиар өгнө. Нийт тооцоог бодож харуулна уу.
- Дасгал 1: Хувьсагчийн байрыг солих
- Дасгал 2: Өгөгдсөн илэрхийллийн утгыг ол. A=B\*C-D
  Нэг мөрөнд 3 бүхэл тоо нэг нэг зайгаар тусгаарлагдан өгөгдөнө.

- Дасгал 3: Гараас хоног, цаг өгсөн бол нийт цаг хэд вэ?
- Дасгал 4: Тонгорогсон тоо: Өгөгдсөн тооны тонгорогсон тоог ол.
  Input:
  1234
  Output:
  4321

```sh
<script>
     // Алхам 1
     let billAmount = prompt("Та тооцооны дүнг оруулна уу?: ₮");
     let tipPercentage = prompt(
       "Та өгөхийг хүсэж буй гарын мөнгөний (tip) хувь оруулна уу?: ₮"
     );

     // Алхам 2
     billAmount = parseFloat(billAmount);
     tipPercentage = parseFloat(tipPercentage);

     // Алхам 3
     let tipAmount = billAmount * (tipPercentage / 100);

     // Алхам 4
     let totalBill = billAmount + tipAmount;
     let result =
       "Таны нийт тооцоо (гарын мөнгө орсон): ₮" + totalBill.toFixed(2);
     // Алхам 5
     console.log(result);
     alert(result);
   </script>
```
