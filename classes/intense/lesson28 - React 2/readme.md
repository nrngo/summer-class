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

3. Arrow functions
4. Array map давталт
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

7. Modules
8. Named and Default
