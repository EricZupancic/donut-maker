let donutCount = 0;
function addToDonutCount(amountToAdd) {
    donutCount = donutCount + amountToAdd;
}
console.log(donutCount);
addToDonutCount(8);
console.log(donutCount);
function getDonutCount() {
    return donutCount;
}
let counter = 0;
function countUp() {
    counter++;
    const bigText = document.getElementById("page-header");
    bigText.innerText = counter;
}
setInterval(function () {
    counter++;
    document.getElementById("page-header").innerText = counter;
}, 1000); 


