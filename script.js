const boxes = document.querySelectorAll('.box');

boxes.forEach(box => {
    box.addEventListener('click', () => {
        // Collapse all boxes first
        boxes.forEach(b => b.classList.remove('expanded'));

        // Expand the clicked box
        box.classList.add('expanded');
    });
});
