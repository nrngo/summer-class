# Array буюу Массивтай ажиллах нь

### 1. Массиваар давтах:

- for-of - массивийн элемент тус бүрээр давтах:
  const numbers = [1,2,3,4,5]
  ```sh
    for((let number of numbers))
    {
      console.log('number=',number);
    }
  ```
- forEach - Массив хувьсанг бүрт байдаг function бөгөөд, мөн адил элемент бүрээр давтана

  ```sh
  numbers.forEach((element) => {
    console.log('number=',element);
  });
  ```

### 2. Массив элементүүдийг array => string (join), string => array (split)

- [1,2,3].join('-') - массив дахь бүх элементүүдийг нэгтгэн string үүсгэж, буцаана.
  Үр дүн: 1-2-3
- "Hello world".split(' ') - string текст-г салгаж массив болгох. Энэ тохиолдолд ' ' буюу хоосон зайгаар текстийг салгаж массив болгосон байна.
  Үр дүн: ['Hello','world']

- "Hello world".split(' ').join('-') (Slug)
  Үр дүн: Hello-world

### 3. Массивыг эрэмбэлэх

- Массивыг эрэмбэлэх

```sh
 const numbers = [4,3,2,1];
 numbers.sort()
 // numbers: [1,2,3,4]

```

- Object төрлийн элемент агуулсан массивыг эрэмбэлэх: Эрэмбэлэх дарааллыг тодорхойлдог функц. Функц a,b гэсэн 2 утга байх бөгөөд

1. a > b => Эерэг утга буцаана
2. a < b => Хасах утга буцаана
3. a === b => 0

```sh
const handleCompare =  (a,b) =>
  {
    if (a.point > b.point) return 1;
    if (a.point < b.point) return -1;
    return 0;
  }
```

```sh
  const lessons = [
       {name:'Монгол хэл',point: 95}
       {name:'Англи хэл',point: 90},
       {name:'Математик',point: 100},
  ]
  # Шалгах нөхцөлийг тодорхойлж өгсөн функц дамжуулах
  const handleCompare =  (a,b) =>
  {
    return b.point - a.point
  }
  lessons.sort(handleCompare)
  // lessons:
  // {name:'Математик',point: 100},
  // {name:'Англи хэл',point: 90},
  // {name:'Монгол хэл',point: 95}

```

### 4. Массивын бүх элементийг шалгах: every, some

- Бүх элемент эерэг байгаа эсэх:

```sh
  [1,2,3].every(value =>{
    return value >=0
  })
  // Үр дүн: true
  [1,-2,3].every(value =>{
    return value >=0
  })
  // Үр дүн: false
```

- Ядаж 1 элемент эерэг байгаа эсэх:

```sh
  [1,-2,-3].some(value =>{
    return value >=0
  })
  // Үр дүн: true
  [-1,-2,-3].every(value =>{
    return value >=0
  })
  // Үр дүн: false
```

### 5. Массиваас шүүлт хийх: filter

- Эерэг элементүүдийг шүүж авах:

```sh
  [1,-2,3,-4].filter(value =>{
    return value >=0
  })
  // Үр дүн: [1,3]
  [1,-2,3].every(value =>{
    return value >=0
  })
  // Үр дүн: false
```
