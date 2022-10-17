const getButton = document.getElementById('click-btn');
const getCounts = document.getElementById('click-counts');
let clickCounts = 0;

getButton.addEventListener('click', () => getCounts.innerHTML = `Clicks feitos: ${clickCounts += 1}`);