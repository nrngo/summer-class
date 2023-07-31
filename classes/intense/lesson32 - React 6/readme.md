# Давтлага хичээл

# Дасгал хийж үзүүлсэн код: https://github.com/Codely-academy/React-lesson

- Counter буюу тоолуур:
  Доорхи зурган дээрхи шиг Increment - Тоог 1 ээр нэмэгдүүлдэг, Decrement - Тоог 1 ээр хорогдуулдаг, Reset - Тоог анхны буюу 0 утгатай болгодог 3 товчноос бүрдэх counter component хийнэ үү.

  ![Alt text](image.png)

- BMI (Body mass index) буюу биеийн массийн индекс харуулдаг апп хийцгээе.
  ![Alt text](image-2.png)

  ![Alt text](image-3.png)

- Цаг агаар харуулдаг апп:
  Улаанбаатар, Эрдэнэт, Дархан хотуудын 5 хоногийн урьдчилсан мэдээллийг агуулсан дата (tsag-agaar-aimag-sum.js) өгөгдсөн бөгөөд тухайн хотыг сонгохоор 5 хоногийн цаг агаар мэдээлийг жагсааж харуулах дэлгэц хийнэ үү.

  ![Alt text](image-4.png)

## Props:

- Properties буюу props нь компонентийн гаднаас авч буй оролтын утга юм.
- Компонентруу props-р дамжуулж болох утга:

  - Хувьсагч

    Компонентруу name нэртэй утга props-р дамжуулж байна.

    ```sh
    <Welcome name="Saraa" />;
    ```

    Компонент нь name нэртэй утгийг props-с авч харуулж байна.

    ```sh
    const Welcome = (props)=> {
      return <h1>Hello, {props.name}</h1>;
    }
    ```

- Функц
- Children буюу компонент дотор дамжуулж өгсөн контент

```sh
<Welcome name="Saraa" />;
```

Дасгал: https://fakestoreapi.com/products

## Up state

## Single source of truth

## Children
