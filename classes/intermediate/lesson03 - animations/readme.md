# Хичээлийн бичлэг:

## https://youtu.be/Vocn61Z4gZ0

# Хичээлийн сэдвүүд

## Transformations 2D/3D

### rotate() - Тэнхлэгээр эргүүлэх

- transform: rotate(90deg) rotate(-90deg)

### scale() - Томруулах эсвэл жижигрүүлэх

- transform: scale(0.5) scale(1.5)

### skew() - Хазайлгана

- transform: skew(90deg) - Зүүн талруу хазайлгана
- transform: skew(-90deg) - Баруун талруу хазайлгана

### translate() - Байрлалыг x,y,z тэнхлэгт хөдөлгөнө

- transform: translate(10px) - Хэвтээ тэнхлэгийн дагуу хөдлөнө
- transform: translate(10px, 10px) - Босоо тэнхлэгийн дагуу баруун тийш

- transform: scale(1.5) translateX(10px) - Хамт хэрэглэх боломжтой

### 3D

- transform: perspective: 200px translateZ(-50px) - perspective z тэнхлэг болон хэрэглэгч хоорондын зай, translateZ z тэнхлэгийн дагуу хөдлөх хэмжүүр

- transform: perspective: 200px rotateY(-50px)

## Transitions

### transform: (duration, timing type, delay)

- transition: transform 0.5s - Өөрчлөгдөх хугацаа
- transition: transform 0.5s ease-in - Өөрчлөгдөх хугацаа,
- transition: transform 0.5s ease-in 1s - Өөрчлөгдөх хугацаа,

- transition: transform 0.5s, background 1s - Өөрчлөгдөх хугацаа, өөрчлөгдөх утга property утга

- linear
- ease-in
- ease-out
- cubic-bezier

## Animation сангууд:

### animate.style | aos animation

# Дасгал

![Alt text](image.png)
