const bogoOptions = document.querySelectorAll('.bogo-option');

bogoOptions.forEach(option => {
    option.addEventListener('click', () => {
        option.classList.toggle('expanded');
    });
});
