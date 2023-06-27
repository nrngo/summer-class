<!-- - Цээжлэх тоглоом: Хүний нэр, нас, ажил, хобби цээжлээд таана

1. 2 - оороо баг болно
2. Бүгд нэг нэгээрээ нэр, нас, ажил (сургууль), хобби -гоо бүгдэнд нь танилцуулна
3. Дарааллаа сугалана: https://www.random.org/lists/
4. Дарааллын дагуу гарч ирээд ангийн хүүхдүүдээ нэрлэх бөгөөд хамгийн олон хүний мэдээлэл цээжилсэн нь хожно

- Шагнал: Хос киноны тасалбар

  <img src="image.png" alt="drawing" width="200"/>
  <img src="image-1.png" alt="drawing" width="200"/>
  <img src="image-2.png" alt="drawing" width="200"/> -->

# Хичээл 14: JS Давтлага

- Алгоритм: Алгоритм үр дүнд хүрэх алхамуудын олонлог
- Блок схем: http://www.flowgorithm.org/download/index.html

```sh

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

```

```sh

let temperature = prompt("Өнөөдрийн температур оруулна уу:");

// Гараас өгсөн утгийг тооруу хөрвүүлэх
temperature = parseFloat(temperature);

if (temperature > 30) {
  console.log("Маш халуун өдөр байна, ус сайн уугаарай");
} else if (temperature >= 20 && temperature <= 30) {
  console.log("Дажгүй өдөр байна!");
} else if (temperature < 20) {
  console.log("Тийм ч дулаахан биш байна");
} else {
  console.log("Буруу температур оруулсан байна.");
}

```

1. 2 тооны ихийг олоод дэлгэцэнд харуулна уу. Функц ашиглана
2. Гараас тэгш өнцөгтийн өргөн, өндөр өгөх ба дүрс хэвтээ эсвэл босоо болохыг ол
3. Гараас өгсөн тоо хүртлэх тэгш эсвэл сондгой тоог ол
