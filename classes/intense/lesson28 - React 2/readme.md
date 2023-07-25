## React апп хийхэд шаардлагатай JS ээ эргэн сэргээцгээе

1. let / const
2. Objects:

```sh
const car = {
  brand:'Toyota',
  name: 'Prius',
  price: 2000000,
  stop: ()=>{},
  move: ()=>{},
}

car.move();
car.stop();
console.log(car.price);
car.price = 1000000
console.log(car["price"]);

```

3. Arrow functions: ()=>{}
4. Array map давталт: [].map()
5. Object Destructure

```sh
const car = {
  brand:'Toyota',
  name: 'Prius',
  price: 2000000,
  stop: ()=>{},
  move: ()=>{},
}
# const brand = car.brand;
# const name = car.name;
# const price = car.price;

const {brand, name, price} = car
```

6. Spread operator

```sh
const numbers1 = [1,2,3]
const numbers2 = [4,5,6]

# const combined = numbers1.concat(numbers2)
const combined = [...numbers1,...numbers2]

// Object

const obj1 = {
  name: 'Bayasgalan',
}
const obj2 = {
  gender: 'Male',
}
const obj = {...obj1, ...obj2}
```

7. Modules:
   JavaScript дахь модулиуд нь кодыг салангид, дахин ашиглах боломжтой бүрэлдэхүүн хэсгүүд болгон зохион байгуулах арга юм. Эдгээр нь их хэмжээтэй кодыг жижиг, илүү удирдах боломжтой хэсгүүдэд хуваахад тусалдаг бөгөөд энэ нь төслүүд дээр хамтран ажиллахад хялбар болгодог.

- export: Энэ түлхүүр үг нь функц, объект эсвэл хувьсагчийг бусад js файлд ашиглах боломтой болгоход ашиглагддаг.

  - export нь дотроо 2 төрөл байдаг:

        1. Named Exports:

        ```sh
        // functions.js
        export const add = (a, b) =>{
          return a + b;
        }
        export const subtract = (a, b) => {
          return a - b;
        }

        ```

        - import хийх: Энэ түлхүүр үг нь функц, объект эсвэл хувьсагчийг оруулж ирж ашиглах боломжийг олгоно.

        ```sh
        // main.js
        import { add, subtract } from './functions.js';

        console.log(add(2, 3)); // Output: 5
        console.log(subtract(5, 2)); // Output: 3
        ```

        2. Default Export:

        ```sh
        // functions.js
        const sumFunction = (a, b) =>{
          return a + b;
        }
        // Экспорт хийх
        export default sumFunction;


        // main.js
        // Импорт хийх
        import sumFunction from './functions.js';
        sumFunction(); // Функцийг дуудах

## Даалгавар

1. Дараах холбоос дээрхи датаг ашиглан зурагны жагсаалтыг дэлгэцэнд харуулна уу. Photo нэртэй компонент үүсгэж ашиглана

- Дата: https://jsonplaceholder.typicode.com/photos
