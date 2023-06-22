# Хичээл №10

## Хичээлийн бичлэг:

https://youtu.be/vAsq_VNXoyY

## Javascript basics

- Js introduction
- Js in Browser
- Seperation concert
- Variables
- Constant
- Primitive types
- Dynamic types
- Object
- Array
- Functions
- Function types

## Media query

- Mobile first
- Desktop first

### Syntax:

- Дэлгэцний хэмжээ > 480px үед ажиллана
  `@media screen and (min-width: 480px) {
body {
background-color: lightgreen;
}
}`
- Дэлгэцний хэмжээ < 480px үед ажиллана
  `@media screen and (max-width: 480px) {
body {
background-color: lightgreen;
}
}`

### Typical Device Breakpoints

#### Extra small devices (phones, 600px and down) \_/

- @media only screen and (max-width: 600px) {...}

#### Small devices (portrait tablets and large phones, 600px and up) \_/

- @media only screen and (min-width: 600px) {...}

#### Medium devices (landscape tablets, 768px and up) \_/

- @media only screen and (min-width: 768px) {...}

#### Large devices (laptops/desktops, 992px and up) \_/

- @media only screen and (min-width: 992px) {...}

#### Extra large devices (large laptops and desktops, 1200px and up) \_/

- @media only screen and (min-width: 1200px) {...}
