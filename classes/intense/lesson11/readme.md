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

- x > 3 `=> true`
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
 frontend: true;
 backend: true;
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

- Swap variables

- Exercise: Tip Calculator

Create a JavaScript program that calculates the total bill amount, including the tip, based on user input. The program should prompt the user to enter the bill amount and the desired tip percentage. It should then calculate and display the total bill, including the tip.

Here's a step-by-step guide to help you get started:

Start by creating a new HTML file and include a script tag within the <body> section.

Inside the script tag, begin by prompting the user to enter the bill amount using the prompt() function. Store the input value in a variable.

Next, use another prompt() function to ask the user to enter the desired tip percentage. Again, store the input value in a separate variable.

Convert the bill amount and tip percentage from strings to numbers using the parseFloat() function.

Calculate the tip amount by multiplying the bill amount by the tip percentage divided by 100. Store the result in a variable.

Calculate the total bill by adding the bill amount and the tip amount. Store the result in another variable.

Use console.log() to display the total bill, including the tip, to the user.

Test your program by opening the HTML file in a web browser and entering different bill amounts and tip percentages.

Here's an example of what the JavaScript code for this exercise could look like:

javascript

<script>
  // Step 1
  let billAmount = prompt("Enter the bill amount:");
  let tipPercentage = prompt("Enter the desired tip percentage:");

  // Step 2
  billAmount = parseFloat(billAmount);
  tipPercentage = parseFloat(tipPercentage);

  // Step 3
  let tipAmount = billAmount * (tipPercentage / 100);

  // Step 4
  let totalBill = billAmount + tipAmount;

  // Step 5
  console.log("Total bill (including tip): $" + totalBill.toFixed(2));
</script>
