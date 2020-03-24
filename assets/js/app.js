async function makeHttpRequest(query) {
 const key = "AIzaSyCwmcFdumiaV93CEzz5tCyaexgoM5lV7Jk";
 let url = `https://www.googleapis.com/customsearch/v1?key=${key}&cx=010994708637721124207:qesamehgdnf&q=${query}`;

 const request = await fetch(url);

 return request.json();
}


const updateUI = () => {

 /*Make a http request only 
 when word to search is provided
 by user
 */
 if (getInputValue()) {
  makeHttpRequest(getInputValue())
   .then((data) => {

    let content = document.querySelector('.content');
    content.innerHTML = '';

    data.items.forEach((item) => {
     content.innerHTML +=
      `<div class="content__body">
    <h3 class="content__body-title">${item.htmlTitle}</h3>
    <a href="#" class="content__body-link">${item.formattedUrl}</a>
    <p class="content__body-text">${item.snippet}</p>
   </div >`;
    });
   });
 }
};

const getInputValue = () => {
 const input = document.querySelector('.search');
 if (input.value) {
  return input.value;
 }
}
