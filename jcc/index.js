
// begin1
// let R=6;
// let L=2*Math.PI*R;
// let S=Math.PI*R*R;
// console.log(S,L);

// begin2
// let a=4;
// let b=25;
// let G=Math.sqrt(a*b);
// console.log(G);

// begin3
// let x=3;
// let y=3*x**6-6*3**2-7;
// console.log(y);


// begin5
// let a=7;
// let b=5;
// let c=2;
// a=a-c;
// b=a+c;
// console.log(a,b);


// integer1 masala
// let a = 16
// let b = Math.floor(a/10);
// console.log(b); 

// let c = 19;
// let h = c%10;
// console.log(h);

// let s = b+h 
// console.log(s);

// integer2




// ===========================================

// begin1
// let a=4;
// let b=5;
// let S=(a*b);
// let P=2*(a+b);
// console.log(S,P);

// begin2
// let d=6;
// let L=Math.PI*d;
// let r=d/2;
// let S=Math.PI*r**r;
// console.log(L,S);

// begin3
// let a=4;
// let V=a**3;
// let S=6*a**2;
// console.log(V,S);

// begin4
// let a=4;
// let b=5;
// let c=6;
// let V=a*b*c;
// let S=2*(a*b+b*c+a*c);
// console.log(V,S);

// begin5
// let a=7;
// let b=8;
// let M=(a+b)/2;
// console.log(M);


// begin6
// let a=6;
// let b=9;
// let P=a+b
// let c=Math.sqrt(a**2+b**2);
// console.log(P,c);

// begin7
// let r1=8;
// let r2=7;
// let S1=Math.PI*r1;
// let S2=Math.PI*r2;
// let S=Math.PI*(r1**2-r2**2);
// console.log(S);



// -----------------------------------------


// 1-masala
// function raqamlariYigindisiVaRaqamlariSoniniChiqar(n) {
//     // Raqamlarni yig'indisi va sonini saqlash uchun o'zgaruvchilar
//     let yigindi = 0;
//     let son = 0;
//     let sonStr = "";

//     // Berilgan sonni qoldiqlarini hisoblash va raqamlarni yig'indisi
//     while (n > 0) {
//         let qoldiq = n % 10;
//         yigindi += qoldiq;
//         sonStr = qoldiq.toString() + sonStr; // Raqamlar sonini quruvchi string
//         n = Math.floor(n / 10);
//     }

//     // Raqamlarni soni
//     son = parseInt(sonStr);

//     // Natijani chiqarish
//     console.log("Raqamlar yig'indisi:", yigindi);
//     console.log("Raqamlar soni:", son);
// }

// // Test qilish
// let n = 12345; // Test uchun berilgan son
// raqamlariYigindisiVaRaqamlariSoniniChiqar(n)

// 2masala

// function joylashuvSoni(A, B) {
//     // B kesmani nechta marta joylashtrish mumkinligini hisoblash
//     let joylashuvlar = Math.floor(A / B);

//     // Natijani chiqarish
//     console.log("B kesmani A kesmada joylashtrish mumkin bo'lgan joylar soni:", joylashuvlar);
// }

// // Test qilish
// let A = 10; // A uzunligi
// let B = 3;  // B uzunligi
// joylashuvSoni(A, B);

// 3masala

// function chiqarishTartibi(A) {
//     // Massiv uzunligi
//     let n = A.length;

//     // Massiv elementlarini chiqarish
//     console.log("A[0]:", A[0]);
//     console.log("A[1]:", A[1]);

//     // Tengmasa tartibda chiqarish
//     for (let i = 2; i < Math.floor(n / 2); i++) {
//         console.log("A[" + i + "]:", A[i]);
//         console.log("A[" + (n - i - 1) + "]:", A[n - i - 1]);
//     }

//     // Agar massiv uzunligi toq son bo'lsa, o'rtadagi elementni chiqarish
//     if (n % 2 !== 0) {
//         console.log("O'rta element:", A[Math.floor(n / 2)]);
//     }
// }

// // Test qilish
// let A = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // Test uchun berilgan massiv
// chiqarishTartibi(A);




// 4masala
// function yigindi(n) {
//     let total = 0;

//     // n ta sonning yig'indisini hisoblash
//     for (let i = 1; i <= n; i++) {
//         total += i;
//     }

//     // Natijani chiqarish
//     console.log("1 dan", n, "gacha sonlar yig'indisi:", total);
// }

// // Test qilish
// let n = 5; // Test uchun berilgan son
// yigindi(n);


// 5masala

// function yangiMassiv(A) {
//     if (A.length > 8) {
//         // Dastlabki 3 ta va oxirgi 4 ta elementni olish
//         let dastlabkiUch = A.slice(0, 3);
//         let oxirgiToq = A.slice(-4);

//         // Yangi massivni yaratish
//         let x = [...dastlabkiUch, ...oxirgiToq];

//         // Natijani chiqarish
//         console.log("Yangi massiv:", x);
//     } else {
//         console.log("Massiv 8 dan kam elementga ega.");
//     }
// }

// // Test qilish
// let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Test uchun berilgan massiv
// yangiMassiv(A);


// 7masala

// function tubBolganElementlarniChiqar(A) {
//     // Tub sonni aniqlash funksiyasi
//     function tubSonmi(x) {                                                                                                     
//         if (x < 2) return false;
//         for (let i = 2; i <= Math.sqrt(x); i++) {
//             if (x % i === 0) return false;
//         }
//         return true;
//     }

//     // Massivdan tub bolgan elementlarni chiqarish
//     for (let i = 0; i < A.length; i++) {
//         if (tubSonmi(A[i])) {
//             console.log("Massivdagi tub bolgan element:", A[i]);
//         }
//     }
// }

// // Test qilish
// let A = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Test uchun berilgan massiv
// tubBolganElementlarniChiqar(A);

// 8masala

// function birXilQiymatliIndeks(A) {
//     let indekslar = [];

//     // Massivni elementlarini tekshirish
//     for (let i = 0; i < A.length; i++) {
//         for (let j = i + 1; j < A.length; j++) {
//             // Agar ikkita element bir xil bo'lsa
//             if (A[i] === A[j]) {
//                 indekslar.push(i);
//                 indekslar.push(j);
//             }
//         }
//     }

//     // Natijani chiqarish
//     console.log("Bir xil qiymatli elementlar indekslari:", indekslar);
// }

// // Test qilish
// let A = [22, 7, 37, 56, 3, 98]; // Test uchun berilgan massiv
// birXilQiymatliIndeks(A);


// 9masala
// function yigindiniAyirish(A) {
//     let toqYigindi = 0;
//     let juftYigindi = 0;

//     // Massiv elementlarini tekshirish va yig'indini aniqlash
//     for (let i = 0; i < A.length; i++) {
//         if (A[i] % 2 === 0) {
//             juftYigindi += A[i];
//         } else {
//             toqYigindi += A[i];
//         }
//     }

//     // Natijani chiqarish
//     console.log("Toq qiymatlar yig'indisi:", toqYigindi);
//     console.log("Juft qiymatlar yig'indisi:", juftYigindi);
//     console.log("Yig'indisining farqi:", Math.abs(toqYigindi - juftYigindi));
// }

// // Test qilish
// let A = [1, 2, 3, 4, 5, 6]; // Test uchun berilgan massiv
// yigindiniAyirish(A);


// 10masala

// function darajalarVaYigindi(a, n) {
//     let yigindi = 0;

//     // Darajalar va yig'indini hisoblash
//     for (let i = 1; i <= n; i++) {
//         let daraja = Math.pow(a, i);
//         console.log("a ning", i + "-darajasi:", daraja);
//         yigindi += daraja;
//     }

//     // Yig'indini chiqarish
//     console.log("Barcha darajalar yig'indisi:", yigindi);
// }

// // Test qilish
// let a = 2; // Test uchun haqiqiy son
// let n = 3; // Test uchun butun son
// darajalarVaYigindi(a, n);



// masalalar


// 1 masala

// const n = 5;
// const belgi = "A";
// const natija = be gi.repeat(n);

// console.log(natija);

// 2 masala
// function almashuv(satr) {
//     return satr.replace(/[A-Z]/g, function(match) {
//       return match === match.toUpperCase() ? match.toLowerCase() : match.toUpperCase();
//     });
//   }

//   const berilganSatr = "Satr berilgan.";
//   const natija = almashuv(berilganSatr);
//   console.log(natija);

//4 masalaa
// function orttir(S, C) {
//     return S.replace(new RegExp(C, "g"), C + C);
//   }

//   const S = "CSS is a style sheet language.";
//   const C = "S";

//   const natija = orttir(S, C);
//   console.log(natija);

// 6masala

// function almashuv(massiv) {
//     const orta = massiv.length / 2;
//     const birinchiYarmi = massiv.slice(0, orta);
//     const ikkinchiYarmi = massiv.slice(orta);

//     for (let i = 0; i < orta; i++) {
//       const temp = birinchiYarmi[i];
//       birinchiYarmi[i] = ikkinchiYarmi[i];
//       ikkinchiYarmi[i] = temp;
//     }

//     return birinchiYarmi.concat(ikkinchiYarmi);
//   }

//   const massiv = [1, 2, 3, 4];
//   const natija = almashuv(massiv);
//   console.log(natija);

// 7masala

// const N = 5;
// let satr = "";

// for (let i = 1; i <= N; i++) {
//   satr += "1".repeat(i) + "\n";
// }

// console.log(satr);

// 10   masala
// let juftYigindi = 0;
// let juftKupaytma = 1;

// for (let i = 88; i <= 100; i += 2) {
//     juftYigindi += i;
//     juftKupaytma *= i;
// }
// console.log("Juft sonlar yig'indisi: " + juftYigindi);
// console.log("Juft sonlar ko'paytmasi: " + juftKupaytma);



function groupByValue(obj) {
    let result = {};
    for (let key in obj) {
        let value = obj[key];
        if (result[value]) {
            result[value].push(key);
        } else {
            result[value] = [key];
        }
    }
    return result;
}

let input = {1: 20, 2: 30, 3: 20, 4: 40, 5: 30, 6: 50, 7: 40, 8: 20};
let output = groupByValue(input);
console.log(output);