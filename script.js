const options = document.querySelectorAll('.bogo-option input[type="radio"]');
const totalDisplay = document.querySelector('.total strong');

const prices = {
    option1: 10.00,
    option2: 18.00,
    option3: 24.00
};

options.forEach(option => {
    option.addEventListener('change', () => {
        updateTotal();
    });
});

function updateTotal() {
    const selected = document.querySelector('.bogo-option input[type="radio"]:checked');
    const optionId = selected.closest('.bogo-option').id;
    totalDisplay.textContent = `$${prices[optionId].toFixed(2)} USD`;
}
