// // function xyz2 (){
// //     return "CHAMP";
// // }
// // function xyz1 (){
// //     return xyz2;
// // }
// // function xyz(){
// //     return xyz1;
// // }
// // const A = xyz()()();
// // console.log(A);


// const abc = function(){
//     return 9 + 9;
// }
// let a = abc();
// console.log(a);

// const arrowfun = () => {
//     return 10 + 4;
// };
// const arrowfun1 = () => {
//     return arrowfun;
// };
// const arrowfun2 = () => {
//     return arrowfun1;
// };
// let arrowfunVal = arrowfun2()()();
// console.log(arrowfunVal);

function calculateProductTax(produts, tax) {
    let total = 0;
    let totalProductSum = 0;
    for (let i = 0; i < produts.length; i++) {
        total += produts[i] + produts[i] * tax;
        totalProductSum += produts[i];
    }
    return {
        productPriceWithTax: total,
        productPriceWithoutTax: totalProductSum,
    };
}

const calTax = calculateProductTax([20, 30,  40, 10], 0.2);
console.log(calTax);

const calculateProductTax = function(produts, tax) {
    let total = 0;
    let totalProductSum = 0;
    for (let i = 0; i < produts.length; i++) {
        total += produts[i] + produts[i] * tax;
        totalProductSum += produts[i];
    }
    return {
        productPriceWithTax: total,
        productPriceWithoutTax: totalProductSum,
    };
}
// function calculateProductTax = (produts, tax) => {
//     let total = 0;
//     let totalProductSum = 0;
//     for (let i = 0; i < produts.length; i++) {
//         total += produts[i] + produts[i] * tax;
//         totalProductSum += produts[i];
//     }
//     return {
//         productPriceWithTax: total,
//         productPriceWithoutTax: totalProductSum,
//     };
// }

// const calTax = calculateProductTax([20, 30,  40, 10], 0.2);
// console.log(calTax);

// const calTax = calculateProductTax([20, 30,  40, 10], 0.2);
// console.log(calTax);
// // 