const arguments = process.argv.slice(2);

function circle(r) {
let area;
    area = Math.PI * (r ** 2);
    console.log(`Yarıçapı : ${r} olan dairenin alanı : ${area.toFixed(2)}`);
}
circle(arguments[0] * 1);
