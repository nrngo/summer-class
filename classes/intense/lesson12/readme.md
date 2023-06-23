# Хичээл №12: Javascript операторууд

### if else

```sh
if(condition_1)
    console.log('condition_1 биелэх үед');
else if(condition_2){
    console.log('condition_2 биелэх үед.');
    ...
}
else
    console.log('Өмнөх нөхцөлүүд биелэхгүй үед ажиллана.');
```

Жишээ 1: Тухайн цагаас хамаарч мэнд мэдэх нөхцөл шалгах

### switch case

- case
- break
- default

```sh
switch () {
    case condition_1:
        console.log('condition_1 биелэх үед');
        break;

    default:
        console.log('Өмнөх нөхцөлүүд биелэхгүй үед ажиллана.');
        break;
}
```

// Prompt the user to enter a fruit
let fruit = prompt("Enter a fruit:");

// Convert the input to lowercase for case insensitivity
fruit = fruit.toLowerCase();

// Evaluate the input using a switch case statement
switch (fruit) {
case "apple":
console.log("Apples are crunchy and delicious.");
break;
case "banana":
console.log("Bananas are a great source of potassium.");
break;
case "orange":
console.log("Oranges are refreshing and packed with vitamin C.");
break;
case "strawberry":
console.log("Strawberries are sweet and perfect for desserts.");
break;
default:
console.log("That's an interesting fruit choice!");
break;
}

### Давталт

- For давталт

```sh
for (let i = 0; i <= 10; i++) {
    # 1. i = 0
    # 2. i < 10 байна уу шалгаад худлаа бол үргэлжилнэ
    # 3. i++ буюу i утга нэмэгдүүлээд дараагийн алхамд шилжинэ
    console.log("Давталт №", i);
}
#
```

- While давталт - 'while' доторхи нөхцөл биелэхгүй байх хүртэл ажиллана

```sh
let i;
while (i <= 10) {
    if(i % 2 === 0) console.log(i);
    i++;
}
```

- Do...while давталт - Эхлээд 'do' доторхи үйлдэл ажлаад дараа нь 'while' нөхцөл биелэж байна уу шалгана

```sh
let i =0;
do {
    if(i % 2 === 0) console.log(i);
    i++;
} while (i<= 10);
```

- Хязгааргүй давталт

```sh
  for(let i=0; true; i++) {}
  while(true){}
  do{} while(true)

  let i =0;
  while (i <= 10) {
    if(i % 2 === 0) console.log(i);
  }

```

- For...in давталт: Тухайн object болон array-ийн properties (key, index)-р давтана

```sh
const fresh_meat = {
    name: "Үхрийн мах",
    price: 20000,
    protein: '26 грам'
}

for (const key in fresh_meat) {
      console.log(key, fresh_meat[key]);
}
const fruits = ['Алим','Банана','Киви'];
for (const key in fruits) {
    # ?
    console.log(key);
}

```

- For...of болон forEach: Тухайн object болон array-ийн утгуудаар нь давтана

```sh
for (const fruit of fruits) {
    # ?
    console.log(key);
}

fruits.forEach(fruit => {

});

```

- Break and Continue:

```sh
for (let i = 0; i <= 5; i++) {
    # if(i % 2 === 0) break;
    # if(i % 2 === 0)
    # {
    #     console.log(i);
    #     continue;
    # }
}
```

Exercise 1- Max of Two Numbers
Exercise 2- Landscape or Portrait
Exercise 3- FizzBuzz
Exercise 4- Demerit Points
Exercise 5- Even and Odd Numbers
Exercise 6- Count Truthy
Exercise 7- String Properties
Exercise 8- Sum of Multiples of 3 and 5
Exercise 9- Grade
Exercise 10- Stars
Exercise- Prime Numbers
