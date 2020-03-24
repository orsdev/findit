async function makeHttpRequest(query) {
 const key = "AIzaSyCwmcFdumiaV93CEzz5tCyaexgoM5lV7Jk";
 let url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=010994708637721124207:qesamehgdnf&q=${query}`;

 const request = await fetch(url);

 return request.json();
}

function eventListener() {
 const form = document.querySelector('form');
 const error = document.querySelector('.error');

 form.addEventListener('submit', renderToDom);
 error.addEventListener('click', hideErrorMessage);
}


const renderToDom = (event) => {
 event.preventDefault();

 updateUI();
}

const updateUI = () => {

 /*Make a http request only 
 when word to search is provided
 by user
 */
 if (getInputValue()) {

  removeAnimation();
  showLoader();

  makeHttpRequest(getInputValue())
   .then((data) => {

    let content = document.querySelector('.content');
    content.innerHTML = '';

    data.items.forEach((item) => {
     content.innerHTML +=
      `<a href="${item.link}" target="_blank" rel="nofollow" class="goto-link">
      <div class="content__body">
      <h3 class="content__body-title">${item.htmlTitle}</h3>
      <a href="${item.link}" target="_blank" rel="nofollow" class="content__body-link">${item.formattedUrl}</a>
      <p class="content__body-text">${item.snippet}</p>
      </div >
     </a>`;
    });

    hideLoader();

   })
   .catch((err) => {
    hideLoader();
    errorMessagePopup(err);
   })
 }
};

const getInputValue = () => {
 const input = document.querySelector('.search');
 if (input.value) {
  return input.value;
 }
}

const showLoader = () => {
 const loader = document.querySelector('.loader');
 loader.style.display = 'block';
}

const hideLoader = () => {
 const loader = document.querySelector('.loader');
 loader.style.display = 'none';
}

const errorMessagePopup = (message) => {
 const error = document.querySelector('.error');
 const error_message = document.querySelector('.error__message');

 error_message.textContent = message;
 error.style.display = 'block';
}

const hideErrorMessage = () => {
 const error = document.querySelector('.error');
 error.style.display = 'none';
}

const removeAnimation = () => {
 const body = document.querySelector('body');
 body.classList.remove('animation');
}


eventListener();