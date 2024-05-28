function calcD(a, b, c) {
    return b*b - 4*a*c;
}
function areEqual(num1, num2) {
    return num1 === num2;
}

function findMin(num1, num2) {
    return num1 < num2 ? num1 : num2;
}

function findMax(num1, num2) {
    return num1 > num2 ? num1 : num2;
}

console.log(calcD(5, 6, 7));
console.log(areEqual(1, 1));
console.log(areEqual(3, '4'));
console.log(areEqual(5, 6));