// 1. Үгийн жагсаалтаа үүсгэнэ
const words = [
    {
        word: "Apple",
        hint: "Бөөрөнхий хэлбэртэй амттай жимс",
    },
    {
        word: "pineapple",
        hint: "Боргоцой + Алим",
    },
    {
        word: "jump",
        hint: "Гэнэт дээшлэх",
    },

]
// 2. Санамсаргүй байдлаар жагсаалтаас сонгоно
// 0 - 2 
const randomIndex = Math.floor(Math.random() * 3)
const randomWord = words[randomIndex]

console.log("randomWord", randomWord)

// hariu.innerHTML

// 3. Санамсаргүй сонгосон үгийн урттай тэнцүү
// _ зураас харуулна , Хинт харуулна
const displayWord = document.getElementById("displayWord")
console.log('displayWord', displayWord, randomWord)
for (let i = 0; i < randomWord.word.length; i++) {
    displayWord.append("_")
}
const hint = document.getElementById("hint")
hint.textContent = randomWord.hint
// 4. Товч дарах үед функц ажиллана.
// Функц нь Санамсаргүй сонгосон үг
//  дотор дарсан үсэн
// байна уу шалгана
const usegShalga = (useg) => {
    console.log("usegShalga ajillaj bn==>", useg)
}

// 5. Үсэг таасан бол орсон бол тухайн үсгийг харуулна
// 6. Үсэг таагаагүй бол алдааг нь тоолно
// 7. Алдаа 5-с хэтэрсэн бол Хожигдоно
// 8. Үг бүрэн таасан эсэхийг шалгана




