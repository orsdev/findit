function currentYear() {
 const date = new Date();
 return date.getFullYear();
};

function renderToDom() {
 const getYear = currentYear();
 const element = document.querySelector('.date');
 element.textContent = getYear;
}

renderToDom();