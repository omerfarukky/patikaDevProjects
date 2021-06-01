const circleArea = (r) => {
    let area = Math.PI * (r ** 2);
    console.log(`Yarıçapı : ${r} olan dairenin alanı : ${area.toFixed(2)}`);
}

const circleCircumference = (r) => {
    let circumference = 2 * Math.PI * r;
    console.log(`Yarıçapı : ${r} olan dairenin çevresi : ${circumference.toFixed(2)}`);
}

module.exports = {
    circleArea: circleArea,
    circleCircumference: circleCircumference
}
