function highlightToday() {
    const today = new Date();
    const currentMonth = today.getMonth() + 1; // January is 0
    const currentDate = today.getDate();

    if (currentMonth === 4 && today.getFullYear() === 2024) {
        const allCells = document.querySelectorAll('td div');
        allCells.forEach(cell => {
            if (parseInt(cell.textContent) === currentDate) {
                cell.parentNode.classList.add('today');
            }
        });
    }
}

function saveToLocalStorage() {
    document.querySelectorAll('td').forEach(cell => {
        const input = cell.querySelector('input');
        const date = cell.querySelector('div').getAttribute('data-date');
        input.addEventListener('change', () => {
            localStorage.setItem(date, input.value);
        });
    });
}

function loadFromLocalStorage() {
    document.querySelectorAll('td').forEach(cell => {
        const input = cell.querySelector('input');
        const date = cell.querySelector('div').getAttribute('data-date');
        const savedText = localStorage.getItem(date);
        if (savedText) {
            input.value = savedText;
        }
    });
}

highlightToday();
loadFromLocalStorage();
saveToLocalStorage();
